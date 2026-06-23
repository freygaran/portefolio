import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective }       from '../../directives/reveal.directive';
import { TranslationService }    from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly ts = inject(TranslationService);

  get text() {
    return this.ts.lang() === 'en' ? {
      sectionLabel: 'About',
      title:        'Passionate about',
      titleSpan:    'quality code',
      bio1:         'Fullstack developer with 4 years of experience, combining deep technical expertise (Spring Boot, Angular, SQL Server) and mastery of critical banking processes at United Bank for Africa. Passionate about cybersecurity and data analysis.',
      bio2:         'I aim to put my skills at the service of IT risk management, application architecture security and banking information system compliance.',
      highlights: [
        'Full Stack: Angular, Spring Boot, React, Flutter — web & mobile',
        'RESTful API architecture & critical banking system integration (UBA)',
        'Data Analysis & Business Intelligence: MySQL, PowerBI, SQL Server',
        'DevOps: Docker, Kubernetes, Git, AWS — Agile/Scrum methodology',
      ],
      cvBtn: 'Download CV',
      stats: [
        { value: '4+',  label: 'Years of experience' },
        { value: '8+',  label: 'Projects completed'  },
        { value: '20+', label: 'Technologies'        },
      ],
    } : {
      sectionLabel: 'À propos',
      title:        'Passionné par le',
      titleSpan:    'code de qualité',
      bio1:         "Développeur Full Stack avec 4 années d'expériences, je combine une expertise technique approfondie (Spring Boot, Angular, SQL Server) et une maîtrise des processus bancaires critiques à la United Bank for Africa. Passionné par la cybersécurité et l'analyse de données.",
      bio2:         "Je souhaite mettre mes compétences au service de la maîtrise des risques informatiques, de la sécurisation des architectures applicatives et de la conformité des systèmes d'information bancaires.",
      highlights: [
        'Full Stack : Angular, Spring Boot, React, Flutter — web & mobile',
        "Architecture API RESTful & intégration de systèmes bancaires critiques (UBA)",
        'Analyse de données & BI : MySQL, PowerBI, SQL Server',
        'DevOps : Docker, Kubernetes, Git, AWS — méthodologie Agile/Scrum',
      ],
      cvBtn: 'Télécharger CV',
      stats: [
        { value: '4+',  label: "Ans d'expérience" },
        { value: '8+',  label: 'Projets réalisés'  },
        { value: '20+', label: 'Technologies'      },
      ],
    };
  }
}
