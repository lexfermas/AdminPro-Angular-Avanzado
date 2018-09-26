import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, take, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
// import {} from 'rxjs/operator/filter'


@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: []
})
export class BreadCrumbsComponent implements OnInit {

  label: string = ""; //para colocar el nombre de cada pagina, en .html

  constructor(
    private _router: Router,
    public _title: Title, 
    public _meta: Meta   //para agragr metatag para posicionamiento en google
    ) {
    
    this.getDataRoute().subscribe(data =>{
        console.log(data);

        this.label = data.titulo;
        this._title.setTitle( this.label );

        let metaTag: MetaDefinition = { //traido de angular.io
          name: 'description',
          content: this.label
        };

        this._meta.updateTag(metaTag); 

      });
   }

   getDataRoute(){ //filtra los objetos hasta quedar solo con la data que es la que contine el titulo de cada pagina

    return this._router.events
      .pipe(filter( evento => evento instanceof ActivationEnd))
      .pipe(filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null))
      .pipe(map((evento: ActivationEnd) => evento.snapshot.data ));
      
   }

  ngOnInit() {
    
  }

}
