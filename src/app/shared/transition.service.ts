import { Injectable, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Transition de page :
 *   1. quatre volets verticaux montent en cascade et couvrent l'écran ;
 *   2. un monogramme (hexagone tracé au trait + "C.E") apparaît pendant
 *      que le routeur charge la page suivante ; une barre de progression
 *      donne le tempo ;
 *   3. le monogramme s'efface, les volets s'échappent vers le haut en
 *      cascade inverse et révèlent la nouvelle page.
 * Les couleurs des volets viennent des tokens CSS (voir app.scss).
 */
@Injectable({ providedIn: 'root' })
export class TransitionService {
  private router = inject(Router);
  private running = false;

  constructor() {
    // Boutons précédent / suivant du navigateur
    this.router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe(event => {
      if (event.navigationTrigger === 'popstate') {
        this.runPopstateWipe();
      }
    });
  }

  private async runPopstateWipe(): Promise<void> {
    if (typeof window === 'undefined' || this.running) return;
    const ui = this.ensureOverlay();
    if (!ui) return;
    this.running = true;

    ui.overlay.classList.add('is-active');
    await gsap.fromTo(ui.panels,
      { yPercent: -101 },
      { yPercent: 0, duration: 0.35, ease: 'power3.out', stagger: 0.05 }
    );

    await gsap.to(ui.panels, {
      yPercent: 101,
      duration: 0.45,
      ease: 'power3.inOut',
      stagger: { each: 0.05, from: 'end' },
      delay: 0.15,
    });

    this.reset(ui);
    requestAnimationFrame(() => ScrollTrigger.refresh());
    this.running = false;
  }

  public async navigate(url: string, fragment?: string): Promise<void> {
    if (typeof window === 'undefined') {
      this.router.navigate([url], { fragment });
      return;
    }

    const ui = this.ensureOverlay();
    if (!ui || this.running) {
      this.router.navigate([url], { fragment });
      return;
    }
    this.running = true;
    ui.overlay.classList.add('is-active');

    // 1️⃣  Les volets montent et couvrent l'écran (cascade gauche → droite)
    await gsap.fromTo(ui.panels,
      { yPercent: 101 },
      { yPercent: 0, duration: 0.55, ease: 'power3.inOut', stagger: 0.07 }
    );

    // 2️⃣  Monogramme : hexagone tracé au trait, "C.E" et libellé
    const brandIn = gsap.timeline();
    brandIn
      .set(ui.brand, { opacity: 1 })
      .fromTo(ui.hexPath, { strokeDashoffset: ui.hexLength }, { strokeDashoffset: 0, duration: 0.55, ease: 'power2.inOut' })
      .fromTo(ui.monogram, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2)' }, '-=0.25')
      .fromTo(ui.label, { opacity: 0, y: 6 }, { opacity: 0.85, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2');

    // Navigation pendant que le monogramme se dessine
    const navDone = this.router.navigate([url], { fragment });
    const barTween = gsap.fromTo(ui.bar, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.inOut' });

    await Promise.all([navDone, brandIn, barTween]);

    // 3️⃣  Le monogramme s'efface, les volets s'échappent (cascade droite → gauche)
    await gsap.to(ui.brand, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in' });
    await gsap.to(ui.panels, {
      yPercent: -101,
      duration: 0.6,
      ease: 'power3.inOut',
      stagger: { each: 0.07, from: 'end' },
    });

    this.reset(ui);
    // Recalcule les positions ScrollTrigger maintenant que la page est visible.
    requestAnimationFrame(() => ScrollTrigger.refresh());
    this.running = false;
  }

  // -- DOM de l'overlay (créé une seule fois) ------------------------------

  private reset(ui: OverlayUi): void {
    gsap.set(ui.panels, { yPercent: 101 });
    gsap.set(ui.brand, { opacity: 0, y: 0 });
    gsap.set(ui.monogram, { opacity: 0, scale: 0.8 });
    gsap.set(ui.label, { opacity: 0 });
    gsap.set(ui.bar, { scaleX: 0 });
    gsap.set(ui.hexPath, { strokeDashoffset: ui.hexLength });
    ui.overlay.classList.remove('is-active');
  }

  private ensureOverlay(): OverlayUi | null {
    const overlay = document.querySelector<HTMLElement>('.page-transition-overlay');
    if (!overlay) return null;

    if (!overlay.querySelector('.transition-panels')) {
      overlay.innerHTML = `
        <div class="transition-panels">
          <div class="transition-panel"></div>
          <div class="transition-panel"></div>
          <div class="transition-panel"></div>
          <div class="transition-panel"></div>
        </div>
        <div class="transition-brand" aria-hidden="true">
          <svg class="transition-brand__hex" viewBox="0 0 100 100">
            <path d="M50 4 L90 27 L90 73 L50 96 L10 73 L10 27 Z"></path>
            <text class="transition-brand__monogram" x="50" y="50">C.E</text>
          </svg>
          <p class="transition-brand__label">Charly EKLU</p>
          <div class="transition-brand__bar"><span></span></div>
        </div>`;
    }

    const panels = Array.from(overlay.querySelectorAll<HTMLElement>('.transition-panel'));
    const brand = overlay.querySelector<HTMLElement>('.transition-brand')!;
    const hexPath = overlay.querySelector<SVGPathElement>('.transition-brand__hex path')!;
    const monogram = overlay.querySelector<SVGTextElement>('.transition-brand__monogram')!;
    const label = overlay.querySelector<HTMLElement>('.transition-brand__label')!;
    const bar = overlay.querySelector<HTMLElement>('.transition-brand__bar span')!;

    const hexLength = hexPath.getTotalLength();
    const ui: OverlayUi = { overlay, panels, brand, hexPath, hexLength, monogram, label, bar };
    if (!overlay.dataset['ready']) {
      overlay.dataset['ready'] = '1';
      gsap.set(hexPath, { strokeDasharray: hexLength });
      gsap.set(monogram, { transformOrigin: '50% 50%' });
      this.reset(ui);
    }
    return ui;
  }
}

interface OverlayUi {
  overlay: HTMLElement;
  panels: HTMLElement[];
  brand: HTMLElement;
  hexPath: SVGPathElement;
  hexLength: number;
  monogram: SVGTextElement;
  label: HTMLElement;
  bar: HTMLElement;
}
