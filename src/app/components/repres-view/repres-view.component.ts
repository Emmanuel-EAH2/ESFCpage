import { Component, OnInit } from '@angular/core';
import { RepresentanteService } from "../../service/representante.service";
import { repreModel } from "../../models/repres";

@Component({
  selector: 'app-repres-view',
  templateUrl: './repres-view.component.html',
  styleUrls: ['./repres-view.component.css']
})
export class RepresViewComponent implements OnInit {

  repres: any;
  constructor(private app: RepresentanteService) { }

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
      this.repres = data
      console.log(this.repres);
    }).catch((error)=>console.log(error));
  }

}
