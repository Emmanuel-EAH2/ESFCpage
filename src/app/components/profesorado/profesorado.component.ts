import { Component, OnInit } from '@angular/core';
import { ProfesService } from "../../service/profes.service";
import { ProfesModel } from "../../models/profes";

@Component({
  selector: 'app-profesorado',
  templateUrl: './profesorado.component.html',
  styleUrls: ['./profesorado.component.css']
})
export class ProfesoradoComponent implements OnInit {

profesor: any;
idProfeActualizar: any
profeUpd: ProfesModel = new ProfesModel()
  constructor(private app: ProfesService) { }

  ngOnInit(): void {
    this.app.getDataSI().then((data:any)=>{
      this.profesor = data.Profes
      console.log(this.profesor);
    }).catch((error)=>console.log(error));
  }

  modifcar(){
    this.app.putData(this.idProfeActualizar, this.profeUpd).then((data:any)=>{
      this.profeUpd = data;
      console.log(data);
    }).catch((err)=>console.log(err));
  }

  idActualizar(idprofe: string){
    this.idProfeActualizar = idprofe 
    console.log(this.idProfeActualizar);
  }
}
