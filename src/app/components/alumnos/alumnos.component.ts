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

  alumnoNew: alumnosModel = new alumnosModel();
  nuevoAlumno: any;
  constructor(private app: AlumnosService) { }

  ngOnInit(): void {
    this.app.getAlumnos().then((data:any)=>{
        console.log(data);
    }).catch((err)=>console.log(err)
  );
}

  crearAlumno(form: NgForm){
    console.log(form);
    this.app.postAlumnos(this.alumnoNew).then((data:any)=>{
      this.nuevoAlumno = data
      console.log(this.nuevoAlumno);
    }).catch((err)=>console.log(err)
  );
 }

}
