import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class NotaArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // nota_archivos, nota_archivo, NotaArchivos, NotaArchivo, id_nota_prensa, IdNotaPrensa

  // guardar una nota_archivo
  save(nota_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'nota_archivo', nota_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar nota_archivo
  update(id_nota_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'nota_archivo/' + id_nota_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los nota_archivos
  getNotaArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'nota_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el nota_archivo por id_nota_archivo
  getNotaArchivoById(token: string, id_nota_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'nota_archivo/' + id_nota_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los nota_archivos by id_nota_prensa
  getNotaArchivosByIdNotaPrensa(id_nota_prensa: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'nota_archivos/' + id_nota_prensa, options).toPromise()
      .then(res => res.json());
  }

}
