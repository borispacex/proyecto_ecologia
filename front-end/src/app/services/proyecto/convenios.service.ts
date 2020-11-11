import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // convenios, convenio, Convenios, Convenio, id_proyecto, IdProyecto

  // guardar una convenio
  save(convenio: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'convenio', convenio, options).toPromise()
    .then(res => res);
  }
  // actualizar convenio
  update(id_convenio: number, convenio: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'convenio/' + id_convenio, convenio, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los convenios
  getConvenios(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'convenios', options).toPromise()
    .then(res => res);
  }
  // obtenemos el convenio por id_convenio
  getConvenioById(id_convenio: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'convenio/' + id_convenio, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los convenios by id_proyecto
  getConveniosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'convenios/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar todos los convenios by id_proyecto
  countConveniosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countConveniosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los convenios by estado
  getConveniosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conveniosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los convenios by id_proyecto y estado
  getConveniosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conveniosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los convenios by id_proyecto y estado
  countConveniosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countConveniosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
