import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  lang = signal<'fr' | 'en'>(
    localStorage.getItem('lang') === 'en' ? 'en' : 'fr'
  );

  toggle() {
    this.lang.update(l => {
      const next = l === 'fr' ? 'en' : 'fr';
      localStorage.setItem('lang', next);
      return next;
    });
  }
}
