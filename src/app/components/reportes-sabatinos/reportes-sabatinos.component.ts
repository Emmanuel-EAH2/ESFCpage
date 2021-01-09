import { Component, OnInit } from '@angular/core';
import { ReporteSabatinoService } from '../../service/reporte-sabatino.service';
import { AlumnosService } from '../../service/alumnos.service';
import { reporteSabatino } from "../../models/reporteSabatino";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reportes-sabatinos',
  templateUrl: './reportes-sabatinos.component.html',
  styleUrls: ['./reportes-sabatinos.component.css']
})
export class ReportesSabatinosComponent implements OnInit {
  reporte: any;
  reporteNew: reporteSabatino = new reporteSabatino();
  alumnos: any;
  constructor(private app: ReporteSabatinoService, private appAlum: AlumnosService) { }

  ngOnInit(): void {
    // this.app.getData().then((data:any)=>{
    //   this.reporte = data;
    //   console.log(this.reporte);
    // }).catch((error)=>console.log(error));

    this.app.getDataSI().then((data:any)=>{
        this.reporte = data;
        console.log(this.reporte);
      }).catch((error)=>console.log(error));
  }

  enviarReporte(form: NgForm){
    this.app.postData(this.reporteNew).then((data:any)=>{
      this.reporteNew = data
      console.log(this.reporteNew);
    }).catch((error)=>console.log(error));

  }
}
