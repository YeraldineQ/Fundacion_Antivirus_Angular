import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-seccion-formulario',
  templateUrl: './seccion-formulario.component.html',
  styleUrl: './seccion-formulario.component.css',
  providers: [ConexionService]
})
export class SeccionFormularioComponent implements AfterViewInit{
  form!: FormGroup
  constructor(
    private method: FormBuilder,
    private conexionService: ConexionService
  ){
    this.form = this.method.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['00/00/0000', Validators.required],
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
      confirmar: ['', Validators.required],
    })
  }



  ngAfterViewInit(): void {

    
  }

  onSubmit(){
    if(this.form.valid){
      this.conexionService.addData(this.form.value)
      
        alert('se enviaron los datos')
        
      
    }else{
      console.log('Datos invalidos');
      
    }
  }
}
