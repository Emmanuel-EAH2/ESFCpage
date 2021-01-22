import { Injectable } from '@angular/core';
import { repreModel } from "../models/repres";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private http: HttpClient) { }
getData(){
  return this.http.get('http://localhost:3003/repres').toPromise();
}

postData(repreNew: repreModel){
 return this.http.post('http://localhost:3003/repres', repreNew).toPromise();
 }

}
