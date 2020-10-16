import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class FinanciamientosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar una financiamiento
  save(financiamiento: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'financiamiento', financiamiento, options).toPromise()
      .then(res => res.json());
  }
  // actualizar financiamiento
  update(id_financiamiento: number,financiamiento: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'financiamiento/' + id_financiamiento, financiamiento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los financiamientos
  getFinanciamientos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'financiamientos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el financiamiento por id_financiamiento
  getFinanciamientoById(token: string, id_financiamiento: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'financiamiento/' + id_financiamiento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los financiamientos by id_proyecto
  getFinanciamientosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'financiamientos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // borramos la financiamiento
  deleteFinanciamientosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + 'financiamientos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // borramos la financiamiento
  deleteFinanciamiento(id_financiamiento: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + 'financiamiento/' + id_financiamiento, options).toPromise()
      .then(res => res.json());
  }

}
