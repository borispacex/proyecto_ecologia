import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ConvArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // conv_archivos, conv_archivo, ConvArchivos, ConvArchivo, id_convenio, IdConvenio

  // guardar una conv_archivo
  save(conv_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'conv_archivo', conv_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar conv_archivo
  update(id_conv_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'conv_archivo/' + id_conv_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los conv_archivos
  getConvArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'conv_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el conv_archivo por id_conv_archivo
  getConvArchivoById(token: string, id_conv_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'conv_archivo/' + id_conv_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los conv_archivos by id_convenio
  getConvArchivosByIdConvenio(id_convenio: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'conv_archivos/' + id_convenio, options).toPromise()
      .then(res => res.json());
  }
  // contar todos los conv_archivos by id_convenio
  countConvArchivosByIdConvenio(id_convenio: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countConvArchivosByIdConvenio/' + id_convenio, options).toPromise()
      .then(res => res.json());
  }

}
