import { Component } from '@angular/core';
import { SeccionBeneficiosComponent } from './components/seccion-beneficios/seccion-beneficios.component';
import { SeccionFormularioComponent } from './components/seccion-formulario/seccion-formulario.component';
import { FormularioModule } from './components/seccion-formulario/formulario.module';

@Component({
  selector: 'app-registrate',
  standalone: true,
  imports: [SeccionBeneficiosComponent, FormularioModule],
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.css'
})
export class RegistrateComponent {

}
