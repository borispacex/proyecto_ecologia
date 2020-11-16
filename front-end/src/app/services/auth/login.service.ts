import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL} from '../global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
   }

  login(usuario: any, getToken?: boolean) {
    if (getToken) {
      usuario.token = getToken;
    }
    let reqHeader = new HttpHeaders({
      'Content-Type': 'Application/json'
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'login', usuario, options).toPromise()
    .then(res => res);
  }
  // obtener id_rol, atravez de un usuario
  getRolByUsuario(id: number) {
    return this._httpClient.get<any>(this.url + 'getByUsuario/' + id).toPromise()
    .then(res => res);
  }
}
