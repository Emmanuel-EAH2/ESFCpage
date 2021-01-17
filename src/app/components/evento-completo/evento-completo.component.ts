import { Component, OnInit } from '@angular/core';
import { EventosService } from "../../service/eventos.service";
import { eventosModel } from 'src/app/models/eventos';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-evento-completo',
  templateUrl: './evento-completo.component.html',
  styleUrls: ['./evento-completo.component.css']
})
export class EventoCompletoComponent implements OnInit {

  constructor(private Act: ActivatedRoute, private app: EventosService, private route: Router) { }
evento: any;
eventoNombre: any;
  ngOnInit(): void {
      this.Act.params.subscribe(params =>{
    this.app.getDatabyId(params['id']).then((data:any)=>{
      this.evento = data
      this.eventoNombre = data.nombre
      // console.log(data)
      console.log(this.evento);
    }).catch((error)=>console.log(error));
    });
  }
}
