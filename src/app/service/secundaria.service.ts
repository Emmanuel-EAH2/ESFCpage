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

  getUser(secu: string){
    return this.http.get(`http://localhost:3003/secundaria/${secu}`).toPromise();
  }

  getUserLogged(){
    const token = this.getToken();
  }

    
loggedIn(){
  return !!localStorage.getItem('token')
}

getToken(){
  return localStorage.getItem('token');
}
  
}
