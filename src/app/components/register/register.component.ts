import { Component, OnInit } from '@angular/core';
import { SecundariaService } from "../../service/secundaria.service";
import { secuModel } from "../../models/secundaria";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  secuNew: secuModel = new secuModel();
  constructor(private app: SecundariaService) { }

  ngOnInit(): void {
  }

  crearSecu(form: NgForm){
    this.app.register(this.secuNew).then((data:any)=>{
      this.secuNew = data;
      console.log(this.secuNew);
    }).catch((err)=>console.log(err));
  }
}
