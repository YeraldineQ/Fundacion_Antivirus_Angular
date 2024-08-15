import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';//permite navegar entre las rutas principales

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundacion-Antivirus-Angular';
}


//https://docs.google.com/spreadsheets/d/1E8oSTj8c0ZwtejpUXcMSkGmykVkMvlAdyc1D0WnT8y4/edit?gid=0#gid=0 excel donde se guardan los datos