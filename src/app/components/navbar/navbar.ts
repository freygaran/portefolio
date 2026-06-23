import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService }       from '../../services/theme.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private themeService = inject(ThemeService);
  private ts           = inject(TranslationService);

  scrolled  = signal(false);
  menuOpen  = signal(false);
  theme     = this.themeService.theme;
  lang      = this.ts.lang;

  get navLinks() {
    const l = this.lang();
    return [
      { label: l === 'fr' ? 'À propos'    : 'About',      href: '#about'      },
      { label: l === 'fr' ? 'Compétences' : 'Skills',     href: '#skills'     },
      { label: l === 'fr' ? 'Projets'     : 'Projects',   href: '#projects'   },
      { label: l === 'fr' ? 'Parcours'    : 'Experience', href: '#experience' },
      { label: l === 'fr' ? 'Contact'     : 'Contact',    href: '#contact'    },
    ];
  }

  get navCta() { return this.lang() === 'fr' ? 'Me contacter' : 'Contact me'; }

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 60); }

  toggleMenu()  { this.menuOpen.update(v => !v); }
  toggleTheme() { this.themeService.toggle(); }
  toggleLang()  { this.ts.toggle(); }

  scrollTo(href: string) {
    this.menuOpen.set(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
