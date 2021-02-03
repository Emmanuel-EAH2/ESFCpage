import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { materiaModel } from "../models/materias";

@Injectable({
  providedIn: 'root'
})

export class MateriasService {

materias : any;
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('http://localhost:3003/materiasSantaInes').toPromise();
  }

  putData(idMateria: string, materia: materiaModel){
    return this.http.put(`http://localhost:3003/materias/${idMateria}`, materia).toPromise();
  }

  search(termino){
    let resultados : any = [];
    termino = termino.toLowerCase();
    this.getData().then((data:any)=>{
      this.materias = data.Materias;
      for(let i=0; i < this.materias.length; i++){
        let materia = this.materias[i];
        const nombre = materia._id.toLowerCase();
        if(nombre.indexOf(termino)){
          materia.index = i;
          resultados.push(materia);
        }
      }
    })
    return resultados;
  }
}
