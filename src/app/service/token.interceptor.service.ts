import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { SecundariaService } from "../service/secundaria.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injet: Injector) { }

  intercept(req, next){
    let auth = this.injet.get(SecundariaService)
    let tokenReq = req.clone({   
      setHeaders: {
      Authorization: `Bearer ${auth.getToken()}` 
      }
    });
    return next.handle(tokenReq)
  }

}
