import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ExpoArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // expo_archivos, expo_archivo, ExpoArchivos, ExpoArchivo, id_exposicion, IdExposicion

  // guardar una expo_archivo
  save(expo_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'expo_archivo', expo_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar expo_archivo
  update(id_expo_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'expo_archivo/' + id_expo_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los expo_archivos
  getExpoArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'expo_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el expo_archivo por id_expo_archivo
  getExpoArchivoById(token: string, id_expo_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'expo_archivo/' + id_expo_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los expo_archivos by id_exposicion
  getExpoArchivosByIdExposicion(id_exposicion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'expo_archivos/' + id_exposicion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los expo_archivos by id_exposicion
  countExpoArchivosByIdExposicion(id_exposicion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countExpoArchivosByIdExposicion/' + id_exposicion, options).toPromise()
    .then(res => res);
  }
  
}
