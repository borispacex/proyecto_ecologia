import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // autores, autor, autores, autor, id_publicacion, IdPublicacion

  // guardar una autor
  save(autor: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'autor', autor, options).toPromise()
    .then(res => res);
  }
  // actualizar autor
  update(id_autor: number, autor: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'autor/' + id_autor, autor, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los autores
  getAutores(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'autores', options).toPromise()
    .then(res => res);
  }
  // obtenemos el autor por id_autor
  getAutorById(id_autor: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'autor/' + id_autor, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los autores by id_publicacion
  getAutoresByIdPublicacion(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'autores-publi/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los autores by id_investigador
  getAutoresByIdInvestigador(id_investigador: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'autores-inv/' + id_investigador, options).toPromise()
    .then(res => res);
  }
  // borramos la autor
  deleteAutorByIdPublicacion(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'autores/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // borramos la autor
  deleteAutor(id_autor: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'autor/' + id_autor, options).toPromise()
    .then(res => res);
  }
}
