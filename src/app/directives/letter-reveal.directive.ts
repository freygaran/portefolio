import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLetterReveal]',
  standalone: true,
})
export class LetterRevealDirective implements AfterViewInit {
  @Input() baseDelay = 0;   // ms before first letter
  @Input() stagger = 45;    // ms between each letter

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const host = this.el.nativeElement;
    const text = host.textContent?.trim() ?? '';
    host.textContent = '';
    host.style.visibility = 'visible';

    [...text].forEach((char, i) => {
      const outer = document.createElement('span');
      const inner = document.createElement('span');
      outer.className = 'lr-outer';
      inner.className = 'lr-inner';

      if (char === ' ') {
        inner.innerHTML = ' ';
        inner.style.cssText = 'opacity:1;transform:translateY(0);animation:none;';
      } else {
        inner.textContent = char;
        inner.style.animationDelay = `${this.baseDelay + i * this.stagger}ms`;
      }

      outer.appendChild(inner);
      host.appendChild(outer);
    });
  }
}
