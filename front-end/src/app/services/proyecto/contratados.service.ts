import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ContratadosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // contratados, contratado, Contratados, Contratado, id_proyecto, IdProyecto

  // guardar una contratado
  save(contratado: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'contratado', contratado, options).toPromise()
      .then(res => res.json());
  }
  // actualizar contratado
  update(id_contratado: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'contratado/' + id_contratado, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los contratados
  getContratados(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'contratados', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el contratado por id_contratado
  getContratadoById(id_contratado: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'contratado/' + id_contratado, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los contratados by id_proyecto
  getContratadosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'contratados/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // contar contratados by id_proyecto
  countContratadosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countContratadosByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
