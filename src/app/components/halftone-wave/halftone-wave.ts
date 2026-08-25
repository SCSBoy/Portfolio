import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

interface Dot {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  idlePhaseX: number;
  idlePhaseY: number;
  idleFreqX: number;
  idleFreqY: number;
  idleAmp: number;
}

interface PointerSample {
  x: number;
  y: number;
  time: number;
}

/**
 * Reproduces the BG_1.jpg halftone-wave artwork as a live canvas of vector
 * dots. Dots drift gently on their own (per-dot randomized wander), and the
 * pointer brushes/sweeps nearby dots along its direction of travel — no
 * radial "push" from a point source, so it reads as a sweep rather than a
 * ripple/water-drop effect.
 *
 * Canvas is used instead of individual SVG circles: the pattern needs
 * 1500-2000+ dots re-evaluated every animation frame, and redrawing arcs on
 * a single canvas is far cheaper than mutating that many DOM/SVG nodes.
 */
@Component({
  selector: 'app-halftone-wave',
  template: `<canvas #canvas class="halftone-wave"></canvas>`,
  styleUrl: './halftone-wave.scss',
})
export class HalftoneWave implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) private readonly canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private dots: Dot[] = [];
  private width = 0;
  private height = 0;
  private dpr = 1;
  private pointer: { x: number; y: number } | null = null;
  private lastPointerSample: PointerSample | null = null;
  private readonly sweepVelocity = { x: 0, y: 0 };
  private rafId: number | null = null;
  private isVisible = true;
  private reducedMotion = false;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private resizeScheduled = false;

  private readonly SPACING = 11;            // dense comme la photo
  private readonly SWEEP_RADIUS = 130;
  private readonly SWEEP_GAIN = 2.4;
  private readonly MAX_SWEEP_SPEED = 46;
  private readonly SWEEP_DECAY = 0.85;
  private readonly IDLE_AMPLITUDE = 3.8;    // vague plus perceptible
  private readonly SPRING = 0.10;
  private readonly FRICTION = 0.80;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    this.ctx = ctx;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.resize();
    this.buildGrid();
    this.draw();

    if (!this.reducedMotion) {
      this.requestTick();
    }

    canvas.addEventListener('pointermove', this.handlePointerMove);
    canvas.addEventListener('pointerleave', this.handlePointerLeave);

    this.resizeObserver = new ResizeObserver(() => this.scheduleResize());
    this.resizeObserver.observe(canvas.parentElement ?? canvas);

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        this.isVisible = entries[0]?.isIntersecting ?? true;
        if (this.isVisible) {
          this.requestTick();
        }
      },
      { threshold: 0 }
    );
    this.intersectionObserver.observe(canvas);
  }

  ngOnDestroy(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();

    const canvas = this.canvasRef.nativeElement;
    canvas.removeEventListener('pointermove', this.handlePointerMove);
    canvas.removeEventListener('pointerleave', this.handlePointerLeave);
  }

  private readonly handlePointerMove = (event: PointerEvent): void => {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) * this.dpr;
    const y = (event.clientY - rect.top) * this.dpr;
    const now = performance.now();

    if (this.lastPointerSample) {
      const dt = Math.max(1, now - this.lastPointerSample.time);
      const rawVx = ((x - this.lastPointerSample.x) / dt) * 16.67;
      const rawVy = ((y - this.lastPointerSample.y) / dt) * 16.67;
      this.sweepVelocity.x = this.sweepVelocity.x * 0.5 + rawVx * 0.5;
      this.sweepVelocity.y = this.sweepVelocity.y * 0.5 + rawVy * 0.5;
    }
    this.lastPointerSample = { x, y, time: now };

    this.pointer = { x, y };
    this.requestTick();
  };

  private readonly handlePointerLeave = (): void => {
    this.pointer = null;
    this.lastPointerSample = null;
  };

  private scheduleResize(): void {
    if (this.resizeScheduled) {
      return;
    }
    this.resizeScheduled = true;
    requestAnimationFrame(() => {
      this.resizeScheduled = false;
      this.resize();
      this.buildGrid();
      this.draw();
    });
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = (canvas.parentElement ?? canvas).getBoundingClientRect();
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = Math.max(1, Math.round(rect.width * this.dpr));
    this.height = Math.max(1, Math.round(rect.height * this.dpr));
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }

  private buildGrid(): void {
    const spacing = this.SPACING * this.dpr;
    const cols = Math.ceil(this.width / spacing) + 2;
    const rows = Math.ceil(this.height / spacing) + 2;
    const dots: Dot[] = [];

    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const staggerX = row % 2 !== 0 ? spacing / 2 : 0;
        const x = col * spacing + staggerX;
        const y = row * spacing;

        const sample = this.sampleWave(x / this.dpr, y / this.dpr);
        if (sample.radius <= 0.2) {
          continue;
        }

        // Phase basée sur la position pour créer une vague propagée
        // Les points voisins sont légèrement décalés → effet vague coordonnée
        const wavePhase = (x * 0.018 + y * 0.012) % (Math.PI * 2);
        const wavePhaseY = (x * 0.010 - y * 0.015) % (Math.PI * 2);

        dots.push({
          homeX: x,
          homeY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          radius: sample.radius * this.dpr,
          color: sample.color,
          idlePhaseX: wavePhase,
          idlePhaseY: wavePhaseY,
          idleFreqX: 0.00028 + Math.random() * 0.00008, // fréquence resserrée → vague uniforme
          idleFreqY: 0.00022 + Math.random() * 0.00008,
          idleAmp: (0.7 + Math.random() * 0.6) * this.IDLE_AMPLITUDE * this.dpr,
        });
      }
    }

    this.dots = dots;
  }

  /** Approximates the two overlapping halftone bands seen in BG_1.jpg, spread across the full width. */
  private sampleWave(x: number, y: number): { radius: number; color: string } {
    const w = this.width / this.dpr || 1;
    const h = this.height / this.dpr || 1;
    const xr = x / w;
    const yr = y / h;

    const mainBump = Math.exp(-(((xr - 0.32) / 0.22) ** 2));
    const mainCenter = 0.68 - 0.46 * mainBump + 0.15 * xr;
    const mainDist = Math.abs(yr - mainCenter);
    const mainFalloff = Math.max(0, 1 - mainDist / 0.24);
    const mainFadeByX = Math.max(0.32, 1 - xr * 0.68);
    const mainIntensity = mainFalloff ** 1.6 * mainFadeByX;

    const secondCenter = 0.4 - 0.5 * xr + 0.12 * Math.sin(xr * Math.PI * 1.6);
    const secondDist = Math.abs(yr - secondCenter);
    const secondFalloff = Math.max(0, 1 - secondDist / 0.18);
    const secondFadeByX = Math.max(0.18, 1 - xr * 0.55);
    const secondIntensity = (secondFalloff ** 1.8) * secondFadeByX * 0.55;

    const intensity = Math.max(mainIntensity, secondIntensity);
    if (intensity <= 0.02) {
      return { radius: 0, color: 'transparent' };
    }

    const isMain = mainIntensity >= secondIntensity;
    const radius = intensity * 6.4 + 0.5;
    const alpha = Math.min(1, intensity * 1.3);
    const color = isMain
      ? `rgba(23, 88, 143, ${alpha.toFixed(3)})`
      : `rgba(150, 190, 222, ${alpha.toFixed(3)})`;

    return { radius, color };
  }

  private requestTick(): void {
    if (this.rafId !== null || this.reducedMotion) {
      return;
    }
    this.rafId = requestAnimationFrame(this.tick);
  }

  private readonly tick = (): void => {
    this.rafId = null;
    const now = performance.now();
    const sweepRadius = this.SWEEP_RADIUS * this.dpr;

    let sweepX = this.sweepVelocity.x;
    let sweepY = this.sweepVelocity.y;
    const maxSweepSpeed = this.MAX_SWEEP_SPEED * this.dpr;
    const sweepSpeed = Math.hypot(sweepX, sweepY);
    if (sweepSpeed > maxSweepSpeed) {
      const scale = maxSweepSpeed / sweepSpeed;
      sweepX *= scale;
      sweepY *= scale;
    }

    for (const dot of this.dots) {
      let targetX = dot.homeX + Math.sin(now * dot.idleFreqX + dot.idlePhaseX) * dot.idleAmp;
      let targetY = dot.homeY + Math.cos(now * dot.idleFreqY + dot.idlePhaseY) * dot.idleAmp;

      if (this.pointer) {
        const dx = dot.homeX - this.pointer.x;
        const dy = dot.homeY - this.pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < sweepRadius) {
          // Brush/sweep only: dots are dragged along the pointer's recent
          // motion, not pushed away from it, so this reads as a sweep
          // rather than a radial ripple.
          const influence = 1 - dist / sweepRadius;
          targetX += sweepX * influence * this.SWEEP_GAIN;
          targetY += sweepY * influence * this.SWEEP_GAIN;
        }
      }

      dot.vx = (dot.vx + (targetX - dot.x) * this.SPRING) * this.FRICTION;
      dot.vy = (dot.vy + (targetY - dot.y) * this.SPRING) * this.FRICTION;
      dot.x += dot.vx;
      dot.y += dot.vy;
    }

    this.sweepVelocity.x *= this.SWEEP_DECAY;
    this.sweepVelocity.y *= this.SWEEP_DECAY;

    this.draw();

    if (this.isVisible) {
      this.rafId = requestAnimationFrame(this.tick);
    }
  };

  private draw(): void {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    for (const dot of this.dots) {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
    }
  }
}
