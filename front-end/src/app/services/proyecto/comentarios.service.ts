import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // comentarios, comentario, comentarios, comentario, id_publicacion, IdPublicacion

  // guardar una comentario
  save(comentario: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'comentario', comentario, options).toPromise()
    .then(res => res);
  }
  // actualizar comentario
  update(id_comentario: number, comentario: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'comentario/' + id_comentario, comentario, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los comentarios
  getComentarios(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'comentarios', options).toPromise()
    .then(res => res);
  }
  // obtenemos el comentario por id_comentario
  getComentarioById(id_comentario: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'comentario/' + id_comentario, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los comentarios by id_publicacion
  getcomentariosByIdPublicacion(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'comentarios-publi/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // contar todos los comentarios by id_publicacion
  getCountByIdPublicacion(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countComentariosByIdPublicacion/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los comentarios by id_publicacion
  getComentariosByIdPublicacionAndEstado(id_publicacion: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'comentariosByIdPublicacionAndEstado/' + id_publicacion + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los comentarios by id_publicacion
  getCountByIdPublicacionAndEstado(id_publicacion: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countComentariosByIdPublicacionAndEstado/' + id_publicacion + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los comentarios by id_publicacion
  getComentariosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'comentariosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }

}
