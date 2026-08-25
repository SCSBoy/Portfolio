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
}

const PROFESSIONAL: TimelineItem[] = [
  { 
    year: { en: '2024 – Present', fr: '2024 – Présent' }, 
    title: { en: 'Freelance Full-Stack Developer', fr: 'Développeur Full-Stack Freelance' }, 
    place: { en: 'Independent — Lomé, Togo', fr: 'Indépendant — Lomé, Togo' }, 
    description: { en: 'Designing modern web applications for local and international clients. Stack: Angular, Spring Boot, PostgreSQL.', fr: 'Conception d\'applications web modernes pour clients locaux et internationaux. Stack : Angular, Spring Boot, PostgreSQL.' }, 
    tags: ['Angular', 'Spring Boot', 'PostgreSQL'], current: true 
  },
  { 
    year: { en: '2023 – 2024', fr: '2023 – 2024' }, 
    title: { en: 'Front-End Developer', fr: 'Développeur Front-End' }, 
    place: { en: 'FinTech Startup — Lomé, Togo', fr: 'Startup FinTech — Lomé, Togo' }, 
    description: { en: 'Developed the user interface for a micro-finance application. Implemented the design system and integrated REST APIs.', fr: 'Développement de l\'interface d\'une appli de micro-finance. Mise en place du design system et intégration des APIs REST.' }, 
    tags: ['Angular', 'RxJS', 'Design System'] 
  },
  { 
    year: { en: '2022 – 2023', fr: '2022 – 2023' }, 
    title: { en: 'Junior Web Developer', fr: 'Développeur Web Junior' }, 
    place: { en: 'Digital Agency — Lomé, Togo', fr: 'Agence Numérique — Lomé, Togo' }, 
    description: { en: 'Created showcase websites and web apps for SMEs using React, Node.js, and MySQL.', fr: 'Création de sites vitrines et applications web pour des PME. Utilisation de React, Node.js et MySQL.' }, 
    tags: ['React', 'Node.js', 'MySQL'] 
  },
];

const ACADEMIC: TimelineItem[] = [
  { 
    year: { en: '2024 – Present', fr: '2024 – Présent' }, 
    title: { en: 'Master\'s in Computer Systems & Software', fr: 'Master Systèmes Informatiques & Logiciels' }, 
    place: { en: 'University of Lomé — Togo', fr: 'Université de Lomé — Togo' }, 
    description: { en: 'Specializing in software architecture, distributed systems, and applied artificial intelligence.', fr: 'Spécialisation en architecture logicielle, systèmes distribués et intelligence artificielle appliquée.' }, 
    tags: ['Architecture', 'IA', 'Cloud'], current: true 
  },
  { 
    year: { en: '2020 – 2023', fr: '2020 – 2023' }, 
    title: { en: 'Bachelor in Computer Science', fr: 'Licence en Informatique' }, 
    place: { en: 'University of Lomé — Togo', fr: 'Université de Lomé — Togo' }, 
    description: { en: 'Fundamentals of algorithms, data structures, web development, and relational databases.', fr: 'Fondamentaux en algorithmique, structures de données, développement web et bases de données relationnelles.' }, 
    tags: ['Algorithms', 'Databases', 'Web'] 
  },
  { 
    year: { en: '2019 – 2020', fr: '2019 – 2020' }, 
    title: { en: 'High School Diploma (Science)', fr: 'Baccalauréat Scientifique (Série C)' }, 
    place: { en: 'Lomé High School — Togo', fr: 'Lycée de Lomé — Togo' }, 
    description: { en: 'Graduated with honors, majoring in Mathematics and Physics.', fr: 'Obtention du baccalauréat avec mention, option mathématiques et sciences physiques.' }, 
    tags: ['Mathematics', 'Science'] 
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

  protected readonly tab    = signal<'pro'|'academic'>('pro');
  protected readonly isOpen = signal(false);
  protected readonly trackX = signal(0);
  protected readonly i18n   = inject(I18nService);

  protected toggleOpen(): void {
    this.isOpen.update(v => !v);
    // Refresh ScrollTrigger after a short delay so heights recalculate
    setTimeout(() => ScrollTrigger.refresh(), 300);
  }
  protected readonly items  = computed(() => this.tab() === 'pro' ? PROFESSIONAL : ACADEMIC);
  protected readonly atStart = computed(() => this.trackX() >= 0);
  protected readonly atEnd   = computed(() => {
    const max = (this.items().length - 1) * this.nodeWidth;
    return Math.abs(this.trackX()) >= max;
  });
  protected readonly activeIdx = computed(() => Math.round(Math.abs(this.trackX()) / this.nodeWidth));

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
      this.trackX.set(0);
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
    const mat = new THREE.PointsMaterial({ color: 0x03aff9, size: 2, transparent: true, opacity: 0.35 });
    
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
  private initWheel(): void {
    const vp = this.viewport.nativeElement;
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // real horizontal scroll
      e.preventDefault();
      this.pan(e.deltaY > 0 ? 1 : -1);
    };
    vp.addEventListener('wheel', handler, { passive: false });
    this.wheelCleanup = () => vp.removeEventListener('wheel', handler);
  }

  // ── Public navigation ─────────────────────────────────
  protected navigate(dir: 1 | -1): void { this.pan(dir); }

  private pan(dir: 1 | -1): void {
    const max = (this.items().length - 1) * this.nodeWidth;
    const next = Math.max(-max, Math.min(0, this.trackX() - dir * this.nodeWidth));
    this.trackX.set(next);
    gsap.to(this.track.nativeElement, { x: next, duration: 0.6, ease: 'power3.out' });
  }

  protected switchTab(t: 'pro' | 'academic'): void { this.tab.set(t); }
  protected scrollToNode(i: number): void {
    const x = -i * this.nodeWidth;
    this.trackX.set(x);
    gsap.to(this.track.nativeElement, { x, duration: 0.6, ease: 'power3.out' });
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
