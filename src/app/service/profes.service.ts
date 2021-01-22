import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfesModel } from "../models/profes";

@Injectable({
  providedIn: 'root'
})
export class ProfesService {
profes: any = [];
  constructor(private http: HttpClient) { }

  getDataSI(){
    return this.http.get('http://localhost:3003/profesSantaInes').toPromise();
  }

  postProfe(profeNew: ProfesModel){
    return this.http.post('http://localhost:3003/profesores', profeNew).toPromise();
  }

  putData(id: string, profeUpd: ProfesModel){
    return this.http.put(`http://localhost:3003/profesores/${id}`, profeUpd).toPromise();
  }

  search(termino){
    let resultado : any = [];
    termino = termino.toLowerCase();
    this.getDataSI().then((data:any)=>{
      this.profes = data.Profes
        console.log(this.profes);
      for(let i = 0; i < this.profes.length; i++ ){
        let profe = this.profes[i];
        const nombre = profe._id.toLowerCase();
        if(nombre.indexOf(termino) >= 0){
          profe.index = i
          resultado.push(profe)
        }
      }
    });
    return resultado;
  }
}
