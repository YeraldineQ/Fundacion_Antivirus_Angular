import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private renderer: Renderer2, private router:Router){
    
  }
  scroll(ingresa: HTMLAnchorElement, registrate: HTMLAnchorElement): void{
    this.router.navigate(['/public/home']).then(()=>{
      setTimeout(()=>{
      const element = this.renderer.selectRootElement('#oportunidades', true)
      element.scrollIntoView({behavior: 'smooth'})
    
      })
      this.inicio(ingresa, registrate)
    })
    
  }

  scroll2(ingresa: HTMLAnchorElement, registrate: HTMLAnchorElement): void{
    this.router.navigate(['/public/home']).then(()=>{
      setTimeout(()=>{
      const element = this.renderer.selectRootElement('#servicios', true)
      element.scrollIntoView({behavior: 'smooth'})
    
      })
      this.inicio(ingresa, registrate)
    })
  }

  inicio(ingresa: HTMLAnchorElement, registrate: HTMLAnchorElement){
    const boton = ingresa.querySelector('button')
    const boton2 = registrate.querySelector('button')
    ingresa.style.opacity = '100'
    registrate.style.opacity = '100'
    if(boton!.disabled == true){
      !boton!.disabled
      
    }
    if(boton2!.disabled == true){
      !boton2!.disabled
      
    }
  }
  
  login(ingresa: HTMLAnchorElement, registrate: HTMLAnchorElement){
    ingresa.style.opacity='0'
    const boton = ingresa.querySelector('button')
    !boton!.disabled
    registrate.style.opacity='100'
    const boton2 = registrate.querySelector('button')
    !boton!.disabled
  }

  register(ingresa: HTMLAnchorElement, registrate: HTMLAnchorElement){
    ingresa.style.opacity='100'
    const boton = ingresa.querySelector('button')
    !boton!.disabled
    registrate.style.opacity='0'
    const boton2 = registrate.querySelector('button')
    !boton!.disabled
  }


}
