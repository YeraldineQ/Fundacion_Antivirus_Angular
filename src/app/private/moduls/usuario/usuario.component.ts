import { Component } from '@angular/core';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CarruselComponent, FiltroComponent, CardsComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

}
