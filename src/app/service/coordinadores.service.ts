import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { coordinadorModel } from "../models/coordinadores";

@Injectable({
  providedIn: 'root'
})
export class CoordinadoresService {

  constructor(private http: HttpClient) { }
  getData(){
  return this.http.get(`http://localhost:3003/coordinadores`).toPromise();
  }
  Login(coordi: coordinadorModel){
    return this.http.post(`http://localhost:3003/login`, coordi).toPromise();
  }
  postCoordi(coordi: coordinadorModel){
    return this.http.post('http://localhost:3003/coordinadores', coordi).toPromise();
  }
}
