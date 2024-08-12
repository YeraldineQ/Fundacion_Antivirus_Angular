import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private renderer: Renderer2,){
    
  }
  scroll(): void{
    const element = this.renderer.selectRootElement('#oportunidades', true)
    element.scrollIntoView({behavior: 'smooth'})
  }

  scroll2(): void{
    const element = this.renderer.selectRootElement('#servicios', true)
    element.scrollIntoView({behavior: 'smooth'})
  }
  
}
