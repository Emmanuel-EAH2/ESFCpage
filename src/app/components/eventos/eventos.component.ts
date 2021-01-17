import { Component, OnInit } from '@angular/core';
import { EventosService } from "../../service/eventos.service";
import { eventosModel } from 'src/app/models/eventos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private app: EventosService) { }

  evento: any;
  eventoNew: eventosModel = new eventosModel();

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
      this.evento = data.eventos;
      console.log(this.evento);
    }).catch((error)=>console.log(error));
  }

  enviarEvento(form: NgForm){
    this.app.postData(this.eventoNew).then((data:any)=>{
      this.evento = data;
      console.log(this.evento);
    }).catch((error)=>console.log(error));
  }
}
