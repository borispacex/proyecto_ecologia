import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class SeguimientosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar una seguimiento
  save(seguimiento: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'seguimiento', seguimiento, options).toPromise()
      .then(res => res.json());
  }
  // actualizar seguimiento
  update(id_seguimiento: number, seguimiento: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'seguimiento/' + id_seguimiento, seguimiento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los seguimientos
  getSeguimientos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'seguimientos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los seguimientos true
  getSeguimientosByEstado(estado: boolean, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'seguimientosByEstado/' + estado, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el seguimiento por id_seguimiento
  getSeguimientoById(id_seguimiento: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'seguimiento/' + id_seguimiento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los seguimientos by id_proyecto
  getSeguimientosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'seguimientos-proy/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los seguimientos by id_director
  getSeguimientosByIdDirector(id_director: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'seguimientos-dir/' + id_director, options).toPromise()
      .then(res => res.json());
  }
  // contamos todos los seguimientos by id_proyecto
  countSeguimientosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countSeguimientosByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
