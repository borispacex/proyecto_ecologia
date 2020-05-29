import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ExpoArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // expo_archivos, expo_archivo, ExpoArchivos, ExpoArchivo, id_exposicion, IdExposicion

  // guardar una expo_archivo
  save(expo_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'expo_archivo', expo_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar expo_archivo
  update(id_expo_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'expo_archivo/' + id_expo_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los expo_archivos
  getExpoArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'expo_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el expo_archivo por id_expo_archivo
  getExpoArchivoById(token: string, id_expo_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'expo_archivo/' + id_expo_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los expo_archivos by id_exposicion
  getExpoArchivosByIdExposicion(id_exposicion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'expo_archivos/' + id_exposicion, options).toPromise()
      .then(res => res.json());
  }

}
