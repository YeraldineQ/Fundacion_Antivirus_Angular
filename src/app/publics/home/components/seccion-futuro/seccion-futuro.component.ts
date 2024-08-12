import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seccion-futuro',
  standalone: true,
  imports: [],
  templateUrl: './seccion-futuro.component.html',
  styleUrl: './seccion-futuro.component.css'
})
export class SeccionFuturoComponent implements AfterViewInit
 {
  @ViewChild('modalFuturo') modalFuturoRef!: any
  modalFuturo!: HTMLDialogElement

  ngAfterViewInit(): void {
    this.modalFuturo = this.modalFuturoRef.nativeElement
  }

  openModal(){
    if(this.modalFuturo){
      this.modalFuturo.showModal()
    }
  }

  closeModal(){
    if(this.modalFuturo){
      this.modalFuturo.close()
    }
  }
}


