import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PubliArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // publi_archivos, publi_archivo, PubliArchivos, PubliArchivo, id_publicacion, IdPublicacion

  // guardar una publi_archivo
  save(publi_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'publi_archivo', publi_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar publi_archivo
  update(id_publi_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'publi_archivo/' + id_publi_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publi_archivos
  getPubliArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publi_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el publi_archivo por id_publi_archivo
  getPubliArchivoById(token: string, id_publi_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publi_archivo/' + id_publi_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publi_archivos by id_publicacion
  getPubliArchivosByIdPublicacion(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publi_archivos/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // contador todos los publi_archivos by id_publicacion
  countPubliArchivosByIdPublicacion(id_publicacion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPubliArchivosByIdPublicacion/' + id_publicacion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publi_archivos by estado
  getPubliArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publi_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los publi_archivos by id_publicacion
  getPubliArchivosByIdPublicacionAndEstado(id_publicacion: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'publi_archivosByIdPublicacionAndEstado/' + id_publicacion + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contador todos los publi_archivos by id_publicacion
  countPubliArchivosByIdPublicacionAndEstado(id_publicacion: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPubliArchivosByIdPublicacionAndEstado/' + id_publicacion + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
