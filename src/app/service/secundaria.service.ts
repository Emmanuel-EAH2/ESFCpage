import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { secuModel } from "../models/secundaria";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SecundariaService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  login(secu: secuModel){
    return this.http.post('http://localhost:3003/secundariaLogin', secu).toPromise();
  }

  register(secu: secuModel){
    return this.http.post('http://localhost:3003/secundariaRegister', secu).toPromise();
  }

  setToken(token: string){
    this.cookie.set("token", token);
  }
  
  getToken(){
    return this.cookie.get("token");
  }

  getUser(id: any){
    return this.http.get(`http://localhost:3003/secundaria/${id}`).toPromise();
  }

  getUserLogged(){
    const token = this.getToken();
  }
}
