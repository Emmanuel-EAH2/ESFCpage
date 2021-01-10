import { Component, OnInit } from '@angular/core';
import { materiaModel } from "../../models/materias";
import { MateriasService } from "../../service/materias.service";

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  materiaUpd: materiaModel = new materiaModel();
  materia: any;
  idMateriaActualizar: any;
  constructor(private app: MateriasService) { }

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
      this.materia = data.Materias;
      console.log(this.materia);
    }).catch((error)=>console.log(error));
  }

modificar(){
  this.app.putData(this.idMateriaActualizar, this.materiaUpd).then((data:any)=>{
    this.materia = data;
    console.log(this.materia);
  }).catch((error)=>console.log(error));
}

  idActualizar(idprofe: string){
    this.idMateriaActualizar = idprofe 
    console.log(this.idMateriaActualizar);
  }
}
