import { EventEmitter, Injectable, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(public router : Router){

  }
  canActivate(): any {
    let adminvalue = sessionStorage.getItem('token')
    let uservalue = sessionStorage.getItem('token')
    if(adminvalue == 'admin'){
      this.getLoggedInName.emit(adminvalue);
      return true;
    }
    else if(uservalue !== null){
      this.getLoggedInName.emit(uservalue);
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
