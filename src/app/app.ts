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
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({
      onComplete: () => {
        this.preloader.nativeElement.style.display = 'none';
        document.body.style.overflow = '';
        this.preloaderService.done.set(true);
      }
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })
    .to(path, {
      strokeDashoffset: -length,
      duration: 1,
      ease: "power2.inOut",
      opacity: 0
    }, "+=0.2")
    .to(this.preloader.nativeElement, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.4");
  }
}
