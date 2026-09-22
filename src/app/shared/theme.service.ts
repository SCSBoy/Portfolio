import { Injectable, computed, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME: Theme = 'dark';

/**
 * Thème clair / sombre.
 *
 * - Sombre par défaut ; le choix explicite de l'utilisateur est persisté
 *   dans localStorage.
 * - Le thème est appliqué via `data-theme` sur <html> ; index.html contient
 *   un script inline qui pose cet attribut avant le bootstrap Angular pour
 *   éviter tout flash de mauvais thème.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(ThemeService.readInitial());
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    if (typeof window === 'undefined') return;

    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  toggle(): void {
    this.set(this.isDark() ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this.theme.set(theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* stockage indisponible */ }
  }

  private static readInitial(): Theme {
    if (typeof window === 'undefined') return DEFAULT_THEME;
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === 'light' || v === 'dark') return v;
    } catch { /* stockage indisponible */ }
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
    return DEFAULT_THEME;
  }
}
