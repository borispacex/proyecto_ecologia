import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate() {
    var roles = JSON.parse(this._auth.getAdmRoles());
    let estado = false;
    roles.forEach(rol => {
      if (this._auth.getIdentity() && rol.id_rol === 1) {
        estado = true;
      }
    });
    if (estado) {
      return true;
    } else {
      this._router.navigate(['/authentication/login']);
      return false;
    }
  }
}
