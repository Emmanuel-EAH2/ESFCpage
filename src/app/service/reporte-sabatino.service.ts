import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { reporteSabatino } from "../models/reporteSabatino";

@Injectable({
  providedIn: 'root'
})
export class ReporteSabatinoService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3003/reportes').toPromise();
  }

  getDataSI(){
    return this.http.get('http://localhost:3003/reportesSantaInes').toPromise();
  }

  postData(reporte: reporteSabatino){
   return this.http.post('http://localhost:3003/reportes', reporte).toPromise();
  }

  putData(id: string, reporte: reporteSabatino){
    return this.http.put(`http://localhost:3003/reportes/${id}`, reporte).toPromise();
  }
}
