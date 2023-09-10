import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    // Hier können Sie die Logik für das Absenden des Formulars hinzufügen
    console.log('Vorname:', this.firstName);
    console.log('Nachname:', this.lastName);
    console.log('Email:', this.email);
    console.log('Nachricht:', this.message);

    // Fügen Sie hier die Logik zum Absenden des Formulars an den Server hinzu
    // Zum Beispiel: Aufruf eines HTTP-Dienstes zum Senden der Daten an den Server
  }
}
