import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // publicaciones, publicacion, publicaciones, publicacion, id_proyecto, IdProyecto

  // guardar una publicacion
  save(publicacion: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'publicacion', publicacion, options).toPromise()
      .then(res => res.json());
  }
  // actualizar publicacion
  update(id_publicacion: number, publicacion: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'publicacion/' + id_publicacion, publicacion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los publicaciones
  getPublicaciones(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publicaciones', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el publicacion por id_publicacion
  getPublicacionById(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publicacion/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los publicaciones by id_proyecto
  getPublicacionesByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publicaciones-proy/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los publicaciones by id_coordinador
  getPublicacionesByIdCoordinador(id_coordinador: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publicaciones-inv/' + id_coordinador, options).toPromise()
      .then(res => res.json());
  }
  // contamos todos los publicaciones by id_proyecto
  countPublicacionesByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countPublicacionesByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
