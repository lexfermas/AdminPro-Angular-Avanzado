import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    //se suscribe el observable
    this.regresaObservable()
      .subscribe(
        numero => console.log("sub", numero), // colback cuando se recibe dato
        error => console.error("Error en el obs", error), //recibe el error cuando contador =2.
        () => console.log("el observador temino")

      );

  }

  ngOnInit() {
  }

  //primero se ejecuta esta funcion y se suscribe en el constructor
  regresaObservable(): Observable<any> {

    // rxjs es react extension
    //la funcion esta retornando todo lo que realiza el observable
    return new Observable(observer => {

      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;
        
        let salida = {
          valor: contador
        }

        observer.next(salida);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error("error en obsever");
        // }

      }, 1000);
    }).pipe(
      map( (resp: any) => {  //el map permite mantener el formato de la información.
        return resp.valor;
      })
    )
    

  }

}
