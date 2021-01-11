import { Component, OnInit } from '@angular/core';
import { reporteSabatino } from "../../models/reporteSabatino";
import { ReporteSabatinoService } from "../../service/reporte-sabatino.service";

@Component({
  selector: 'app-vista-reportes',
  templateUrl: './vista-reportes.component.html',
  styleUrls: ['./vista-reportes.component.css']
})
export class VistaReportesComponent implements OnInit {

  reporte: any
  reporteNew: reporteSabatino = new reporteSabatino();
  idReporteActualizar: any
  constructor(private app: ReporteSabatinoService) { }

  ngOnInit(): void {
    this.app.getDataSI().then((data:any)=>{
      this.reporte = data.Reportes;
      console.log(this.reporte);
    }).catch((error)=>console.log(error));
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
