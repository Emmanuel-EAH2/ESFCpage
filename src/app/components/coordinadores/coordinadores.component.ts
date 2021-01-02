import { Component, OnInit } from '@angular/core';
import { CoordinadoresService } from "../../service/coordinadores.service";
import { coordinadorModel } from "../../models/coordinadores";
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-coordinadores',
  templateUrl: './coordinadores.component.html',
  styleUrls: ['./coordinadores.component.css']
})
export class CoordinadoresComponent implements OnInit {

  constructor(private app: CoordinadoresService) { }

  allData:any [] = [];
  coordiNew: coordinadorModel = new coordinadorModel();
  form: FormGroup
  nuevocoordi: any;

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
      this.allData = data
        console.log(this.allData);
    }).catch((error)=>console.log(error));
  }

  enviarNuevoCoordi(form: NgForm){
    // console.log(form);
    this.app.postCoordi(this.coordiNew).then((data:any)=>{
      this.nuevocoordi = data
      console.log(this.nuevocoordi);
    }).catch((error)=>console.log(error));
    if(this.form.invalid){
        return Object.values( this.form.controls ).forEach(control =>{
          if(control instanceof FormGroup){ //instancedof nos permite llegar a una instancia o a un hijo de un grupo
            return Object.values(control.controls).forEach(control => control.markAsTouched())
          }else{
            control.markAsTouched();
          }
    });
  };
 }
}
