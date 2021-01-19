import { Component, OnInit } from '@angular/core';
import { EventosService } from "../../service/eventos.service";
import { eventosModel } from 'src/app/models/eventos';
import { NgForm } from '@angular/forms';
import { imagenModel } from "../../models/imagenEvent";

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget
}
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private app: EventosService) { }

  evento: any;
  eventoNew: eventosModel = new eventosModel();
  imagenNew: imagenModel = new imagenModel();
  file: File;
  photoSelected: string | ArrayBuffer;
  image: any

  ngOnInit(): void {
    this.app.getData().then((data:any)=>{
      this.evento = data.eventos;
      console.log(this.evento);
    }).catch((error)=>console.log(error));

    // this.app.getDataImg().then((data:any)=>{
    //   this.image = data.eventos;
    //   console.log(this.image);
    // }).catch((error)=>console.log(error));
  }

  enviarEvento(form: NgForm){
    this.app.postData(this.eventoNew).then((data:any)=>{
      this.evento = data;
      console.log(this.evento);
    }).catch((error)=>console.log(error));
  }

  // subirImagen(formImg: NgForm){
  //   this.app.postImage(this.imagenNew).then((data:any)=>{
  //     this.image = data;
  //     console.log(this.image);
  //   }).catch((error)=>console.log(error));
  // }

  onPhotoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
}
