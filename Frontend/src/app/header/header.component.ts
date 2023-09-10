import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('toolbarHeight', [
      state('large', style({ height: '120px' })), // Large height
      state('small', style({ height: '90px' })), // Small height
      transition('large <=> small', animate('0.5s')),
    ]),
  ],
})
export class HeaderComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isSidenavOpen = false;
  public isSmallScreen = false;
  isHovered = false;

  toggleSidenav() {
    this.sidenav.toggle();
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  toggleHovered() {
    this.isHovered = !this.isHovered;
  }
  toolbarState: 'large' | 'small' = 'large';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      (document.documentElement && document.documentElement.scrollTop) ||
      (document.body && document.body.scrollTop) ||
      0;

    if (scrollPosition > 100) {
      this.toolbarState = 'small';
    } else {
      this.toolbarState = 'large';
    }

    // Calculate the opacity based on the scroll position (adjust the values as needed)
    const opacity = Math.min(1, scrollPosition / 300);

    // Update the background color with the calculated opacity
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('#scrolling-toolbar'),
      'background-color',
      `rgba(255, 255, 255, ${opacity})`
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }
}
