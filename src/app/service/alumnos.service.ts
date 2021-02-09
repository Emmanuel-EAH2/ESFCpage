import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { alumnosModel } from "../models/alumnos";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
   alumnos: any = [];
  constructor(private http: HttpClient) { }
/**************************FUNCIONES GET***********************/
  getAlumnos(){
    return this.http.get('http://localhost:3003/alumnos').toPromise();
  }
  
   getAlumnosActivate(){
     return this.http.get('http://localhost:3003/alumnosAct').toPromise();
   }

   getAlumnosSI(){
     return this.http.get('http://localhost:3003/AlumnosSantaInes').toPromise();
   }

   getDataById(id: Number){
     return this.http.get(`http://localhost:3003/alumnos/${id}`).toPromise();
   }

   search(termino){
    let resultados: any = [];
    termino = termino.toLowerCase();
    this.getAlumnosActivate().then((data:any)=>{
      this.alumnos = data
      for(let i=0; i < this.alumnos.length; i++){
        let alumno = this.alumnos[i];
        // const colonia = alumno.colonia.toLowerCase();
        // const calle = alumno.calle.toLowerCase();
        const nombre = alumno.nombre.toLowerCase();
               if(nombre.indexOf(termino) >= 0){
                 alumno.index = i;
                 resultados.push(alumno);
              }
           }    
        });
        return resultados;
  }

  // || calle.indexOf(termino) || colonia.indexOf(termino)
/*****************FIN DE LAS FUNCIONES GET**********************/

  postAlumnos(alumno: alumnosModel){
    return this.http.post('http://localhost:3003/alumnos', alumno).toPromise();
 }

 putAlumnos(id: Number, alumno: alumnosModel){
   return this.http.put(`http://localhost:3003/alumnos/${id}`, alumno).toPromise(); 
 }

 deleteAlumnos(id: Number){
   return this.http.delete(`http://localhost:3003/alumnos/${id}`).toPromise();
 }
}
