import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class SeguiArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

    // segui_archivos, segui_archivo, SeguiArchivos, SeguiArchivo, id_seguimiento, IdSeguimiento


  save(segui_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'segui_archivo', segui_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar segui_archivo
  update(id_segui_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'segui_archivo/' + id_segui_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los segui_archivos
  getSeguiArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'segui_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los segui_archivos when true
  getSeguiArchivosTrue(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'segui_archivos-true', options).toPromise()
    .then(res => res);
  }
  // obtenemos el segui_archivo por id_segui_archivo
  getSeguiArchivoById(id_segui_archivo: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'segui_archivo/' + id_segui_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los segui_archivos by id_seguimiento
  getSeguiArchivosByIdSeguimiento(id_seguimiento: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'segui_archivos/' + id_seguimiento, options).toPromise()
    .then(res => res);
  }
  // contador todos los segui_archivos by id_seguimiento
  countSeguiArchivosByIdSeguimiento(id_seguimiento: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countSeguiArchivosByIdSeguimiento/' + id_seguimiento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los segui_archivos by id_seguimiento y estado
  getSeguiArchivosByIdSeguimientoAndEstado(id_seguimiento: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'segui_archivosByIdSeguimientoAndEstado/' + id_seguimiento + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contador todos los segui_archivos by id_seguimiento y estado
  countSeguiArchivosByIdSeguimientoAndEstado(id_seguimiento: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countSeguiArchivosByIdSeguimientoAndEstado/' + id_seguimiento + '/' + estado, options).toPromise()
    .then(res => res);
  }
  
}
