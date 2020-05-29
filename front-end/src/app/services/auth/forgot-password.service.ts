import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private url: string;

  constructor(private _http: Http) { 
    this.url = GLOBAL.url;
  }
  forgotPassword(correo: string) {
    return this._http.post(this.url + 'forgotPassword', correo).toPromise()
    .then(res => res.json());
  }
  resetPassword(token: string) {
    return this._http.get(this.url + 'reset/' + token).toPromise()
    .then(res => res.json());
  }
  updatePasswordByEmail(usuario: any) {
    return this._http.put(this.url + 'updatePasswordViaEmail', usuario).toPromise()
    .then(res => res.json());
  }
}
