import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardsService } from './service/cards.service';
import { cards } from './core/cards';

@Component({
  selector: 'app-seccion-oportunidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-oportunidades.component.html',
  styleUrl: './seccion-oportunidades.component.css'
})
export class SeccionOportunidadesComponent {
  public cards = cards.map(card=>card ?? [])
  @ViewChild('scrollX')
  scrollX!: ElementRef;

  constructor(
   
    private cardsService: CardsService
  ) { }

  ngAfterViewInit() {
    this.cardsService.init(this.scrollX);
  }

  rightPosition() {
    this.cardsService.moveRight();
  }

  leftPosition() {
    this.cardsService.moveLeft();
  }


}



