import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { map } from 'rxjs';
import { getProjectBySlug, Bilingual, PROJECTS } from '../../data/projects.data';
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
  { type: 'video', src: 'https://picsum.photos/seed/demo-video/800/500', videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4', label: { en: 'Functional demo', fr: 'Démo fonctionnelle' }, caption: { en: 'Complete user journey, from login to result.', fr: 'Parcours utilisateur complet, de la connexion jusqu\'au résultat.' } },
  { type: 'photo', src: 'https://picsum.photos/seed/mobile-view/800/500', label: { en: 'Mobile view', fr: 'Vue mobile' }, caption: { en: 'Responsive design optimized for mobile devices.', fr: 'Design responsive optimisé pour les appareils mobiles.' } },
  { type: 'photo', src: 'https://picsum.photos/seed/dark-mode/800/500', label: { en: 'Dark mode', fr: 'Mode sombre' }, caption: { en: 'Built-in dark theme with automatic system detection.', fr: 'Thème sombre intégré avec détection automatique du système.' } },
  { type: 'video', src: 'https://picsum.photos/seed/onboarding/800/500', videoSrc: 'https://www.w3schools.com/html/movie.mp4', label: { en: 'Onboarding', fr: 'Onboarding' }, caption: { en: '3-step sign-up flow with real-time validation.', fr: 'Flux d\'inscription en 3 étapes avec validation en temps réel.' } },
  { type: 'photo', src: 'https://picsum.photos/seed/analytics/800/500', label: { en: 'Analytics module', fr: 'Module analytics' }, caption: { en: 'Interactive charts and PDF/CSV data exports.', fr: 'Graphiques interactifs et exports PDF/CSV des données.' } },
];

const AUTOMATIC_RFC_MEDIA: MediaItem[] = Array.from({ length: 7 }, (_, index) => {
  const pictureNumber = index + 1;

  return {
    type: 'photo',
    src: `images/Screenshots/AutomaticRFC/Picture${pictureNumber}.png`,
    label: {
      en: `AutomaticRFC screenshot ${pictureNumber}`,
      fr: `Capture AutomaticRFC ${pictureNumber}`,
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the Automatic Request For Change application.`,
      fr: `Capture ${pictureNumber} de l'application de fiche de changement rapide.`,
    },
  };
});

const BANK_RECONCILIATION_MEDIA: MediaItem[] = Array.from({ length: 15 }, (_, index) => {
  const pictureNumber = index + 1;

  return {
    type: 'photo',
    src: `images/Screenshots/Bank_reconciliation/Picture${pictureNumber}.png`,
    label: {
      en: `Bank reconciliation screenshot ${pictureNumber}`,
      fr: `Capture rapprochement bancaire ${pictureNumber}`,
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the bank reconciliation application.`,
      fr: `Capture ${pictureNumber} de l'application de rapprochement bancaire.`,
    },
  };
});
const LOVING_THOUGHTS_MEDIA: MediaItem[] = Array.from({ length: 4 }, (_, index) => {
  const pictureNumber = index + 1;

  return {
    type: 'photo',
    src: `images/Screenshots/Loving_Thoughts/Picture${pictureNumber}.png`,
    label: {
      en: `Loving thoughts screenshot ${pictureNumber}`,
      fr: `Capture Pensées affectueuses ${pictureNumber}`,
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the Loving thoughts application.`,
      fr: `Capture ${pictureNumber} de l'application de pensées affectueuses.`,
    },
  };
});

const INVENTORY_MANAGEMENT_MEDIA: MediaItem[] = Array.from({ length: 3 }, (_, index) => {
  const pictureNumber = index + 1;

  return {
    type: 'photo',
    src: `images/Screenshots/Inventory_Management/Picture${pictureNumber}.png`,
    label: {
      en: `InventoryManagement screenshot ${pictureNumber}`,
      fr: `Capture Gestion Stock ${pictureNumber}`,
    },
    caption: {
      en: `Screenshot ${pictureNumber} of the Inventory management application.`,
      fr: `Capture ${pictureNumber} de l'application de Gestion Stock.`,
    },
  };
});

const EWE_MULTILINGUAL_TRANSLATOR_MEDIA: MediaItem[] = [
  ...Array.from({ length: 2 }, (_, index) => {
    const pictureNumber = index + 1;

    return {
      type: 'photo' as const,
      src: `images/Screenshots/Ewe_Multilingual_Translator/Picture${pictureNumber}.png`,
      label: {
        en: `Ewe multilingual translator screenshot ${pictureNumber}`,
        fr: `Capture du Traducteur Multilingue Ewe ${pictureNumber}`,
      },
      caption: {
        en: `Screenshot ${pictureNumber} of the Ewe multilingual translator application.`,
        fr: `Capture ${pictureNumber} de l'application de Traduction Multilingue Ewe.`,
      },
    };
  }),
  {
    type: 'video',
    src: 'images/Screenshots/Ewe_Multilingual_Translator/Picture3.png',
    videoSrc: 'videos/Ewe_Multilingual_Translator/Video1.mp4',
    label: {
      en: 'Functional demo',
      fr: 'Démo fonctionnelle',
    },
    caption: {
      en: 'Complete user journey, from login to result.',
      fr: "Parcours utilisateur complet, de la connexion jusqu'au résultat.",
    },
  },
];

const PORTFOLIO_MEDIA: MediaItem[] = [
  ...Array.from({ length: 4 }, (_, index) => {
    const pictureNumber = index + 1;

    return {
      type: 'photo' as const,
      src: `images/Screenshots/Portfolio/Picture${pictureNumber}.png`,
      label: {
        en: `Portfolio screenshot ${pictureNumber}`,
        fr: `Capture du Portfolio ${pictureNumber}`,
      },
      caption: {
        en: `Screenshot ${pictureNumber} of my Portfolio webpage.`,
        fr: `Capture ${pictureNumber} du site web de mon portfolio.`,
      },
    };
  }),
  ...Array.from({ length: 2 }, (_, index) => {
    const videoNumber = index + 1;
    const coverNumber = index + 1;

    return {
      type: 'video' as const,
      src: `images/Screenshots/Portfolio/Cover${coverNumber}.png`,
      videoSrc: `videos/Portfolio/Video${videoNumber}.mp4`,
      label: {
        en: `Functional demo ${videoNumber}`,
        fr: `Démo fonctionnelle ${videoNumber}`,
      },
      caption: {
        en: 'Complete user journey, from login to result.',
        fr: "Parcours utilisateur complet, de la connexion jusqu'au résultat.",
      },
    };
  }),
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
  private readonly selectedMediaSrc = signal('');
  protected readonly mediaOpen = signal(true);
  protected readonly mediaViewerOpen = signal(false);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' }
  );

  protected readonly project = computed(() => getProjectBySlug(this.slug()));

  // -- Navigation projet precedent / suivant (cyclique) ----------
  protected readonly projectIndex = computed(() => PROJECTS.findIndex(p => p.slug === this.slug()));
  protected readonly projectCount = PROJECTS.length;
  protected readonly prevProject = computed(() => {
    const i = this.projectIndex();
    return i < 0 ? undefined : PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  });
  protected readonly nextProject = computed(() => {
    const i = this.projectIndex();
    return i < 0 ? undefined : PROJECTS[(i + 1) % PROJECTS.length];
  });

  /** Change de projet sans quitter la page (transition GSAP, remontee en haut). */
  protected goToProject(slug: string | undefined): void {
    if (!slug || slug === this.slug()) return;
    this.selectedMediaSrc.set('');
    this.mediaViewerOpen.set(false);
    this.transitionService.navigate(`/projets/${slug}`);
  }
  protected readonly media = computed(() => {
    switch (this.slug()) {
      case 'rapprochements-bancaires':
        return BANK_RECONCILIATION_MEDIA;
      case 'automatic-rfc':
        return AUTOMATIC_RFC_MEDIA;
      case 'pensees-affectueuses':
        return LOVING_THOUGHTS_MEDIA;
      case 'gestion-stock':
        return INVENTORY_MANAGEMENT_MEDIA;
      case 'traducteur-multilingue-vocal':
        return EWE_MULTILINGUAL_TRANSLATOR_MEDIA;
      case 'portfolio-personnel':
        return PORTFOLIO_MEDIA;
      default:
        return DEMO_MEDIA;
    }
  });
  protected readonly selectedMedia = computed(() =>
    this.media().find((item) => item.src === this.selectedMediaSrc()) ?? this.media()[0]
  );
  protected readonly selectedMediaIndex = computed(() => {
    const index = this.media().findIndex((item) => item.src === this.selectedMedia().src);
    return index < 0 ? 0 : index;
  });

  protected selectMedia(item: MediaItem): void {
    this.selectedMediaSrc.set(item.src);
  }

  protected openMediaViewer(item = this.selectedMedia()): void {
    this.selectMedia(item);
    this.mediaViewerOpen.set(true);
  }

  protected closeMediaViewer(): void {
    this.mediaViewerOpen.set(false);
  }

  protected nextMedia(): void {
    const media = this.media();
    const nextIndex = (this.selectedMediaIndex() + 1) % media.length;
    this.selectMedia(media[nextIndex]);
  }

  protected prevMedia(): void {
    const media = this.media();
    const prevIndex = (this.selectedMediaIndex() - 1 + media.length) % media.length;
    this.selectMedia(media[prevIndex]);
  }

  protected toggleMedia(): void {
    this.mediaOpen.update(v => !v);
  }

  @HostListener('document:keydown', ['$event'])
  protected handleKeydown(event: KeyboardEvent): void {
    // Hors visionneuse : Alt + fleches = projet precedent / suivant
    if (!this.mediaViewerOpen()) {
      if (event.altKey && event.key === 'ArrowRight') { event.preventDefault(); this.goToProject(this.nextProject()?.slug); }
      if (event.altKey && event.key === 'ArrowLeft')  { event.preventDefault(); this.goToProject(this.prevProject()?.slug); }
      return;
    }

    if (event.key === 'Escape') {
      this.closeMediaViewer();
    }

    if (event.key === 'ArrowRight') {
      this.nextMedia();
    }

    if (event.key === 'ArrowLeft') {
      this.prevMedia();
    }
  }
}
