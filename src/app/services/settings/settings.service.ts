import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes: ajustes={
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }
  //el constr se dispara por el contric de app.componentt.ts
  constructor( @Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }
  //uso de localStorage (stringify combierte a string) que es lo q soporta localStorage.
  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){

    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }else{
      console.log("usando por defectos");
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema( tema : string){
    
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);  

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}

interface ajustes {
  temaUrl: string;
  tema: string;
}