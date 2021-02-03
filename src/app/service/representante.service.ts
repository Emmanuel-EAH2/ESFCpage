import { Injectable } from '@angular/core';
import { repreModel } from "../models/repres";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  repres: any = [];
  constructor(private http: HttpClient) { }
getData(){
  return this.http.get('http://localhost:3003/repres').toPromise();
}

postData(repreNew: repreModel){
 return this.http.post('http://localhost:3003/repres', repreNew).toPromise();
 }

 search(termino){
  let resultados : any = [];
  termino = termino.toLowerCase();
  this.getData().then((data:any)=>{
    this.repres = data;
    for(let i=0; i < this.repres.length; i++){
        let repre = this.repres[i];
        const nombre = repre.folio.nombre.toLowerCase();
        if(nombre.indexOf(termino)){
          repre.index = i;
          resultados.push(repre);
         };
      };
    } );
   return resultados;
  };
}