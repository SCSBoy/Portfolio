import { Component, HostListener, computed, signal, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UpperCasePipe } from '@angular/common';

import { I18nService } from '../../shared/i18n.service';
import { TranslationKey } from '../../data/translations.data';
import { TransitionService } from '../../shared/transition.service';
import { ThemeService } from '../../shared/theme.service';

interface NavLink {
  key: TranslationKey;
  /** Page cible : '/' (hero seul) ou '/details' (toutes les sections). */
  path: '/' | '/details';
  fragment?: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(I18nService);
  protected readonly router = inject(Router);
  protected readonly transitionService = inject(TransitionService);
  protected readonly theme = inject(ThemeService);

  private readonly scrollY = signal(0);

  /** Chemin courant sans fragment ni query. */
  private readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => { this.heroHeight = undefined; return this.pathOf(this.router.url); }),
      startWith(this.pathOf(this.router.url)),
    ),
    { initialValue: '/' }
  );

  protected readonly isHome = computed(() => this.currentPath() === '/');
  private readonly isProjectDetail = computed(() => this.currentPath().startsWith('/projets/'));

  /** Barre opaque : toujours sur /details, après le seuil ailleurs. */
  protected readonly scrolled = computed(() =>
    (!this.isHome() && !this.isProjectDetail()) || this.scrollY() > this.solidThreshold()
  );

  /** Texte clair sur fond sombre : hero en thème sombre, ou dégradé projet. */
  protected readonly inverse = computed(() =>
    !this.scrolled() && (this.isProjectDetail() || this.theme.isDark())
  );

  private heroHeight?: number;

  protected readonly links: NavLink[] = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/details', fragment: 'a-propos' },
    { key: 'nav.skills', path: '/details', fragment: 'competences' },
    { key: 'nav.parcours', path: '/details', fragment: 'parcours' },
    { key: 'nav.projects', path: '/details', fragment: 'projets' },
  ];

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  @HostListener('window:resize')
  protected onResize(): void {
    this.heroHeight = undefined;
    this.onScroll();
  }

  private pathOf(url: string): string {
    return url.split('#')[0].split('?')[0] || '/';
  }

  /**
   * Sur l'accueil, la barre devient opaque a ~35 % du hero (avant la zone
   * sombre de l'image de fond). Sur la page projet, des le premier scroll.
   */
  private solidThreshold(): number {
    if (this.heroHeight === undefined) {
      const hero = document.querySelector('.hero') as HTMLElement | null;
      this.heroHeight = hero ? hero.offsetHeight : 0;
    }
    return this.heroHeight > 0 ? this.heroHeight * 0.35 : 24;
  }

  /**
   * Meme page : on laisse le routerLink gerer l'ancre.
   * Autre page : transition GSAP puis navigation.
   */
  protected handleNavClick(e: Event, path: string, fragment?: string): void {
    if (this.currentPath() !== path) {
      e.preventDefault();
      this.transitionService.navigate(path, fragment);
    }
  }
}
