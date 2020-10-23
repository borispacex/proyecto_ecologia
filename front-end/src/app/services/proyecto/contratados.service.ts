import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ContratadosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // contratados, contratado, Contratados, Contratado, id_proyecto, IdProyecto

  // guardar una contratado
  save(contratado: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'contratado', contratado, options).toPromise()
    .then(res => res);
  }
  // actualizar contratado
  update(id_contratado: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'contratado/' + id_contratado, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los contratados
  getContratados(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contratados', options).toPromise()
    .then(res => res);
  }
  // obtenemos el contratado por id_contratado
  getContratadoById(id_contratado: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contratado/' + id_contratado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los contratados by id_proyecto
  getContratadosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contratados/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar contratados by id_proyecto
  countContratadosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countContratadosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
