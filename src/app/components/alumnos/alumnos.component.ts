import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { alumnosModel } from "../../models/alumnos";
import { AlumnosService } from "../../service/alumnos.service";


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {
  /**VARIABLES DE ENTORNO***/
  alumnoNew: alumnosModel = new alumnosModel();
  nuevoAlumno: any;
  respuesta: any;
  loading: boolean;
  altas: "Alumno agregado con exito";
  constructor(private app: AlumnosService) { }

  ngOnInit(): void {
    this.loading = true;
    this.app.getAlumnos().then((data:any)=>{
        console.log(data);
        this.loading = false;
    }).catch((err)=>console.log(err)
  );
}

  crearAlumno(form: NgForm){
    this.app.postAlumnos(this.alumnoNew).then((data:any)=>{
      this.nuevoAlumno = data;
      console.log(this.nuevoAlumno);
    }).catch((err)=>console.log(err)); 
 }

}
