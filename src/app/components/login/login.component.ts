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
  constructor(private app: SecundariaService, private route: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){ 
    this.app.login(this.loginSecu).then((data:any)=>{
      // this.autenticar = data;
      // console.log(this.autenticar);
      this.app.setToken(data.token);
      this.route.navigateByUrl('/home');
    }).catch((err)=>console.log(err));
  }

}
