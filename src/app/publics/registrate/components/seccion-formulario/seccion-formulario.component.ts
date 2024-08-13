import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from '../../services/conexion.service';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleApiService } from '../../services/google-api.service';

@Component({
  selector: 'app-seccion-formulario',
  templateUrl: './seccion-formulario.component.html',
  styleUrl: './seccion-formulario.component.css',
  providers: [ConexionService]
})
export class SeccionFormularioComponent implements OnInit{
  form!: FormGroup
  constructor(
    private method: FormBuilder,
    private conexionService: ConexionService,
    private authService: SocialAuthService,
    private googleApiService: GoogleApiService
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

user: any
loggedIn: any


ngOnInit(): void {
  this.authService.authState.subscribe((user)=>{
    this.user= user
    console.log(this.user);
    this.loggedIn= user != null
    
  })
}

  onSubmit(){
    if(this.form.valid){
      this.conexionService.addData(this.form.value)
      
        alert('se enviaron los datos')
        
      
    }else{
      console.log('Datos invalidos');
      
    }
  }

  signInFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
  signInGoogle(){
    this.googleApiService.signInGoogle()
    .then((res)=>{
      console.log('Ususario Logeado', res.user);
    })
    .catch((error)=>{
      console.error('Verifique los daros ingresados',error)
    })
  }
}

