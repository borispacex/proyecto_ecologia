import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ExposicionesService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // exposiciones, exposicion, Exposiciones, Exposicion, id_proyecto, IdProyecto

  // guardar una exposicion
  save(exposicion: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'exposicion', exposicion, options).toPromise()
    .then(res => res);
  }
  // actualizar exposicion
  update(id_exposicion: number, exposicion: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'exposicion/' + id_exposicion, exposicion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los exposiciones
  getExposiciones(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'exposiciones', options).toPromise()
    .then(res => res);
  }
  // obtenemos el exposicion por id_exposicion
  getExposicionById(token: string, id_exposicion: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'exposicion/' + id_exposicion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los exposiciones by id_proyecto
  getExposicionesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'exposiciones/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar todos los exposiciones by id_proyecto
  countExposicionesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countExposicionesByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los exposiciones by estado
  getExposicionesByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'exposicionesByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los exposiciones by id_proyecto
  getExposicionesByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'exposicionesByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los exposiciones by id_proyecto
  countExposicionesByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countExposicionesByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }


}
