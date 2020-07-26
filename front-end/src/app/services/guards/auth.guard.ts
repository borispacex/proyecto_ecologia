import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate() {
    let estado = false;
    if (this._auth.getIdentity()) {
      estado = true;
    }
    if (estado) {
      return true;
    } else {
      this._router.navigate(['/authentication/login']);
      return false;
    }
  }
  
}
