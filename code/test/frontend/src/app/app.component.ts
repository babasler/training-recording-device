import { Component } from '@angular/core';
import { ApiService } from './api.service';  // Importiere den ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: string = '';  // Variable für den Text, der angezeigt wird

  constructor(private apiService: ApiService) {}

  // Methode, die beim Klicken auf den Button den HTTP-Aufruf macht
  onGetData(): void {
    this.apiService.getData().subscribe(
      (data) => {
        this.content = JSON.stringify(data);  // Den erhaltenen Inhalt als Text darstellen
      },
      (error) => {
        this.content = 'Fehler beim Abrufen der Daten: ' + error.message;
      }
    );
  }
}
