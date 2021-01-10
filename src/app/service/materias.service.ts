import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { materiaModel } from "../models/materias";

@Injectable({
  providedIn: 'root'
})

export class MateriasService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('http://localhost:3003/materiasSantaInes').toPromise();
  }

  putData(idMateria: string, materia: materiaModel){
    return this.http.put(`http://localhost:3003/materias/${idMateria}`, materia).toPromise();
  }
}
