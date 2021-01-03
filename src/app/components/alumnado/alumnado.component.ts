import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { alumnosModel } from "../../models/alumnos";
import { AlumnosService } from "../../service/alumnos.service";


@Component({
  selector: 'app-alumnado',
  templateUrl: './alumnado.component.html',
  styleUrls: ['./alumnado.component.css']
})

export class AlumnadoComponent implements OnInit {
  displayedColumns: string[] = ['hola', 'hola1', 'hola2', 'hola3'];
  alumnoNew: alumnosModel = new alumnosModel();
  nuevoAlumno: any;
  alumnos:any;
  constructor(private app: AlumnosService) { }

  ngOnInit(): void {
    this.app.getAlumnos().then((data:any)=>{
      this.alumnos = data.alumnos;
      console.log(this.alumnos);
  }).catch((err)=>console.log(err));
}

  }
