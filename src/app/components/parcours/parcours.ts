import {
  AfterViewInit, Component, ElementRef, OnDestroy,
  QueryList, ViewChild, ViewChildren, signal, computed, effect, inject
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animate, stagger } from 'animejs';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export interface TimelineItem {
  year: { en: string; fr: string };
  title: { en: string; fr: string };
  place: { en: string; fr: string };
  description: { en: string; fr: string };
  tags?: string[];
  current?: boolean;
  credentialUrl?: string;
  previewUrl?: string;
  previewType?: 'image' | 'pdf';
}

type ParcoursTab = 'pro' | 'academic' | 'certifications';

const PROFESSIONAL: TimelineItem[] = [
  { 
    year: { en: 'May 2025 – August 2025', fr: 'Mai 2025 – Août 2025' }, 
    title: { en: 'Software Developer Intern', fr: 'Développeur logiciel' }, 
    place: { en: 'ORABANK-TOGO — Lomé', fr: 'ORABANK-TOGO — Lomé' }, 
    description: { en: 'Software development internship at ORABANK-TOGO. Built a web application that automates change request file creation with a configurable approval workflow.', fr: 'Stage en programmation logiciel à ORABANK-TOGO. Développement d\'une application web d\'automatisation de la création de fiche de changement avec un workflow d\'approbation paramétrable.' }, 
    tags: ['Angular', 'Spring Boot', 'Workflow'], current: true 
  },
  { 
    year: { en: 'July 2024 – August 2024', fr: 'Juillet 2024 – Août 2024' }, 
    title: { en: 'Software Developer Intern', fr: 'Développeur logiciel' }, 
    place: { en: 'ORABANK-TOGO — Lomé', fr: 'ORABANK-TOGO — Lomé' }, 
    description: { en: 'Software development internship at ORABANK-TOGO. Developed a banking reconciliation web application with Angular and Spring Boot.', fr: 'Stage en programmation logiciel à ORABANK-TOGO. Développement d\'une application web de rapprochements bancaires avec les technologies Angular et Spring Boot.' }, 
    tags: ['Angular', 'Spring Boot', 'Banking'] 
  },
  { 
    year: { en: 'July 2023 – August 2023', fr: 'Juillet 2023 – Août 2023' }, 
    title: { en: 'IT Technician Intern', fr: 'Technicien Informatique' }, 
    place: { en: 'Clinique BIASA — Lomé', fr: 'Clinique BIASA — Lomé' }, 
    description: { en: 'Software development internship at Clinique BIASA. Provided user support and resolved technical issues.', fr: 'Stage en programmation logiciel à la Clinique BIASA. Support utilisateur et résolution de problèmes techniques.' }, 
    tags: ['Support', 'IT', 'Troubleshooting'] 
  },
];

const ACADEMIC: TimelineItem[] = [
  { 
    year: { en: '2025 – 2027 (In progress)', fr: '2025 – 2027 (En cours)' }, 
    title: { en: 'Master\'s in AI and Big Data', fr: 'Master en IA et Big Data' }, 
    place: { en: 'EPL — Lomé', fr: 'EPL — Lomé' }, 
    description: { en: 'Master\'s program focused on artificial intelligence and Big Data.', fr: 'Master en IA et Big Data.' }, 
    tags: ['IA', 'Big Data'], current: true 
  },
  { 
    year: { en: '2024 – 2025', fr: '2024 – 2025' }, 
    title: { en: 'Bachelor\'s Degree in Computer Engineering', fr: 'Licence' }, 
    place: { en: 'IAI-TOGO — Lomé', fr: 'IAI-TOGO — Lomé' }, 
    description: { en: 'Diploma in computer engineering, BAC+3 level.', fr: 'Diplôme d\'Ingénieur des Travaux Informatiques BAC+3.' }, 
    tags: ['Informatique', 'BAC+3'] 
  },
  { 
    year: { en: '2022 – 2023', fr: '2022 – 2023' }, 
    title: { en: 'BAC 2 — Series C', fr: 'BAC 2 — Série C' }, 
    place: { en: 'Lycée moderne d\'Adidogomé 1', fr: 'Lycée moderne d\'Adidogomé 1' }, 
    description: { en: 'Scientific track, Series C.', fr: 'Série C.' }, 
    tags: ['Sciences', 'Mathématiques'] 
  },
];

const CERTIFICATIONS: TimelineItem[] = [
  {
    year: { en: 'Certificate', fr: 'Certificat' },
    title: { en: 'CCNAv7: Switching, Routing, and Wireless Essentials', fr: 'CCNAv7 : Switching, Routing, and Wireless Essentials' },
    place: { en: 'Cisco Networking Academy', fr: 'Cisco Networking Academy' },
    description: { en: 'Networking certification focused on switching, routing and wireless essentials.', fr: 'Certification réseau axée sur les notions essentielles de commutation, routage et réseaux sans fil.' },
    tags: ['Cisco', 'CCNA', 'Networking'],
    credentialUrl: 'documents/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png',
    previewUrl: 'documents/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate.png',
    previewType: 'image',
  },
  {
    year: { en: 'Certificate', fr: 'Certificat' },
    title: { en: 'CCNAv7: Introduction to Networks', fr: 'CCNAv7 : Introduction to Networks' },
    place: { en: 'Cisco Networking Academy', fr: 'Cisco Networking Academy' },
    description: { en: 'Networking certification covering network fundamentals and introductory CCNA concepts.', fr: 'Certification réseau couvrant les fondamentaux des réseaux et les premières notions CCNA.' },
    tags: ['Cisco', 'CCNA', 'Networks'],
    credentialUrl: 'documents/CCNA-_Introduction_to_Networks_certificate.png',
    previewUrl: 'documents/CCNA-_Introduction_to_Networks_certificate.png',
    previewType: 'image',
  },
  {
    year: { en: 'Certificate', fr: 'Certificat' },
    title: { en: 'Certificate of Completion for Free AI Video Generation Course', fr: 'Certificate of Completion for Free AI Video Generation Course' },
    place: { en: 'AI Video Generation Course', fr: 'AI Video Generation Course' },
    description: { en: 'Course completion certificate focused on AI-assisted video generation.', fr: 'Certificat de fin de formation autour de la génération vidéo assistée par IA.' },
    tags: ['AI', 'Video', 'Generation'],
    credentialUrl: 'documents/Free%20AI%20Video%20Generation%20Course_Certificate.png',
    previewUrl: 'documents/Free%20AI%20Video%20Generation%20Course_Certificate.png',
    previewType: 'image',
  },
  {
    year: { en: 'Certificate', fr: 'Certificat' },
    title: { en: 'Certificate of Completion for Angular Basics', fr: 'Certificate of Completion for Angular Basics' },
    place: { en: 'Angular Training', fr: 'Formation Angular' },
    description: { en: 'Angular basics certificate covering the fundamentals of modern Angular development.', fr: 'Certificat Angular basics couvrant les bases du développement Angular moderne.' },
    tags: ['Angular', 'Frontend', 'TypeScript'],
    credentialUrl: 'documents/ANGULAR_CERTIFICATION.png',
    previewUrl: 'documents/ANGULAR_CERTIFICATION.png',
    previewType: 'image',
  },
];

const NODE_W = 340; // px per node

@Component({
  selector: 'app-parcours',
  imports: [MatButtonModule, MatIconModule, RevealDirective],
  templateUrl: './parcours.html',
  styleUrl: './parcours.scss',
})
export class Parcours implements AfterViewInit, OnDestroy {
  private get nodeWidth(): number {
    if (typeof window === 'undefined') return 340;
    return window.innerWidth < 600 ? 280 : 340;
  }

  @ViewChild('sectionEl') sectionEl!: ElementRef<HTMLElement>;
  @ViewChild('bgCanvas')  bgCanvas!:  ElementRef<HTMLCanvasElement>;
  @ViewChild('axisLine')  axisLine!:  ElementRef<HTMLElement>;
  @ViewChild('track')     track!:     ElementRef<HTMLElement>;
  @ViewChild('viewport')  viewport!:  ElementRef<HTMLElement>;
  @ViewChildren('node')   nodeRefs!:  QueryList<ElementRef<HTMLElement>>;

  protected readonly tab    = signal<ParcoursTab>('pro');
  protected readonly isOpen = signal(false);
  protected readonly scrollLeft = signal(0);
  protected readonly i18n   = inject(I18nService);

  protected toggleOpen(): void {
    this.isOpen.update(v => !v);
    // Refresh ScrollTrigger after a short delay so heights recalculate
    setTimeout(() => ScrollTrigger.refresh(), 300);
  }
  protected readonly items  = computed(() => {
    if (this.tab() === 'pro') return PROFESSIONAL;
    if (this.tab() === 'academic') return ACADEMIC;
    return CERTIFICATIONS;
  });
  protected readonly atStart = computed(() => this.scrollLeft() <= 0);
  protected readonly atEnd   = computed(() => {
    const max = (this.items().length - 1) * this.nodeWidth;
    return this.scrollLeft() >= max - 10; // -10 for safety margin
  });
  protected readonly activeIdx = computed(() => Math.round(this.scrollLeft() / this.nodeWidth));

  private threeRenderer?: THREE.WebGLRenderer;
  private threeAnimId?: number;
  private threeGeo?: THREE.BufferGeometry;
  private threeMat?: THREE.PointsMaterial;
  private st?: ScrollTrigger;
  private wheelCleanup?: () => void;

  constructor() {
    // Rebuild timeline whenever tab changes
    effect(() => {
      this.tab(); // read signal
      if (this.viewport?.nativeElement) {
        this.viewport.nativeElement.scrollLeft = 0;
      }
      this.scrollLeft.set(0);
      setTimeout(() => { this.resetAxis(); this.runAnime(); }, 80);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initThree();
      this.initGsap();
      this.runAnime();
      this.initWheel();
    }, 150);
  }

  // ── Three.js particle background ──────────────────────
  private initThree(): void {
    const canvas = this.bgCanvas.nativeElement;
    const W = canvas.parentElement!.clientWidth;
    const H = canvas.parentElement!.clientHeight;
    canvas.width = W; canvas.height = H;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(W, H);
    this.threeRenderer = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 1, 1000);
    camera.position.z = 300;

    const count = 120;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * W * 2;
      pos[i*3+1] = (Math.random() - 0.5) * H * 2;
      pos[i*3+2] = (Math.random() - 0.5) * 200;
      vel[i*2]   = (Math.random() - 0.5) * 0.3;
      vel[i*2+1] = (Math.random() - 0.5) * 0.3;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    // Bleu vif de la palette (la section vit dans une bande marine)
    const mat = new THREE.PointsMaterial({ color: 0x4d8bf0, size: 2, transparent: true, opacity: 0.45 });
    
    this.threeGeo = geo;
    this.threeMat = mat;

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const loop = () => {
      this.threeAnimId = requestAnimationFrame(loop);
      const pa = geo.attributes['position'].array as Float32Array;
      for (let i = 0; i < count; i++) {
        pa[i*3]   += vel[i*2];
        pa[i*3+1] += vel[i*2+1];
        if (Math.abs(pa[i*3])   > W)   pa[i*3]   *= -0.9;
        if (Math.abs(pa[i*3+1]) > H)   pa[i*3+1] *= -0.9;
      }
      geo.attributes['position'].needsUpdate = true;
      renderer.render(scene, camera);
    };
    loop();
  }

  // ── GSAP: reveal axis line on scroll ─────────────────
  private initGsap(): void {
    this.st = ScrollTrigger.create({
      trigger: this.sectionEl.nativeElement,
      start: 'top 75%',
      once: true,
      onEnter: () => this.resetAxis(),
    });
  }

  private resetAxis(): void {
    const line = this.axisLine?.nativeElement;
    if (!line) return;
    gsap.fromTo(line,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }
    );
  }

  // ── Anime.js: stagger node reveals ───────────────────
  private runAnime(): void {
    const nodes = this.nodeRefs?.toArray().map(r => r.nativeElement);
    if (!nodes?.length) return;

    // Reset first
    nodes.forEach(n => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(20px)';
    });

    // Run Anime.js v4 animation
    animate(nodes, {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: stagger(120, { start: 400 }),
      duration: 700,
      ease: 'outExpo', // v4 syntax
    });
  }

  // ── Horizontal scroll via wheel ───────────────────────
  /**
   * La molette fait defiler la frise horizontalement UNIQUEMENT tant qu'elle
   * peut encore avancer dans ce sens. En butee (debut ou fin), l'evenement
   * n'est plus intercepte et la page defile normalement : sans cela, la
   * molette restait "bloquee" sur la frise.
   */
  private initWheel(): void {
    const vp = this.viewport.nativeElement;
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // real horizontal scroll
      if (e.ctrlKey) return; // zoom navigateur

      const dir: 1 | -1 = e.deltaY > 0 ? 1 : -1;
      const maxLeft = vp.scrollWidth - vp.clientWidth;
      const canPan = dir === 1 ? vp.scrollLeft < maxLeft - 2 : vp.scrollLeft > 2;
      if (!canPan) return; // en butee : laisser la page defiler

      e.preventDefault();
      this.pan(dir);
    };
    vp.addEventListener('wheel', handler, { passive: false });
    this.wheelCleanup = () => vp.removeEventListener('wheel', handler);
  }

  // ── Public navigation ─────────────────────────────────
  protected navigate(dir: 1 | -1): void { this.pan(dir); }

  private pan(dir: 1 | -1): void {
    if (!this.viewport?.nativeElement) return;
    const vp = this.viewport.nativeElement;
    vp.scrollBy({ left: dir * this.nodeWidth, behavior: 'smooth' });
  }

  protected switchTab(t: ParcoursTab): void { this.tab.set(t); }
  
  protected scrollToNode(i: number): void {
    if (!this.viewport?.nativeElement) return;
    const x = i * this.nodeWidth;
    this.viewport.nativeElement.scrollTo({ left: x, behavior: 'smooth' });
  }

  protected onViewportScroll(event: Event): void {
    const target = event.target as HTMLElement;
    this.scrollLeft.set(target.scrollLeft);
  }

  ngOnDestroy(): void {
    this.st?.kill();
    this.wheelCleanup?.();
    cancelAnimationFrame(this.threeAnimId!);
    
    this.threeGeo?.dispose();
    this.threeMat?.dispose();
    
    if (this.threeRenderer) {
      this.threeRenderer.dispose();
      this.threeRenderer.forceContextLoss();
    }
  }
}
