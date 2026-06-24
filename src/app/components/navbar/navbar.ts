import { Component, AfterViewInit, OnDestroy, HostListener, inject, signal } from '@angular/core';
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
export class Navbar implements AfterViewInit, OnDestroy {
  private readonly themeService = inject(ThemeService);
  private readonly ts           = inject(TranslationService);

  scrolled       = signal(false);
  menuOpen       = signal(false);
  activeSection  = signal<string>('');
  theme          = this.themeService.theme;
  lang           = this.ts.lang;

  private sectionIds = ['#about', '#skills', '#projects', '#education', '#experience', '#contact'];
  private observer!: IntersectionObserver;

  get navLinks() {
    const l = this.lang();
    return [
      { label: l === 'fr' ? 'À propos'    : 'About',      href: '#about'      },
      { label: l === 'fr' ? 'Compétences' : 'Skills',     href: '#skills'     },
      { label: l === 'fr' ? 'Projets'     : 'Projects',   href: '#projects'   },
      { label: l === 'fr' ? 'Formation'   : 'Education',  href: '#education'  },
      { label: l === 'fr' ? 'Expérience'  : 'Experience', href: '#experience' },
      { label: 'Contact',                                    href: '#contact'    },
    ];
  }

  get navCta() { return this.lang() === 'fr' ? 'Me contacter' : 'Contact me'; }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set('#' + entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    this.sectionIds.forEach(id => {
      const el = document.querySelector(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() { this.observer?.disconnect(); }

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
