import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate, CanLoad {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private loginService: LoginService,
              private router: Router) {}
  canActivate(): boolean {
    return this.redireccionar();
  }
  canLoad(): boolean {
    return this.redireccionar();
  }
  redireccionar(): boolean {
    this.loginService.estaLogueado();
    if (this.loginService.islogin) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
