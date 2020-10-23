import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class FinanciamientosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // guardar una financiamiento
  save(financiamiento: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'financiamiento', financiamiento, options).toPromise()
    .then(res => res);
  }
  // actualizar financiamiento
  update(id_financiamiento: number,financiamiento: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'financiamiento/' + id_financiamiento, financiamiento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los financiamientos
  getFinanciamientos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'financiamientos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el financiamiento por id_financiamiento
  getFinanciamientoById(token: string, id_financiamiento: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'financiamiento/' + id_financiamiento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los financiamientos by id_proyecto
  getFinanciamientosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'financiamientos/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // borramos la financiamiento
  deleteFinanciamientosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'financiamientos/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // borramos la financiamiento
  deleteFinanciamiento(id_financiamiento: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'financiamiento/' + id_financiamiento, options).toPromise()
    .then(res => res);
  }

}
