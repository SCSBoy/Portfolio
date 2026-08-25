import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { map } from 'rxjs';
import { getProjectBySlug, Bilingual } from '../../data/projects.data';
import { RevealDirective } from '../../shared/reveal.directive';
import { TransitionService } from '../../shared/transition.service';
import { I18nService } from '../../shared/i18n.service';

export interface MediaItem {
  type: 'photo' | 'video';
  src: string;           // image URL or video poster
  videoSrc?: string;     // only for videos
  label: Bilingual;
  caption: Bilingual;
}

// Placeholder media using picsum.photos (public placeholder service)
const DEMO_MEDIA: MediaItem[] = [
  { type: 'photo', src: 'https://picsum.photos/seed/app-ui/800/500', label: { en: 'Main interface', fr: 'Interface principale' }, caption: { en: 'View of the main dashboard with real-time KPIs.', fr: 'Vue du tableau de bord principal avec les KPIs en temps réel.' } },
  { type: 'video', src: 'https://picsum.photos/seed/demo-video/800/500', videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', label: { en: 'Functional demo', fr: 'Démo fonctionnelle' }, caption: { en: 'Complete user journey, from login to result.', fr: 'Parcours utilisateur complet, de la connexion jusqu\'au résultat.' } },
  { type: 'photo', src: 'https://picsum.photos/seed/mobile-view/800/500', label: { en: 'Mobile view', fr: 'Vue mobile' }, caption: { en: 'Responsive design optimized for mobile devices.', fr: 'Design responsive optimisé pour les appareils mobiles.' } },
  { type: 'photo', src: 'https://picsum.photos/seed/dark-mode/800/500', label: { en: 'Dark mode', fr: 'Mode sombre' }, caption: { en: 'Built-in dark theme with automatic system detection.', fr: 'Thème sombre intégré avec détection automatique du système.' } },
  { type: 'video', src: 'https://picsum.photos/seed/onboarding/800/500', videoSrc: 'https://www.w3schools.com/html/movie.mp4', label: { en: 'Onboarding', fr: 'Onboarding' }, caption: { en: '3-step sign-up flow with real-time validation.', fr: 'Flux d\'inscription en 3 étapes avec validation en temps réel.' } },
  { type: 'photo', src: 'https://picsum.photos/seed/analytics/800/500', label: { en: 'Analytics module', fr: 'Module analytics' }, caption: { en: 'Interactive charts and PDF/CSV data exports.', fr: 'Graphiques interactifs et exports PDF/CSV des données.' } },
];

@Component({
  selector: 'app-project-detail',
  imports: [MatButtonModule, MatIconModule, MatChipsModule, RevealDirective],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly transitionService = inject(TransitionService);
  protected readonly i18n = inject(I18nService);
  protected readonly media = DEMO_MEDIA;
  protected readonly selectedMedia = signal<MediaItem>(DEMO_MEDIA[0]);
  protected readonly mediaOpen = signal(false);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  protected readonly project = computed(() => getProjectBySlug(this.slug()));

  protected selectMedia(item: MediaItem): void {
    this.selectedMedia.set(item);
  }

  protected toggleMedia(): void {
    this.mediaOpen.update(v => !v);
  }
}
