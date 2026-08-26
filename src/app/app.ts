import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { PreloaderService } from './shared/preloader.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  @ViewChild('preloader') preloader!: ElementRef<HTMLElement>;
  @ViewChild('circuitPath') circuitPath!: ElementRef<SVGPathElement>;

  private readonly preloaderService = inject(PreloaderService);

  constructor() {
    // Block scroll during preloader
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  ngAfterViewInit() {
    if (!this.circuitPath || !this.preloader) return;

    const path = this.circuitPath.nativeElement;
    const preloaderEl = this.preloader.nativeElement;
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    // Draw + erase animation always plays in full (brand moment).
    const drawTl = gsap.timeline();
    drawTl
      .to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut" })
      .to(path, { strokeDashoffset: -length, duration: 1, ease: "power2.inOut", opacity: 0 }, "+=0.2");

    // Only reveal the page once its resources (images, video, fonts…) have
    // actually finished loading — not on a fixed timer — so nothing pops in
    // after the preloader disappears.
    const pageReady = new Promise<void>(resolve => {
      if (document.readyState === 'complete') { resolve(); return; }
      window.addEventListener('load', () => resolve(), { once: true });
    });
    const drawDone = new Promise<void>(resolve => drawTl.eventCallback('onComplete', () => resolve()));

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      gsap.to(preloaderEl, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          preloaderEl.style.display = 'none';
          document.body.style.overflow = '';
          this.preloaderService.done.set(true);
        }
      });
    };

    Promise.all([drawDone, pageReady]).then(reveal);

    // Hard safety net: whatever stalls (a resource, or the animation itself
    // if the tab loses focus), never leave the site hidden indefinitely.
    setTimeout(reveal, 8000);
  }
}
