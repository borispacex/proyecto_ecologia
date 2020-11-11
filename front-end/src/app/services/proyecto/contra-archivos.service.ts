import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ContraArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // contra_archivos, contra_archivo, ContraArchivos, ContraArchivo, id_contratado, IdContratado

  // guardar una contra_archivo
  save(contra_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'contra_archivo', contra_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar contra_archivo
  update(id_contra_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'contra_archivo/' + id_contra_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los contra_archivos
  getContraArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contra_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el contra_archivo por id_contra_archivo
  getContraArchivoById(token: string, id_contra_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contra_archivo/' + id_contra_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los contra_archivos by id_contratado
  getContraArchivosByIdContratado(id_contratado: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contra_archivos/' + id_contratado, options).toPromise()
    .then(res => res);
  }
  // contar todos los contra_archivos by id_contratado
  countContraArchivosByIdContratado(id_contratado: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countContraArchivosByIdContratado/' + id_contratado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los contra_archivos by id_contratado
  getContraArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contra_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los contra_archivos by id_contratado
  getContraArchivosByIdContratadoAndEstado(id_contratado: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'contra_archivosByIdContratadoAndEstado/' + id_contratado + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los contra_archivos by id_contratado
  countContraArchivosByIdContratadoAndEstado(id_contratado: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countContraArchivosByIdContratadoAndEstado/' + id_contratado + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
