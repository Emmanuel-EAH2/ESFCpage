import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { eventosModel } from "../models/eventos";
import { imagenModel } from "../models/imagenEvent";

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventos: any = [];
  constructor(private http: HttpClient) { }

  getData(){
   return this.http.get('http://localhost:3003/evento').toPromise();
  }
  getDatabyId(id: Number){
   return this.http.get(`http://localhost:3003/evento/${id}`).toPromise();
  }

  // getDataImg(){
  //   return this.http.get('http://localhost:3003/imagenes').toPromise();
  // }

  postData(eventoNew: eventosModel){
    return this.http.post('http://localhost:3003/evento', eventoNew).toPromise();
  }
  postImage(imagenNew: imagenModel){
    return this.http.post('http://localhost:3003/imagen/evento', imagenNew).toPromise();
  }

  search(termino){
    let resultado: any = [];
    termino = termino.toLowerCase();
    this.getData().then((data:any)=>{
      this.eventos = data.eventos
      for(let i=0; i < this.eventos.length; i++){
        let evento = this.eventos[i];
        const nombre = evento.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0){
          evento.index = i
          resultado.push(evento);
        }
      }
    });
    return resultado;
  }
}
