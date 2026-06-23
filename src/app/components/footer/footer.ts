import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = new Date().getFullYear();

  links = [
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
