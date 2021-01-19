import { Component, OnInit } from '@angular/core';
import { EventosService } from "../../service/eventos.service";
import { eventosModel } from 'src/app/models/eventos';
import { Router } from '@angular/router'

@Component({
  selector: 'app-vista-eventos',
  templateUrl: './vista-eventos.component.html',
  styleUrls: ['./vista-eventos.component.css']
})
export class VistaEventosComponent implements OnInit {

evento:any;
image: any;
  constructor(private app:EventosService, private route: Router) { }

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
      this.evento = data.eventos
      console.log(this.evento)
      // console.log(this.evento);
    }).catch((error)=>console.log(error));

    // this.app.getDataImg().then((data:any)=>{
    //   this.evento = data.eventos;
    //   console.log(this.evento);
    // }).catch((error)=>console.log(error));
  }

  Navegar(index){
   this.route.navigate(['../evento-completo', index]);
  }
  
}
