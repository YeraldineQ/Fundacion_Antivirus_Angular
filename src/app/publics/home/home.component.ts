import { Component } from '@angular/core';
import { SeccionFuturoComponent } from './components/seccion-futuro/seccion-futuro.component';
import { SeccionOportunidadesComponent } from './components/seccion-oportunidades/seccion-oportunidades.component';
import { SeccionServiciosComponent } from './components/seccion-servicios/seccion-servicios.component';
import { WompiComponent } from './components/wompi/wompi.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SeccionFuturoComponent, SeccionOportunidadesComponent, SeccionServiciosComponent, WompiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
