import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { alumnosModel } from "../../models/alumnos";
import { AlumnosService } from "../../service/alumnos.service";
// import { Route } from "@angular/router";


@Component({
  selector: 'app-alumnado',
  templateUrl: './alumnado.component.html',
  styleUrls: ['./alumnado.component.css']
})

export class AlumnadoComponent implements OnInit {
  displayedColumns: string[] = ['hola8', 'hola', 'hola1', 'hola2', 'hola3', 'hola4', 'hola5', 'hola6', 'hola7'];
  alumnoNew: alumnosModel = new alumnosModel();
  nuevoAlumno: any;
  alumnos:any;
  alumBorrado: any;
  idUsuarioActualizar: any
  constructor(private app: AlumnosService) { }

  ngOnInit(): void {
    // this.app.getAlumnos().then((data:any)=>{
    //   this.alumnos = data.alumnos;
    //   console.log(this.alumnos);

    this.app.getAlumnosActivate().then((data:any)=>{
      this.alumnos = data
      console.log(this.alumnos);
    }).catch((err)=>console.log(err));
}

  getAlumnoById(){
    this.app.getDataById(this.idUsuarioActualizar).then((data:any)=>{
      this.alumnoNew = data;
      console.log(this.alumnoNew);
    }).catch((error)=>console.log('Ocurrio un pequeño',error));
  }

eliminarAlumno(){
  this.app.deleteAlumnos(this.idUsuarioActualizar).then((data:any)=>{
    this.alumBorrado = data;
    console.log(this.alumBorrado);
  }).catch((error)=>console.log(error));
}

modifcar(){
this.app.putAlumnos( this.idUsuarioActualizar, this.alumnoNew).then((data:any)=>{
  this.alumnoNew = data
  console.log(this.alumnoNew);
 }).catch((error)=>console.log(error));
}

idActualizar(idAlumno: string){
  this.idUsuarioActualizar = idAlumno;
  console.log(this.idUsuarioActualizar);
}

  }
