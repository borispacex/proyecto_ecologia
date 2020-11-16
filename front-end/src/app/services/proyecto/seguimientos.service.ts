import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class SeguimientosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // guardar una seguimiento
  save(seguimiento: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'seguimiento', seguimiento, options).toPromise()
    .then(res => res);
  }
  // actualizar seguimiento
  update(id_seguimiento: number, seguimiento: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'seguimiento/' + id_seguimiento, seguimiento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los seguimientos
  getSeguimientos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimientos', options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los seguimientos true
  getSeguimientosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimientosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos el seguimiento por id_seguimiento
  getSeguimientoById(id_seguimiento: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimiento/' + id_seguimiento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los seguimientos by id_proyecto
  getSeguimientosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimientos-proy/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los seguimientos by id_director
  getSeguimientosByIdDirector(id_director: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimientos-dir/' + id_director, options).toPromise()
    .then(res => res);
  }
  // contamos todos los seguimientos by id_proyecto
  countSeguimientosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countSeguimientosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los seguimientos by id_director
  getSeguimientosByIdDirectorAndEstado(id_director: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimientosByIdDirectorAndEstado/' + id_director + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los seguimientos by id_proyecto
  getSeguimientosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'seguimientosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contamos todos los seguimientos by id_proyecto
  countSeguimientosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countSeguimientosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
