import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionFormularioComponent } from './seccion-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  declarations: [SeccionFormularioComponent],
  exports: [
    SeccionFormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
})
export class FormularioModule { }
