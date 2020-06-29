import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // autores, autor, autores, autor, id_publicacion, IdPublicacion

  // guardar una autor
  save(autor: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'autor', autor, options).toPromise()
      .then(res => res.json());
  }
  // actualizar autor
  update(id_autor: number, autor: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'autor/' + id_autor, autor, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los autores
  getAutores(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'autores', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el autor por id_autor
  getAutorById(id_autor: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'autor/' + id_autor, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los autores by id_publicacion
  getAutoresByIdPublicacion(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'autores-publi/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los autores by id_investigador
  getAutoresByIdInvestigador(id_investigador: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'autores-inv/' + id_investigador, options).toPromise()
      .then(res => res.json());
  }
  // borramos la autor
  deleteAutorByIdPublicacion(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + 'autores/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }
  // borramos la autor
  deleteAutor(id_autor: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + 'autor/' + id_autor, options).toPromise()
      .then(res => res.json());
  }
}
