import { Component, OnInit, OnDestroy, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Phase = 'typing' | 'fill' | 'morph' | 'exit' | 'done';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader implements OnInit, OnDestroy {
  @Output() done = new EventEmitter<void>();

  readonly letters = 'Arantes'.split('');
  visibleCount = signal(0);
  phase        = signal<Phase>('typing');
  showCursor   = signal(true);
  morphStyle   = signal<string | null>(null);

  private cursorTimer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    document.body.classList.add('loader-active');
    this.cursorTimer = setInterval(() => this.showCursor.update(v => !v), 530);
    this.runTyping();
  }

  ngOnDestroy() {
    clearInterval(this.cursorTimer);
    document.body.classList.remove('loader-active');
  }

  private runTyping() {
    let i = 0;
    const delays = [200, 130, 145, 120, 155, 140, 130];
    const next = () => {
      if (i < this.letters.length) {
        this.visibleCount.set(++i);
        setTimeout(next, delays[i] ?? 140);
      } else {
        clearInterval(this.cursorTimer);
        this.showCursor.set(true);
        setTimeout(() => this.startFill(), 380);
      }
    };
    setTimeout(next, 220);
  }

  private startFill() {
    this.phase.set('fill');
    setTimeout(() => this.startMorph(), 620);
  }

  private startMorph() {
    const splashA = document.querySelector<HTMLElement>('.splash-a');
    const navLogo = document.querySelector<HTMLElement>('.logo-mark');

    if (splashA && navLogo) {
      const src = splashA.getBoundingClientRect();
      const dst = navLogo.getBoundingClientRect();
      const dx    = (dst.left + dst.width  / 2) - (src.left + src.width  / 2);
      const dy    = (dst.top  + dst.height / 2) - (src.top  + src.height / 2);
      const scale = dst.width / src.width;
      this.morphStyle.set(`translate(${dx}px, ${dy}px) scale(${scale})`);
    }

    this.phase.set('morph');
    setTimeout(() => this.startExit(), 580);
  }

  private startExit() {
    this.phase.set('exit');
    document.body.classList.remove('loader-active');
    setTimeout(() => {
      this.phase.set('done');
      this.done.emit();
    }, 480);
  }
}
