import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventosService } from "../../service/eventos.service";
import { eventosModel } from 'src/app/models/eventos';
import { Router } from '@angular/router'

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {


  evento: any;
  eventoNew: eventosModel = new eventosModel();

  @Input() EventoPadre: any;
  @Input() Index: Number = 0;
  @Output() selectedEvento: EventEmitter<number>

  constructor(private route: Router, private app: EventosService) { 
    // this.Act.params.subscribe(params =>{
    //   console.log(params);
    //   this.evento = this.app.getDatabyId(params['id']);
    //   console.log(this.evento);
    // })
    this.selectedEvento = new EventEmitter();
  }

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
        this.evento = data.eventos
   }).catch((error)=>console.log(error))
  }

  Navegar(){
    this.route.navigate(['../evento-completo', this.Index]);
   }
}
