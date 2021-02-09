import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { reporteSabatino } from "../../models/reporteSabatino";
import { ReporteSabatinoService } from "../../service/reporte-sabatino.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-vista-reportes',
  templateUrl: './vista-reportes.component.html',
  styleUrls: ['./vista-reportes.component.css']
})
export class VistaReportesComponent implements OnInit {

  reporte: any
  reporteNew: reporteSabatino = new reporteSabatino();
  idReporteActualizar: any
  constructor(private app: ReporteSabatinoService, private route: Router) { }

  ngOnInit(): void {
    this.app.getDataSI().then((data:any)=>{
      this.reporte = data.Reportes;
      console.log(this.reporte);
    }).catch((error)=>{
      if(error instanceof HttpErrorResponse){
        if( error.status === 401){
            this.route.navigate(['/login']);
      }
     }
  });
}

  modificar(){
    this.app.putData(this.idReporteActualizar, this.reporteNew).then((data:any)=>{
        this.reporte = data;
        console.log(this.reporte);
    }).catch((error)=>console.log(error));
  }

  idActualizar(id: string){
    this.idReporteActualizar = id; 
    console.log(this.idReporteActualizar);
  }

}
