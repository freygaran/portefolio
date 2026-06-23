import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Skill {
  name: string;
  level: number;
  tag: string;
}

interface Category {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  categories: Category[] = [
    {
      name: 'Frontend & Mobile',
      skills: [
        { name: 'Angular',    level: 90, tag: 'NG'  },
        { name: 'TypeScript', level: 88, tag: 'TS'  },
        { name: 'Flutter',    level: 82, tag: 'FL'  },
        { name: 'React',      level: 75, tag: '⚛'   },
        { name: 'JavaScript', level: 85, tag: 'JS'  },
        { name: 'Dart',       level: 80, tag: 'Dt'  },
        { name: 'HTML / CSS', level: 90, tag: '</>' },
      ],
    },
    {
      name: 'Backend & Architecture',
      skills: [
        { name: 'Java',          level: 85, tag: 'J'   },
        { name: 'Spring Boot',   level: 85, tag: 'SB'  },
        { name: 'Python',        level: 72, tag: 'Py'  },
        { name: 'Django',        level: 68, tag: 'Dj'  },
        { name: 'REST API',      level: 88, tag: 'API' },
        { name: 'C++',           level: 60, tag: 'C++' },
      ],
    },
    {
      name: 'DevOps & Bases de données',
      skills: [
        { name: 'Git / GitLab',  level: 90, tag: 'Git' },
        { name: 'Docker',        level: 75, tag: '🐳'  },
        { name: 'Kubernetes',    level: 65, tag: 'K8s' },
        { name: 'AWS',           level: 68, tag: 'AWS' },
        { name: 'SQL Server',    level: 82, tag: 'MS'  },
        { name: 'MySQL',         level: 80, tag: 'My'  },
        { name: 'PostgreSQL',    level: 76, tag: 'PG'  },
        { name: 'MongoDB',       level: 68, tag: 'M'   },
      ],
    },
  ];
}
