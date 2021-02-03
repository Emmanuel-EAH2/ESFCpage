import { Component, OnInit } from '@angular/core';
import { SecundariaService } from "../../service/secundaria.service";
import { secuModel } from "../../models/secundaria";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginSecu: secuModel = new secuModel();
    autenticar: any;
    idSecu: any;
  constructor(private app: SecundariaService, private route: Router) { }

  ngOnInit(): void {
    // this.secundaria();
  }

  secundaria(){
    this.app.getUser(this.idSecu).then((data:any)=>{
      this.autenticar = data._id
      console.log(this.autenticar);
    })

  }
  
  login(form: NgForm){ 
    this.app.login(this.loginSecu).then((data:any)=>{
      this.autenticar = data;
      console.log(this.autenticar);
      this.app.setToken(data.token);
      localStorage.setItem('token', this.autenticar.token)
      this.route.navigateByUrl('/home');
    }).catch((err)=>console.log(err));
  }



  // IdSecundaria(id: any){
  //   this.idSecu = id
  //   console.log(this.idSecu);
  // }
}
