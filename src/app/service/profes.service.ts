import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfesModel } from "../models/profes";

@Injectable({
  providedIn: 'root'
})
export class ProfesService {

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
}
