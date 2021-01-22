import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { imagenModel } from "../../models/imagenEvent";
import { EventosService } from "../../service/eventos.service";
import { AlumnosService } from "../../service/alumnos.service";
import { ProfesService } from "../../service/profes.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  imagenNew: imagenModel = new imagenModel();
  image: any;
  constructor(private appNO: EventosService, private route: ActivatedRoute, private app: AlumnosService, private appPro: ProfesService) { }
  ResulatdosAlum: any = [];
  ResulatdosEvent: any = [];
  ResulatdosProfes: any = [];
  strBusqueda: string = '';
  alumnos : any = [];

  ngOnInit(): void {
    this.searchAlum();
    this.searchEvent();
    this.searchProfe();
  }

  searchAlum(){
    this.route.params.subscribe(params =>{
      this.strBusqueda = params['termino'];
      this.ResulatdosAlum = this.app.search(params['termino']);
      console.log(this.ResulatdosAlum);
    });
  }

  searchEvent(){
    this.route.params.subscribe(params =>{
      this.strBusqueda = params['termino'];
      this.ResulatdosEvent = this.appNO.search(params['termino']);
      console.log(this.ResulatdosEvent);
    });
  }

  searchProfe(){
    this.route.params.subscribe(params =>{
      this.strBusqueda = params['termino'];
      this.ResulatdosProfes = this.appPro.search(params['termino']);
      console.log(this.ResulatdosProfes);
    });
  }



  // subirImagen(formImg: NgForm){
  //   this.app.postImage(this.imagenNew).then((data:any)=>{
  //     this.image = data;
  //     console.log(this.image);
  //   }).catch((error)=>console.log(error));
  // }

}
