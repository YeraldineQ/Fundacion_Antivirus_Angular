import { Component } from '@angular/core';
import { UsuarioComponent } from './moduls/usuario/usuario.component';
import { NavbarComponent } from './moduls/components/navbar/navbar.component';
import { FooterComponent } from '../publics/components/footer/footer.component';
import { BuscadorComponent } from '../publics/components/buscador/buscador.component';


@Component({
  selector: 'app-private',
  standalone: true,
  imports: [UsuarioComponent, NavbarComponent, BuscadorComponent, FooterComponent],
  templateUrl: './private.component.html',
  
})
export class PrivateComponent {

}
