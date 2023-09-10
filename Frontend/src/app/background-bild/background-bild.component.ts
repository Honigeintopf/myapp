import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-bild',
  templateUrl: './background-bild.component.html',
  styleUrls: ['./background-bild.component.css'],
})
export class BackgroundBildComponent {
  @Input() backgroundImageUrl: string = '';
  @Input() headerText: string = '';
  @Input() h2Text: string = '';
  @Input() h3Text: string = '';
  @Input() buttonText: string = '';
  @Input() h1FontSize: string = '90px'; // Input für die Schriftgröße von <h1>
  @Input() h2FontSize: string = '36px'; // Input für die Schriftgröße von <h2>
  @Input() h3FontSize: string = '18px'; // Input für die Schriftgröße von <h3>
  @Input() h1Color: string = 'rgb(0, 0, 0)'; // Input für die Farbe von <h1>
  @Input() h2Color: string = 'rgb(0, 0, 0)'; // Input für die Farbe von <h2>
  @Input() h3Color: string = 'rgb(0, 0, 0)'; // Input für die Farbe von <h3>
}
