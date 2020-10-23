import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // guardar una unidad
  save(unidad: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'unidad', unidad, options).toPromise()
    .then(res => res);
  }
  // actualizar unidad
  update(id_unidad: number,unidad: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'unidad/' + id_unidad, unidad, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los unidades
  getUnidades(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'unidades', options).toPromise()
    .then(res => res);
  }
  // obtenemos el unidad por id_unidad
  getUnidadById(token: string, id_unidad: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'unidad/' + id_unidad, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los unidades by id_proyecto
  getUnidadesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'unidades/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // borramos la unidad
  deleteUnidadesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'unidades/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // borramos la unidad
  deleteUnidad(id_unidad: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'unidad/' + id_unidad, options).toPromise()
    .then(res => res);
  }

}
