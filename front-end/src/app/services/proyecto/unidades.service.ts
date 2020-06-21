import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar una unidad
  save(unidad: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'unidad', unidad, options).toPromise()
      .then(res => res.json());
  }
  // actualizar unidad
  update(id_unidad: number,unidad: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'unidad/' + id_unidad, unidad, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los unidades
  getUnidades(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'unidades', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el unidad por id_unidad
  getUnidadById(token: string, id_unidad: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'unidad/' + id_unidad, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los unidades by id_basica_tecnica
  getUnidadesByIdBasicaTecnica(id_basica_tecnica: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'unidades/' + id_basica_tecnica, options).toPromise()
      .then(res => res.json());
  }
  // borramos la unidad
  deleteUnidad(id_unidad: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'unidades/' + id_unidad, options).toPromise()
      .then(res => res.json());
  }

}
