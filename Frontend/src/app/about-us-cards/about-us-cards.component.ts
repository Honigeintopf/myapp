import { Component, HostListener, ElementRef } from '@angular/core';
import {
  AnimationBuilder,
  AnimationPlayer,
  style,
  animate,
  trigger,
  transition,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-about-us-cards',
  templateUrl: './about-us-cards.component.html',
  styleUrls: ['./about-us-cards.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('inactive', style({ opacity: 1, transform: 'translateX(0)' })),
      state('active', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition('active => inactive', animate('700ms ease-in')),
    ]),
  ],
})
export class AboutUsCardsComponent {
  private animated: boolean[] = [false, false, false, false];

  private animationPlayer: AnimationPlayer;
  public animationState = 'inactive';
  public animationStates: string[] = [
    'inactive',
    'inactive',
    'inactive',
    'inactive',
  ];

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    for (let i = 0; i < this.animationStates.length; i++) {
      if (!this.animated[i] && this.isElementInViewport(i)) {
        this.playAnimation(i);
      }
    }
  }

  private isElementInViewport(index: number): boolean {
    const rect = this.el.nativeElement
      .querySelectorAll('.step-list__item')
      [index].getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }

  private playAnimation(index: number): void {
    this.animated[index] = true;
    this.animationStates[index] = 'active';
    setTimeout(() => {
      this.animationStates[index] = 'inactive';
    }, 300);
  }
}
