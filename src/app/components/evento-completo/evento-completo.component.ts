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
eventoimg: any;
actividades: any;
coordiAux: any;
dia: any;
termina: any;
objetivos: any;
secundaria: any;
materiales: any;
coordiEncargado: any;
  ngOnInit(): void {
      this.Act.params.subscribe(params =>{
    this.app.getDatabyId(params['id']).then((data:any)=>{
      this.evento = data;
      this.eventoNombre = data.nombre;
      this.eventoimg = data.img;
      this.actividades = data.actividades;
      this.coordiAux = data.coordinadoresAux;
      this.dia = data.dia;
      this.termina = data.horaTermina;
      this.objetivos = data.objetivos;
      this.secundaria = data.secundaria['_id'];
      this.materiales = data.materiales; 
      this.coordiEncargado = data.secundaria['coordinador']     
      console.log(this.evento);
    }).catch((error)=>console.log(error));
    });
  }
}
