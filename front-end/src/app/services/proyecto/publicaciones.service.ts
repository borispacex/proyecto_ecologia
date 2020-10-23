import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // publicaciones, publicacion, publicaciones, publicacion, id_proyecto, IdProyecto

  // guardar una publicacion
  save(publicacion: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'publicacion', publicacion, options).toPromise()
    .then(res => res);
  }
  // actualizar publicacion
  update(id_publicacion: number, publicacion: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'publicacion/' + id_publicacion, publicacion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publicaciones
  getPublicaciones(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publicaciones', options).toPromise()
    .then(res => res);
  }
  // obtenemos el publicacion por id_publicacion
  getPublicacionById(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publicacion/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publicaciones by id_proyecto
  getPublicacionesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publicaciones-proy/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publicaciones by id_coordinador
  getPublicacionesByIdCoordinador(id_coordinador: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publicaciones-inv/' + id_coordinador, options).toPromise()
    .then(res => res);
  }
  // contamos todos los publicaciones by id_proyecto
  countPublicacionesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPublicacionesByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
