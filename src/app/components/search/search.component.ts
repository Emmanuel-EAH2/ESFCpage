import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { imagenModel } from "../../models/imagenEvent";
import { EventosService } from "../../service/eventos.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  imagenNew: imagenModel = new imagenModel();
  image: any;
  constructor(private app: EventosService) { }

  ngOnInit(): void {
  }
  subirImagen(formImg: NgForm){
    this.app.postImage(this.imagenNew).then((data:any)=>{
      this.image = data;
      console.log(this.image);
    }).catch((error)=>console.log(error));
  }

}
