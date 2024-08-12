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
