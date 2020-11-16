import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  forgotPassword(correo: string) {
    return this._httpClient.post<any>(this.url + 'forgotPassword', correo).toPromise()
    .then(res => res);
  }
  resetPassword(token: string) {
    return this._httpClient.get<any>(this.url + 'reset/' + token).toPromise()
    .then(res => res);
  }
  updatePasswordByEmail(usuario: any) {
    return this._httpClient.put<any>(this.url + 'updatePasswordViaEmail', usuario).toPromise()
    .then(res => res);
  }
}
