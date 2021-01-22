import { Component, OnInit } from '@angular/core';
import { RepresentanteService } from "../../service/representante.service";
import { repreModel } from "../../models/repres";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.css']
})
export class RepresentanteComponent implements OnInit {

  repreNew: repreModel = new repreModel();
  constructor(private app: RepresentanteService) { }

  ngOnInit(): void {
  }

  agregarRepre(form: NgForm){
    this.app.postData(this.repreNew).then((data:any)=>{
      this.repreNew = data
      console.log(this.repreNew);
    }).catch((error)=>console.log(error));
  }

}
