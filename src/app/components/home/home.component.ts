import { Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinner, MatSpinner } from '@angular/material/progress-spinner';
import { timer } from 'rxjs'
import { SecundariaService } from "../../service/secundaria.service";
import { secuModel } from "../../models/secundaria";
// import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  secundaria: secuModel = new secuModel();
  constructor(private app: SecundariaService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }
   Input: MatSpinner

   getUserLogged(){
     this.app.getUser(this.app.login(this.secundaria));
   }
   

}
