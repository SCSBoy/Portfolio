import {
  AfterViewInit, Component, ElementRef, OnDestroy,
  ViewChild, signal, computed, inject
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { PROJECTS, Project } from '../../data/projects.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { TransitionService } from '../../shared/transition.service';
import { I18nService } from '../../shared/i18n.service';
import * as THREE from 'three';

@Component({
  selector: 'app-projects',
  imports: [MatButtonModule, MatIconModule, MatChipsModule, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit, OnDestroy {
  @ViewChild('pyramidCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  protected readonly projects = PROJECTS;
  public readonly activeProject = signal<Project>(this.projects[0]);
  public readonly currentPage = signal<number>(0);
  protected readonly projectsPerPage = 3;
  protected readonly transitionService = inject(TransitionService);
  protected readonly i18n = inject(I18nService);

  protected readonly totalPages = computed(() =>
    Math.ceil(this.projects.length / this.projectsPerPage)
  );
  protected readonly currentPyramidProjects = computed(() => {
    const start = this.currentPage() * this.projectsPerPage;
    return this.projects.slice(start, start + this.projectsPerPage);
  });
  protected readonly activeProjectIndex = computed(() =>
    this.projects.findIndex(p => p.slug === this.activeProject().slug)
  );

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private pyramidGroup = new THREE.Group();
  private cubeMeshes: THREE.Mesh[] = [];
  private animId!: number;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private frame = 0;
  private sceneObserver?: IntersectionObserver;

  // Bound event listeners for proper cleanup
  private onResizeBound = this.onResize.bind(this);
  private onClickBound = this.onClick.bind(this);
  private onMouseMoveBound = this.onMouseMove.bind(this);

  // Cartoon toon gradient texture
  private toonGradient!: THREE.Texture;

  // Per-slot default colors [top, front, right]
  private readonly defaultColors = [
    { top: 0x4FC3F7, front: 0x0288D1, right: 0x01579B },
    { top: 0x81D4FA, front: 0x03A9F4, right: 0x0277BD },
    { top: 0xB3E5FC, front: 0x29B6F6, right: 0x0288D1 },
  ];

  // Active highlight colors
  private readonly activeColors = { top: 0xFFE082, front: 0xFFCA28, right: 0xF9A825 };

  ngAfterViewInit(): void {
    // Reset Three.js group so re-mounting (after navigation) starts fresh
    this.pyramidGroup = new THREE.Group();

    // Defer the (relatively heavy) WebGL init until the canvas is about to
    // scroll into view, so it doesn't compete with the initial page load
    // on mobile.
    const canvas = this.canvasRef.nativeElement;
    if (typeof IntersectionObserver === 'undefined') {
      this.initScene();
      return;
    }
    this.sceneObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        this.sceneObserver?.disconnect();
        this.sceneObserver = undefined;
        this.initScene();
      }
    }, { rootMargin: '200px' });
    this.sceneObserver.observe(canvas);
  }

  private makeToonGradient(): THREE.Texture {
    // Use a canvas for reliable cross-browser toon shading steps
    const cv = document.createElement('canvas');
    cv.width = 4; cv.height = 1;
    const ctx = cv.getContext('2d')!;
    // 4 brightness steps: shadow → midtone → light → highlight
    const stops = ['#404040', '#808080', '#c0c0c0', '#ffffff'];
    stops.forEach((color, i) => {
      ctx.fillStyle = color;
      ctx.fillRect(i, 0, 1, 1);
    });
    const tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    return tex;
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;
    const W = canvas.clientWidth || 460;
    const H = canvas.clientHeight || 380;
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;

    this.scene = new THREE.Scene();
    this.scene.add(this.pyramidGroup);
    this.toonGradient = this.makeToonGradient();

    // Isometric camera
    this.camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
    this.camera.position.set(5, 6, 8);
    this.camera.lookAt(0, 1.2, 0);

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true, powerPreference: 'low-power' });
    this.renderer.setSize(W, H);
    this.renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = !isMobile;

    // Cartoon-friendly lighting
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(4, 8, 6);
    key.castShadow = !isMobile;
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xaaddff, 0.4);
    rim.position.set(-5, 2, -3);
    this.scene.add(rim);

    this.buildPyramid();
    canvas.addEventListener('click', this.onClickBound);
    canvas.addEventListener('mousemove', this.onMouseMoveBound);
    window.addEventListener('resize', this.onResizeBound);
    this.loop();
  }

  /** Simple number-only texture for cartoon cube face */
  private makeNumberTexture(num: number): THREE.Texture | null {
    const cv = document.createElement('canvas');
    cv.width = 128; cv.height = 128;
    const ctx = cv.getContext('2d');
    if (!ctx) return null; // Guard against SSR / headless env
    ctx.clearRect(0, 0, 128, 128);
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.font = 'bold 72px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(num).padStart(2, '0'), 64, 68);
    return new THREE.CanvasTexture(cv);
  }

  private makeMaterials(cols: { top: number; front: number; right: number }, frontTex: THREE.Texture | null): THREE.MeshToonMaterial[] {
    const make = (color: number, map?: THREE.Texture) =>
      new THREE.MeshToonMaterial({ color, gradientMap: this.toonGradient, ...(map ? { map } : {}) });
    return [
      make(cols.right),
      make(cols.right),
      make(cols.top),
      make(0x000820),
      frontTex ? make(cols.front, frontTex) : make(cols.front), // safe guard: never pass undefined map
      make(cols.right),
    ];
  }

  private buildPyramid(): void {
    while (this.pyramidGroup.children.length) this.pyramidGroup.remove(this.pyramidGroup.children[0]);
    this.cubeMeshes = [];

    const S = 1.6; // cute small cube
    const projects = this.currentPyramidProjects();

    const layout = [
      { x: 0, y: S, pidx: 0 },
      { x: -S / 2, y: 0, pidx: 1 },
      { x: S / 2, y: 0, pidx: 2 },
    ];

    layout.forEach(({ x, y, pidx }) => {
      if (pidx >= projects.length) return;
      const project = projects[pidx];
      const numTex = this.makeNumberTexture(pidx + 1);
      const cols = this.defaultColors[pidx];
      const geo = new THREE.BoxGeometry(S, S, S);
      const mats = this.makeMaterials(cols, numTex);

      const mesh = new THREE.Mesh(geo, mats);
      const posY = y + S / 2;
      mesh.position.set(x, posY, 0);
      mesh.userData = { project, pidx, posY };
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // === Cartoon outline (BackSide trick) ===
      const outlineMat = new THREE.MeshBasicMaterial({
        color: 0x1a1a2e,
        side: THREE.BackSide,
      });
      const outline = new THREE.Mesh(new THREE.BoxGeometry(S * 1.10, S * 1.10, S * 1.10), outlineMat);
      mesh.add(outline);

      this.pyramidGroup.add(mesh);
      this.cubeMeshes.push(mesh);
    });
  }

  private loop(): void {
    this.animId = requestAnimationFrame(() => this.loop());
    this.frame++;

    const activeSlug = this.activeProject().slug;
    const tmpColor = new THREE.Color();

    this.cubeMeshes.forEach(m => {
      const pidx: number = m.userData['pidx'];
      const isActive = m.userData['project']?.slug === activeSlug;
      const cols = isActive ? this.activeColors : this.defaultColors[pidx];
      const mats = m.material as THREE.MeshToonMaterial[];

      const targetColors = [
        cols.right, cols.right, cols.top,
        0x000820, cols.front, cols.right,
      ];
      mats.forEach((mat, i) => mat.color.lerp(tmpColor.setHex(targetColors[i]), 0.1));

      // Scale up active cube (no Y movement to avoid overlap)
      const targetScale = isActive ? 1.05 : 1.0;
      m.scale.setScalar(m.scale.x + (targetScale - m.scale.x) * 0.12);
    });

    this.renderer.render(this.scene, this.camera);
  }

  private ndc(e: MouseEvent): void {
    const r = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    this.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  }

  private onClick(e: MouseEvent): void {
    this.ndc(e);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hit = this.raycaster.intersectObjects(this.cubeMeshes, true);
    if (hit.length) {
      let obj = hit[0].object;
      while (obj.parent && !obj.userData['project']) obj = obj.parent as THREE.Object3D;
      const proj = obj.userData['project'];
      if (proj) this.activeProject.set(proj);
    }
  }

  private onMouseMove(e: MouseEvent): void {
    this.ndc(e);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hit = this.raycaster.intersectObjects(this.cubeMeshes, true);
    this.canvasRef.nativeElement.style.cursor = hit.length ? 'pointer' : 'default';
  }

  private onResize(): void {
    const el = this.canvasRef.nativeElement;
    this.camera.aspect = el.clientWidth / el.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(el.clientWidth, el.clientHeight);
  }

  public selectProject(p: Project): void { this.activeProject.set(p); }

  public nextProject(): void {
    this.gotoProjectIndex((this.activeProjectIndex() + 1) % this.projects.length);
  }

  public prevProject(): void {
    this.gotoProjectIndex((this.activeProjectIndex() - 1 + this.projects.length) % this.projects.length);
  }

  private gotoProjectIndex(idx: number): void {
    const page = Math.floor(idx / this.projectsPerPage);
    if (page !== this.currentPage()) {
      this.currentPage.set(page);
      this.buildPyramid();
    }
    this.activeProject.set(this.projects[idx]);
  }

  public nextPage(): void {
    this.currentPage.set((this.currentPage() + 1) % this.totalPages());
    this.buildPyramid();
    this.activeProject.set(this.currentPyramidProjects()[0]);
  }

  public prevPage(): void {
    this.currentPage.set((this.currentPage() - 1 + this.totalPages()) % this.totalPages());
    this.buildPyramid();
    this.activeProject.set(this.currentPyramidProjects()[0]);
  }

  ngOnDestroy(): void {
    this.sceneObserver?.disconnect();
    cancelAnimationFrame(this.animId);
    // Dispose all geometries and materials in the pyramid group
    this.cubeMeshes.forEach(m => {
      (m.geometry as THREE.BufferGeometry).dispose();
      (m.material as THREE.Material[]).forEach(mat => mat.dispose());
    });
    this.toonGradient?.dispose();
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }
    // Remove event listeners
    const canvas = this.canvasRef?.nativeElement;
    if (canvas) {
      canvas.removeEventListener('click', this.onClickBound);
      canvas.removeEventListener('mousemove', this.onMouseMoveBound);
    }
    window.removeEventListener('resize', this.onResizeBound);
  }
}
