import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfesModel } from "../../models/profes";
import { ProfesService } from "../../service/profes.service";

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  profeNew: ProfesModel = new ProfesModel;
  nuevoProfe: any;
  constructor(private app: ProfesService) { }

  ngOnInit(): void {
  }
  crearProfe(form: NgForm){
    this.app.postProfe(this.profeNew).then((data:any)=>{
      this.nuevoProfe = data;
      console.log(this.nuevoProfe);
    }).catch((error)=>console.log(error));
  }
}
