import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class LugarDesarrollosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // lugar_desarrollos, lugar_desarrollo, LugarDesarrollos, LugarDesarrollo, id_proyecto, IdProyecto

  // guardar una lugar_desarrollo
  save(lugar_desarrollo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'lugar_desarrollo', lugar_desarrollo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar lugar_desarrollo
  update(id_lugar_desarrollo: number, lugar_desarrollo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'lugar_desarrollo/' + id_lugar_desarrollo, lugar_desarrollo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos
  getLugarDesarrollos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el lugar_desarrollo por id_lugar_desarrollo
  getLugarDesarrolloById(token: string, id_lugar_desarrollo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollo/' + id_lugar_desarrollo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos by id_proyecto
  getLugarDesarrollosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoDepartamentoAndProvincia(id_proyecto: number, departamento: string, provincia: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollosByIdProyectoDepartamentAndProvince/'+ id_proyecto + '/' + departamento + '/' + provincia, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoAndDepartamento(id_proyecto: number, departamento: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollosByIdProyectoAndDepartament/' + id_proyecto + '/' + departamento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoAndProvincia(id_proyecto: number, provincia: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollosByIdProyectoAndProvince/' + id_proyecto + '/' + provincia, options).toPromise()
      .then(res => res.json());
  }
  // contar todos los lugar_desarrollos by id_proyecto
  countLugarDesarrollosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countLugarDesarrollosByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
