import {
  AfterViewInit, Directive, ElementRef, Input,
  OnDestroy, inject, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type RevealOrigin = 'bottom' | 'top' | 'left' | 'right';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appReveal], p, h1, h2, h3, h4, h5, h6, li',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private st?: ScrollTrigger;
  private tween?: gsap.core.Tween;

  @Input('appReveal') origin: RevealOrigin | '' = 'bottom';
  @Input() revealDelay = 0;
  @Input() revealDistance = '30px';

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const el = this.elementRef.nativeElement;

    // Skip elements with their own dedicated GSAP animation
    if (
      el.classList.contains('hero__tagline-word') ||
      el.classList.contains('hero__tagline')
    ) return;

    const actualOrigin = this.origin === '' ? 'bottom' : (this.origin || 'bottom');
    const dist = parseInt(String(this.revealDistance).match(/\d+/)?.[0] ?? '30', 10);

    let fromX = 0, fromY = 0;
    switch (actualOrigin) {
      case 'top':    fromY = -dist; break;
      case 'bottom': fromY =  dist; break;
      case 'left':   fromX = -dist; break;
      case 'right':  fromX =  dist; break;
    }

    // Set initial hidden state before the trigger fires
    gsap.set(el, { opacity: 0, x: fromX, y: fromY, willChange: 'transform, opacity' });

    this.tween = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.75,
      delay: this.revealDelay / 1000,
      ease: 'power3.out',
      paused: true,
    });

    const isVisible = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.98 && r.bottom > 0;
    };

    if (isVisible()) {
      // Already in viewport - reveal immediately, no delay
      this.tween.delay(0).duration(0.4).play();
    } else {
      this.st = ScrollTrigger.create({
        trigger: el,
        start: 'top 96%',
        once: true,
        onEnter: () => this.tween!.play(),
        invalidateOnRefresh: true,
        // After ScrollTrigger.refresh() (called post-transition),
        // re-check if the element is now visible and play it immediately.
        onRefresh: (self) => {
          if (isVisible() && !this.tween!.isActive() && this.tween!.progress() === 0) {
            this.tween!.delay(0).duration(0.4).play();
            self.kill();
          }
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.st?.kill();
    this.tween?.kill();
    // Reset so the element is always visible if the directive is destroyed mid-animation
    gsap.set(this.elementRef.nativeElement, { clearProps: 'all' });
  }
}
