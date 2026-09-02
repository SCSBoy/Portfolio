import { Injectable, computed, signal } from '@angular/core';
import { TRANSLATIONS, Language, TranslationKey } from '../data/translations.data';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  // Default to English
  readonly currentLang = signal<Language>('en');

  // Computed dictionary based on current language
  readonly activeTranslations = computed(() => TRANSLATIONS[this.currentLang()]);

  /**
   * Toggle between English and French
   */
  toggleLanguage() {
    this.currentLang.update(lang => lang === 'en' ? 'fr' : 'en');
  }

  /**
   * Get translation for a specific key
   */
  t(key: TranslationKey): string {
    return this.activeTranslations()[key] || key;
  }
}
