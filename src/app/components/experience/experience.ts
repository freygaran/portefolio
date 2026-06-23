import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
  current: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  items: ExperienceItem[] = [
    {
      period: 'Déc 2025 — Mai 2026',
      role: 'Développeur Fullstack',
      company: 'United Bank for Africa (UBA)',
      location: 'Douala, Cameroun',
      type: 'Stage',
      description:
        "Développement de 3 projets bancaires : conception d'une API RESTful pour les processus de compensation, application de gestion des incidents clearing (Angular + Spring Boot + SQL Server) et solution Data Analysis & Business Intelligence (MySQL + PowerBI).",
      tags: ['Spring Boot', 'Angular', 'SQL Server', 'MySQL', 'PowerBI', 'REST API'],
      current: true,
    },
    {
      period: 'Nov 2024 — Fév 2025',
      role: 'Développeur Web',
      company: 'Consulat du Gabon',
      location: 'Douala, Cameroun',
      type: 'CDD',
      description:
        'Conception et développement complet du site web officiel du Consulat du Gabon : formulaires administratifs en ligne, système de prise de rendez-vous et espace de communication officielle.',
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
      current: false,
    },
    {
      period: 'Nov 2024 — Fév 2025',
      role: 'Développeur Web',
      company: 'La Camerounaise des Jeux',
      location: 'Douala, Cameroun',
      type: 'Freelance',
      description:
        "Conception, développement et déploiement du site vitrine institutionnel de l'entreprise : gouvernance numérique, centralisation des services et interconnexion sécurisée.",
      tags: ['Angular', 'TypeScript', 'Node.js', 'MySQL'],
      current: false,
    },
    {
      period: 'Nov 2024 — Jan 2025',
      role: 'Développeur Web',
      company: 'École DuVALL',
      location: 'Douala, Cameroun',
      type: 'Freelance',
      description:
        "Modernisation de l'interface utilisateur, amélioration de l'expérience de navigation et renforcement de la présence numérique de l'école : refonte technique, optimisation UI/UX et performances.",
      tags: ['Angular', 'TypeScript', 'SCSS', 'UI/UX'],
      current: false,
    },
    {
      period: 'Nov 2023 — Fév 2024',
      role: 'Développeur Mobile',
      company: 'Well Group',
      location: 'Douala, Cameroun',
      type: 'Freelance',
      description:
        "Conception, développement et déploiement d'une application mobile Android & iOS de mise en relation entre entrepreneurs et donateurs : digitalisation sécurisée, fiabilité des transactions et gestion des identités (IAM).",
      tags: ['Flutter', 'Dart', 'Firebase', 'Android', 'iOS'],
      current: false,
    },
    {
      period: 'Nov 2023 — Fév 2024',
      role: 'Développeur Web',
      company: 'Buid Company',
      location: 'Douala, Cameroun',
      type: 'Stage',
      description:
        "Conception, développement et déploiement du site web interne de l'entreprise : centralisation des données, sécurisation de la communication interne et haute disponibilité.",
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      current: false,
    },
  ];
}
