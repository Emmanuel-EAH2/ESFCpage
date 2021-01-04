import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { alumnosModel } from "../models/alumnos";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get('http://localhost:3003/alumnos').toPromise();
 }

  postAlumnos(alumno: alumnosModel){
    return this.http.post('http://localhost:3003/alumnos', alumno).toPromise();
 }

 putAlumnos(id: string, alumno: alumnosModel){
   return this.http.put(`http://localhost:3003/alumnos/${id}`, alumno).toPromise(); 
 }

}
