import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    
  // llamo la funcion que realiza la promesa
    this.contarTres().then(
      mensaje => console.log("termino", mensaje)
    )
    .catch( error => console.error("error en la promesa", error));

  }

  ngOnInit() {
  }
//  cuenta hasta 3 segundos y envia el resolve
  contarTres(): Promise<boolean> {

    return new Promise( (resolve, reject) => {
      
      let contador = 0;

      let intervalo = setInterval( () => {
        contador +=1;
        console.log(contador)
        if(contador === 3){
          resolve(true);
          clearInterval(intervalo); 
        }
      }, 1000);

    });

  }

}
