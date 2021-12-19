import { Injectable } from '@angular/core';

import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,Router} from '@angular/router';
import {AuthService} from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

constructor(private AuthService :AuthService,
  private router : Router) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean > | Promise<boolean> | UrlTree{

  let isloggedin = this.AuthService.isAuthontication();
  if(isloggedin){

    return true;
  }else{
    return this.router.navigate(['/login']);
  }
}
}
