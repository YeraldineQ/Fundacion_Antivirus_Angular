import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-publics',
  standalone: true,
  imports: [RouterOutlet, BuscadorComponent, NavbarComponent, FooterComponent],
  templateUrl: './publics.component.html',
})
export class PublicsComponent {

}
