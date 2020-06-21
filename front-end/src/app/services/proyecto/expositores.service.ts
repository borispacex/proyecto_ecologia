import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ExpositoresService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar una expositor
  save(expositor: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'expositor', expositor, options).toPromise()
      .then(res => res.json());
  }
  // actualizar expositor
  update(id_expositor: number, expositores: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'expositor/' + id_expositor, expositores, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los expositores
  getExpositores(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'expositores', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el expositor por id_expositor
  getExpositorById(token: string, id_expositor: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'expositor/' + id_expositor, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los expositores by id_curso
  getExpositoresByIdCurso(id_curso: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'expositores/' + id_curso, options).toPromise()
      .then(res => res.json());
  }

}
