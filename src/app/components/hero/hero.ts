import {
  AfterViewInit, Component, ElementRef, HostListener,
  OnDestroy, ViewChild, signal, inject, effect
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule }   from '@angular/material/icon';
import { animate }         from 'motion';
import { gsap }            from 'gsap';
import Typed from 'typed.js';
import { RevealDirective } from '../../shared/reveal.directive';
import { I18nService } from '../../shared/i18n.service';

type PanelState = 'open' | 'badge';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatIconModule, RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('typedRole')    private typedEl?:    ElementRef<HTMLElement>;
  @ViewChild('hexagon')      private hexEl?:      ElementRef<HTMLElement>;
  @ViewChild('hexWrap')      private hexWrapEl?:  ElementRef<HTMLElement>;
  @ViewChild('contentPanel') private panelEl?:    ElementRef<HTMLElement>;
  @ViewChild('badgeBtn')     private badgeEl?:    ElementRef<HTMLElement>;
  @ViewChild('taglineEl')    private taglineEl?:  ElementRef<HTMLElement>;
  @ViewChild('bgVideo')      private bgVideoEl?:  ElementRef<HTMLVideoElement>;

  protected readonly i18n = inject(I18nService);
  protected readonly imgError   = signal(false);
  protected readonly panelState = signal<PanelState>('open');
  protected readonly isVideoMode = signal(false);
  protected readonly profileViewerOpen = signal(false);

  private typed?: Typed;
  private detachTilt?: () => void;
  private collapseTimer?: ReturnType<typeof setTimeout>;
  private busy = false;
  private activeAnim?: Animation;
  private taglineTween?: gsap.core.Tween;

  constructor() {
    // Re-initialize animated text when language changes
    effect(() => {
      const lang = this.i18n.currentLang();
      if (this.typedEl && this.typed) {
        this.initTyped(lang);
      }
      if (this.taglineEl) {
        this.animateTagline();
      }
    });
  }

  ngAfterViewInit(): void {
    // Force silence
    if (this.bgVideoEl) {
      const v = this.bgVideoEl.nativeElement;
      v.muted  = true;
      v.volume = 0;
    }

    this.initTyped(this.i18n.currentLang());
    
    if (this.hexEl) this.detachTilt = this.enableTilt(this.hexEl.nativeElement);

    // GSAP Word-by-word on tagline
    this.animateTagline();

    this.collapseTimer = setTimeout(
      () => this.collapseToBadge(),
      1000 + Math.random() * 3000
    );
  }

  private initTyped(lang: string) {
    this.typed?.destroy();
    if (!this.typedEl) return;
    
    const strings = lang === 'en'
      ? ['Full-Stack', 'Angular', 'Spring Boot', 'Data Enthusiast']
      : ['Full-Stack', 'Angular', 'Spring Boot', 'passionné de data'];

    this.typed = new Typed(this.typedEl.nativeElement, {
      strings,
      typeSpeed: 55, backSpeed: 30, backDelay: 1600, loop: true,
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
    this.detachTilt?.();
    clearTimeout(this.collapseTimer);
    this.activeAnim?.cancel();
    this.taglineTween?.kill();
  }

  protected openProfileViewer(): void {
    if (this.isVideoMode() || this.imgError()) return;
    this.profileViewerOpen.set(true);
  }

  protected closeProfileViewer(): void {
    this.profileViewerOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected closeProfileViewerWithKeyboard(): void {
    if (this.profileViewerOpen()) {
      this.closeProfileViewer();
    }
  }

  // ── Panel → Badge (Web Animations API — no TS type conflicts) ─────────────
  protected async collapseToBadge(): Promise<void> {
    if (this.busy || this.panelState() === 'badge') return;
    this.busy = true;

    const panel = this.panelEl?.nativeElement;
    const badge = this.badgeEl?.nativeElement;
    if (!panel || !badge) { this.busy = false; return; }

    // FLIP: mesure décalage panel-centre → badge-centre
    const pr = panel.getBoundingClientRect();
    const br = badge.getBoundingClientRect();
    const dx = br.left + br.width  / 2 - (pr.left + pr.width  / 2);
    const dy = br.top  + br.height / 2 - (pr.top  + pr.height / 2);

    // 1. Panel rétrécit vers le badge
    this.activeAnim?.cancel();
    this.activeAnim = panel.animate([
      { transform: 'translate(0,0) scale(1)',              opacity: '1', borderRadius: '1.5rem' },
      { transform: `translate(${dx}px,${dy}px) scale(0)`, opacity: '0', borderRadius: '50%'   },
    ], { duration: 600, easing: 'cubic-bezier(0.4,0,0.8,0.2)', fill: 'forwards' });
    await this.activeAnim.finished;

    // Applique l'état final via style pour pouvoir cancel l'animation
    panel.style.visibility   = 'hidden';
    panel.style.pointerEvents = 'none';
    this.activeAnim.cancel();      // reset les transforms

    this.panelState.set('badge');

    // 2. Badge apparaît avec rebond (keyframes offset)
    badge.style.visibility = 'visible';
    this.activeAnim = badge.animate([
      { transform: 'scale(0)',    opacity: '0' },
      { transform: 'scale(1.18)', opacity: '1', offset: 0.55 },
      { transform: 'scale(0.93)', opacity: '1', offset: 0.78 },
      { transform: 'scale(1)',    opacity: '1' },
    ], { duration: 580, easing: 'ease-out', fill: 'forwards' });
    await this.activeAnim.finished;
    this.activeAnim.cancel();
    // Fige l’état final en inline pour ne pas retomber sur le CSS de base
    badge.style.opacity   = '1';
    badge.style.transform = 'scale(1)';
    badge.setAttribute('data-active', '');
    this.busy = false;
  }

  // ── Badge → Panel ─────────────────────────────────────────────────────────
  protected async expandToPanel(): Promise<void> {
    if (this.busy || this.panelState() === 'open') return;
    this.busy = true;

    const panel = this.panelEl?.nativeElement;
    const badge = this.badgeEl?.nativeElement;
    if (!panel || !badge) { this.busy = false; return; }

    // 1. Badge disparaît
    badge.removeAttribute('data-active');
    this.activeAnim?.cancel();
    this.activeAnim = badge.animate([
      { transform: 'scale(1)', opacity: '1' },
      { transform: 'scale(0)', opacity: '0' },
    ], { duration: 260, easing: 'ease-in', fill: 'forwards' });
    await this.activeAnim.finished;
    badge.style.visibility = 'hidden';
    this.activeAnim.cancel();

    // 2. Panel s'ouvre depuis la position du badge (spring-like bezier)
    const pr = panel.getBoundingClientRect();
    const br = badge.getBoundingClientRect();
    const dx = br.left + br.width  / 2 - (pr.left + pr.width  / 2);
    const dy = br.top  + br.height / 2 - (pr.top  + pr.height / 2);

    panel.style.visibility    = 'visible';
    panel.style.pointerEvents = '';
    this.panelState.set('open');

    this.activeAnim = panel.animate([
      { transform: `translate(${dx}px,${dy}px) scale(0)`,    opacity: '0', borderRadius: '50%'   },
      { transform: `translate(${dx*.03}px,${dy*.03}px) scale(1.04)`, opacity: '1', borderRadius: '1.5rem', offset: 0.72 },
      { transform: 'translate(0,0) scale(1)',                  opacity: '1', borderRadius: '1.5rem' },
    ], { duration: 680, easing: 'cubic-bezier(0.34,1.56,0.64,1)', fill: 'forwards' });
    await this.activeAnim.finished;
    this.activeAnim.cancel();
    // Nettoie les transforms inline pour laisser le CSS gérer
    panel.style.transform    = '';
    panel.style.opacity      = '';
    panel.style.borderRadius = '';
    this.busy = false;
  }

  // ── Tilt hexagone (motion — déjà fonctionnel) ─────────────────────────────
  private enableTilt(el: HTMLElement): () => void {
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      animate(el, {
        transformPerspective: 700,
        rotateY: ((e.clientX - r.left) / r.width  - 0.5) * 16,
        rotateX: ((e.clientY - r.top)  / r.height - 0.5) * -16,
      }, { duration: 0.4, ease: 'easeOut' });
    };
    const onLeave = () =>
      animate(el, { transformPerspective: 700, rotateY: 0, rotateX: 0 },
        { duration: 0.6, ease: 'easeOut' });

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }

  // ── Tagline : apparition mot par mot (GSAP) ───────────────────────────────
  private animateTagline(): void {
    const el = this.taglineEl?.nativeElement;
    if (!el) return;

    // Enveloppe chaque mot dans un <span> animable
    this.taglineTween?.kill();
    const raw   = this.i18n.t('hero.tagline');
    const words = raw.trim().split(/\s+/);
    el.innerHTML = words
      .map(w => `<span class="hero__tagline-word">${w}</span>`)
      .join(' ');

    this.taglineTween = gsap.fromTo(
      el.querySelectorAll('.hero__tagline-word'),
      { opacity: 0, y: 18, filter: 'blur(4px)' },
      {
        opacity:  1,
        y:        0,
        filter:   'blur(0px)',
        duration: 0.65,
        ease:     'power3.out',
        stagger:  0.045,   // décalage entre chaque mot
        delay:    0.8,
      }
    );
  }

  // ── Video Presentation Expand (Popmotion) ───────────────────────────────
  toggleVideoMode(): void {
    const isVideo = !this.isVideoMode();
    this.isVideoMode.set(isVideo);

    if (this.hexWrapEl && this.hexEl) {
      const wrap = this.hexWrapEl.nativeElement;
      const hex = this.hexEl.nativeElement;
      // We also need to target the portrait wrapper to remove max-width constraints smoothly
      const portrait = wrap.closest('.hero__portrait') as HTMLElement;

      if (isVideo) {
        if (portrait) {
          animate(portrait, { maxWidth: '500px' }, { duration: 0.85, ease: 'easeInOut' });
        }
        
        animate(wrap, {
          width: 'min(500px, 90vw)',
          aspectRatio: 16 / 9
        }, { duration: 0.85, ease: 'easeInOut' });
        
        animate(hex, {
          borderRadius: '12px',
          padding: '2px'
        }, { duration: 0.85, ease: 'easeInOut' });
      } else {
        if (portrait) {
          animate(portrait, { maxWidth: '352px' }, { duration: 0.85, ease: 'easeInOut' }); // 352px = 22rem
        }

        animate(wrap, {
          width: 'min(300px, 62vw)',
          aspectRatio: 1
        }, { duration: 0.85, ease: 'easeInOut' });

        animate(hex, {
          borderRadius: '16px',
          padding: '5px'
        }, { duration: 0.85, ease: 'easeInOut' });
      }
    }
  }
}
