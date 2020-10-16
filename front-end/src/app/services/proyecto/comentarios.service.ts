import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // comentarios, comentario, comentarios, comentario, id_publicacion, IdPublicacion

  // guardar una comentario
  save(comentario: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'comentario', comentario, options).toPromise()
      .then(res => res.json());
  }
  // actualizar comentario
  update(id_comentario: number, comentario: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'comentario/' + id_comentario, comentario, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los comentarios
  getComentarios(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'comentarios', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el comentario por id_comentario
  getComentarioById(id_comentario: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'comentario/' + id_comentario, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los comentarios by id_publicacion
  getcomentariosByIdPublicacion(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'comentarios-publi/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }
  // contar todos los comentarios by id_publicacion
  getCountByIdPublicacion(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countComentariosByIdPublicacion/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }

}
