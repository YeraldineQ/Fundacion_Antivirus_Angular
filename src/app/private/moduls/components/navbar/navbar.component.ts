import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private router: Router){

  }
//ensayo
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

closeMenu() {
  this.isMenuOpen = false;
}
//fin ensayo

servicios2(){
  this.router.navigate(['/public/home']).then(()=>{
    setTimeout(()=>{
    const element = this.renderer.selectRootElement('#servicios', true)
    element.scrollIntoView({behavior: 'smooth'})
  
    })
    
  })
}
}

//ensayo


