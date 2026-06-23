import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Injection Clearing — UBA',
      description:
        "Application de gestion des incidents bancaires (clearing) pour la United Bank for Africa. Traitement et suivi des incidents de compensation interbancaire en temps réel avec tableau de bord opérationnel.",
      tags: ['Spring Boot', 'Angular', 'SQL Server', 'REST API', 'Scrum'],
      github: 'https://github.com/Freygis-Arantes27',
      demo: '#',
      featured: true,
    },
    {
      title: 'API Banking Platform — UBA',
      description:
        "Architecture d'API RESTful pour les processus bancaires critiques de compensation à la UBA. Conception, déploiement, consommation et intégration de services tiers sécurisés.",
      tags: ['Spring Boot', 'SQL Server', 'Swagger', 'Postman', 'Docker'],
      github: 'https://github.com/Freygis-Arantes27',
      demo: '#',
      featured: true,
    },
    {
      title: 'Well Group — App Mobile',
      description:
        "Application mobile Android & iOS de mise en relation entre entrepreneurs et donateurs. Digitalisation sécurisée avec transactions fiables, authentification et gestion des identités (IAM).",
      tags: ['Flutter', 'Dart', 'Firebase', 'Android', 'iOS'],
      github: 'https://github.com/Freygis-Arantes27',
      demo: '#',
      featured: true,
    },
    {
      title: 'Data Analysis BI — UBA',
      description:
        "Solution de Business Intelligence pour l'analyse comportementale des visiteurs et l'optimisation de l'expérience client au sein de la United Bank for Africa.",
      tags: ['MySQL', 'PowerBI', 'SQL Server', 'Python'],
      github: 'https://github.com/Freygis-Arantes27',
      demo: '#',
      featured: false,
    },
    {
      title: 'Consulat du Gabon — Site Officiel',
      description:
        "Développement complet du site web officiel du Consulat du Gabon : formulaires administratifs en ligne, système de prise de rendez-vous et espace de communication institutionnelle.",
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/Freygis-Arantes27',
      demo: '#',
      featured: false,
    },
    {
      title: 'La Camerounaise des Jeux',
      description:
        "Site vitrine institutionnel avec gouvernance numérique, centralisation des services en ligne et interconnexion sécurisée entre les différentes plateformes de l'entreprise.",
      tags: ['Angular', 'TypeScript', 'Node.js', 'MySQL'],
      github: 'https://github.com/Freygis-Arantes27',
      demo: '#',
      featured: false,
    },
  ];
}
