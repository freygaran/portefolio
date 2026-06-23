import {
  Component, HostListener, OnInit, OnDestroy,
  computed, inject, signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterRevealDirective }  from '../../directives/letter-reveal.directive';
import { TranslationService }     from '../../services/translation.service';

interface OrbitTech { label: string; bg: string; color: string; angle: number; }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LetterRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  private ts = inject(TranslationService);
  lang       = this.ts.lang;

  /* ── Traductions ── */
  get text() {
    return this.lang() === 'en' ? {
      badge:        'Available for new opportunities',
      tagline:      'I design high-performance digital experiences, from a robust backend to an elegant frontend.',
      ctaProjects:  'View my projects',
      ctaContact:   'Contact me',
      statExp:      'Years of experience',
      statProjects: 'Projects completed',
      statTech:     'Technologies',
    } : {
      badge:        'Disponible pour de nouvelles opportunités',
      tagline:      'Je conçois des expériences numériques performantes, du backend robuste au frontend élégant.',
      ctaProjects:  'Voir mes projets',
      ctaContact:   'Me contacter',
      statExp:      "Ans d'expérience",
      statProjects: 'Projets réalisés',
      statTech:     'Technologies',
    };
  }

  /* ── Titres animés ── */
  private readonly titlesFr = [
    'Développeur Fullstack', 'UI/UX Designer', 'Développeur Web',
    'Développeur Mobile',   'Admin Base de Données', 'Flutter Developer',
    'Java / Spring Boot Dev',
  ];
  private readonly titlesEn = [
    'Fullstack Developer', 'UI/UX Designer', 'Web Developer',
    'Mobile Developer',   'Database Admin', 'Flutter Developer',
    'Java / Spring Boot Dev',
  ];
  private get activeTitles() {
    return this.lang() === 'en' ? this.titlesEn : this.titlesFr;
  }

  currentTitle = signal('');
  showCursor   = signal(true);
  private titleIndex = 0;
  private charIndex  = 0;
  private isDeleting = false;
  private destroyed  = false;

  /* ── Parallaxe souris ── */
  parallaxX = signal(0);
  parallaxY = signal(0);
  orbitTransform = computed(() =>
    `translate(${this.parallaxX()}px, ${this.parallaxY()}px)`
  );

  /* ── Orbites ── */
  innerTechs: OrbitTech[] = [
    { label: 'Angular',  bg: 'rgba(221,0,49,0.15)',   color: '#ff6b8a', angle: 0   },
    { label: 'React',    bg: 'rgba(97,218,251,0.12)',  color: '#61DAFC', angle: 90  },
    { label: 'Flutter',  bg: 'rgba(84,197,248,0.12)',  color: '#54C5F8', angle: 180 },
    { label: 'Python',   bg: 'rgba(255,212,59,0.12)',  color: '#FFD43B', angle: 270 },
  ];
  outerTechs: OrbitTech[] = [
    { label: 'Java',        bg: 'rgba(237,139,0,0.12)', color: '#FFA040', angle: 45  },
    { label: 'Spring Boot', bg: 'rgba(109,179,63,0.12)',color: '#6DB33F', angle: 135 },
    { label: 'Dart',        bg: 'rgba(1,117,194,0.12)', color: '#38bdf8', angle: 225 },
    { label: 'PostgreSQL',  bg: 'rgba(51,103,145,0.12)',color: '#7db8e8', angle: 315 },
  ];

  angleStr(deg: number) { return `${deg}deg`; }

  ngOnInit() {
    this.runTypewriter();
    setInterval(() => this.showCursor.update(v => !v), 530);
  }

  ngOnDestroy() { this.destroyed = true; }

  private runTypewriter() {
    if (this.destroyed) return;
    const full = this.activeTitles[this.titleIndex % this.activeTitles.length];

    if (!this.isDeleting) {
      this.charIndex = Math.min(this.charIndex + 1, full.length);
      this.currentTitle.set(full.slice(0, this.charIndex));
      if (this.charIndex === full.length) {
        this.isDeleting = true;
        setTimeout(() => this.runTypewriter(), 2000);
        return;
      }
    } else {
      this.charIndex = Math.max(this.charIndex - 1, 0);
      this.currentTitle.set(full.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.titleIndex++;
      }
    }

    setTimeout(() => this.runTypewriter(), this.isDeleting ? 50 : 90);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const t  = e.currentTarget as HTMLElement;
    const r  = t.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
    const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
    this.parallaxX.set(dx * 18);
    this.parallaxY.set(dy * 12);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.parallaxX.set(0);
    this.parallaxY.set(0);
  }

  scrollToSection(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
