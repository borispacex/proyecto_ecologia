import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PubliArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // publi_archivos, publi_archivo, PubliArchivos, PubliArchivo, id_publicacion, IdPublicacion

  // guardar una publi_archivo
  save(publi_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'publi_archivo', publi_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar publi_archivo
  update(id_publi_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'publi_archivo/' + id_publi_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los publi_archivos
  getPubliArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publi_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el publi_archivo por id_publi_archivo
  getPubliArchivoById(token: string, id_publi_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publi_archivo/' + id_publi_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los publi_archivos by id_publicacion
  getPubliArchivosByIdPublicacion(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'publi_archivos/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }
  // contador todos los publi_archivos by id_publicacion
  countPubliArchivosByIdPublicacion(id_publicacion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countPubliArchivosByIdPublicacion/' + id_publicacion, options).toPromise()
      .then(res => res.json());
  }

}
