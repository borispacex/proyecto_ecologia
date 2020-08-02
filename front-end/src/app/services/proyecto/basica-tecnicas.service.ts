import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class BasicaTecnicasService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // basica_tecnicas, basica_tecnica, BasicaTecnicas, BasicaTecnica, id_proyecto, IdProyecto

  // guardar una basica_tecnica
  save(basica_tecnica: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'basica_tecnica', basica_tecnica, options).toPromise()
      .then(res => res.json());
  }
  // actualizar basica_tecnica
  update(id_basica_tecnica: number, basica_tecnica, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'basica_tecnica/' + id_basica_tecnica, basica_tecnica, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los basica_tecnicas
  getBasicaTecnicas(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'basica_tecnicas', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el basica_tecnica por id_basica_tecnica
  getBasicaTecnicaById(token: string, id_basica_tecnica: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'basica_tecnica/' + id_basica_tecnica, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los basica_tecnicas by id_proyecto
  getBasicaTecnicasByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'basica_tecnicas/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los basica_tecnicas by id_proyecto
  countBasicaTecnicasByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countBasicaTecnicasByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
}
