import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SecundariaService } from "./service/secundaria.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private app: SecundariaService, private route: Router){ }

  canActivate(): boolean{
    if(this.app.loggedIn()){
      return true
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }
  
}
