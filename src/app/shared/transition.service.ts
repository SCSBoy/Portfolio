import { Injectable, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({ providedIn: 'root' })
export class TransitionService {
  private router = inject(Router);

  constructor() {
    // Listen for browser back/forward buttons
    this.router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe(event => {
      if (event.navigationTrigger === 'popstate') {
        this.runPopstateWipe();
      }
    });
  }

  private async runPopstateWipe(): Promise<void> {
    if (typeof window === 'undefined') return;
    const overlay = document.querySelector<HTMLElement>('.page-transition-overlay');
    if (!overlay) return;

    // Quick wipe down to mask the sudden DOM change, then wipe up
    await gsap.fromTo(overlay,
      { y: '-100%', opacity: 1 },
      { y: '0%', duration: 0.3, ease: 'power2.out' }
    );
    
    setTimeout(() => {
      gsap.to(overlay, {
        y: '100%',
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          requestAnimationFrame(() => ScrollTrigger.refresh());
        }
      });
    }, 150);
  }

  public async navigate(url: string, fragment?: string): Promise<void> {
    if (typeof window === 'undefined') {
      this.router.navigate([url], { fragment });
      return;
    }

    const overlay = document.querySelector<HTMLElement>('.page-transition-overlay');
    if (!overlay) {
      this.router.navigate([url], { fragment });
      return;
    }

    // 1️⃣  Wipe IN — cover the screen
    await gsap.fromTo(overlay,
      { y: '100%', opacity: 1 },
      { y: '0%', duration: 0.45, ease: 'power3.inOut' }
    );

    // 2️⃣  Navigate while screen is covered
    await this.router.navigate([url], { fragment });

    // 3️⃣  Animate scan bar while Angular renders components
    const scan = this._ensureScanBar(overlay);
    gsap.set(scan, { scaleX: 0, opacity: 1 });
    await gsap.to(scan, {
      scaleX: 1,
      duration: 0.7,
      ease: 'power2.inOut',
      transformOrigin: 'left center',
    });

    // 4️⃣  Wipe OUT — reveal the fully-rendered page
    await gsap.to(overlay, {
      y: '-100%',
      duration: 0.55,
      ease: 'power3.inOut',
      onComplete: () => {
        gsap.set(overlay, { y: '100%' });
        gsap.set(scan, { scaleX: 0, opacity: 0 });
        // Recalculate all ScrollTrigger positions now that the page
        // is fully visible at its actual scroll position.
        requestAnimationFrame(() => ScrollTrigger.refresh());
      },
    });
  }

  private _ensureScanBar(overlay: HTMLElement): HTMLElement {
    let bar = overlay.querySelector<HTMLElement>('.transition-scan');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'transition-scan';
      overlay.appendChild(bar);
    }
    return bar;
  }
}
