import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { coordinadorModel } from "../../models/coordinadores";
import { CoordinadoresService } from "../../service/coordinadores.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private app: CoordinadoresService) { }

  coordiNew: coordinadorModel = new coordinadorModel();
  ngOnInit(): void {
  }
  logearse(form: NgForm){
this.app.Login(this.coordiNew).then((data:any)=>{
  this.coordiNew = data
  console.log(this.coordiNew);
   }).catch((error)=>console.log(error)
   )
  }
}
