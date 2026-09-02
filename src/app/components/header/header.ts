import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, signal, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UpperCasePipe } from '@angular/common';

import { I18nService } from '../../shared/i18n.service';
import { TranslationKey } from '../../data/translations.data';
import { TransitionService } from '../../shared/transition.service';

interface NavLink {
  key: TranslationKey;
  fragment: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  protected readonly i18n = inject(I18nService);
  protected readonly router = inject(Router);
  protected readonly transitionService = inject(TransitionService);
  protected readonly scrolled = signal(false);

  private heroHeight?: number;

  protected readonly links: NavLink[] = [
    { key: 'nav.home', fragment: 'accueil' },
    { key: 'nav.about', fragment: 'a-propos' },
    { key: 'nav.skills', fragment: 'competences' },
    { key: 'nav.parcours', fragment: 'parcours' },
    { key: 'nav.projects', fragment: 'projets' },
  ];

  ngAfterViewInit(): void {
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > this.solidThreshold());
  }

  @HostListener('window:resize')
  protected onResize(): void {
    this.heroHeight = undefined;
    this.onScroll();
  }

  /**
   * La barre devient opaque une fois le hero depasse. Sur les pages sans hero
   * (detail projet), elle devient opaque des le premier scroll.
   */
  private solidThreshold(): number {
    if (this.heroHeight === undefined) {
      const hero = document.querySelector('.hero') as HTMLElement | null;
      this.heroHeight = hero ? hero.offsetHeight : 0;
    }
    return this.heroHeight > 0 ? this.heroHeight - 80 : 24;
  }

  protected handleNavClick(e: Event, fragment: string): void {
    // Si on n'est pas sur la page d'accueil (ex: sur une page projet)
    const isHome = this.router.url === '/' || this.router.url.startsWith('/#');
    if (!isHome) {
      e.preventDefault();
      this.transitionService.navigate('/', fragment);
    }
  }
}
