import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class SeguiArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

    // segui_archivos, segui_archivo, SeguiArchivos, SeguiArchivo, id_seguimiento, IdSeguimiento


  save(segui_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'segui_archivo', segui_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar segui_archivo
  update(id_segui_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'segui_archivo/' + id_segui_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los segui_archivos
  getSeguiArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'segui_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los segui_archivos when true
  getSeguiArchivosTrue(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'segui_archivos-true', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el segui_archivo por id_segui_archivo
  getSeguiArchivoById(id_segui_archivo: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'segui_archivo/' + id_segui_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los segui_archivos by id_seguimiento
  getSeguiArchivosByIdSeguimiento(id_seguimiento: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'segui_archivos/' + id_seguimiento, options).toPromise()
      .then(res => res.json());
  }
  // contador todos los segui_archivos by id_seguimiento
  countSeguiArchivosByIdSeguimiento(id_seguimiento: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countSeguiArchivosByIdSeguimiento/' + id_seguimiento, options).toPromise()
      .then(res => res.json());
  }
  
}