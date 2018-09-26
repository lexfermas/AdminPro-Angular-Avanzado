import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
// Funcion para controlar la caja de texto del progreso
  onChanges(newValue: number){
    // evita que se pueda escribir un numero mayor a 100 o menor que 0, pero solo funcionaba en una sola caja
    // let elementHTML: any = document.getElementsByName("porcentaje")[0];
    // console.log(elementHTML.value);

    if( newValue>=100){
      this.porcentaje = 100;
    }else if(newValue <= 0 ){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;
    }
    // elementHTML.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje; //funciona para todas las cajas
    this.txtProgress.nativeElement.focus(); //coloca el foco en la caja de texto.
  }

  cambiarValor(valor: number){

    if (this.porcentaje >= 100 && valor >0){
      this.porcentaje = 100;
      return;
    }

    if(this.porcentaje<=0 && valor<0){
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);

  }

}
