import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ContraArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // contra_archivos, contra_archivo, ContraArchivos, ContraArchivo, id_contratado, IdContratado

  // guardar una contra_archivo
  save(contra_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'contra_archivo', contra_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar contra_archivo
  update(id_contra_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'contra_archivo/' + id_contra_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los contra_archivos
  getContraArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'contra_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el contra_archivo por id_contra_archivo
  getContraArchivoById(token: string, id_contra_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'contra_archivo/' + id_contra_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los contra_archivos by id_contratado
  getContraArchivosByIdContratado(id_contratado: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'contra_archivos/' + id_contratado, options).toPromise()
      .then(res => res.json());
  }

}
