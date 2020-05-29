import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // convenios, convenio, Convenios, Convenio, id_proyecto, IdProyecto

  // guardar una convenio
  save(convenio: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'convenio', convenio, options).toPromise()
      .then(res => res.json());
  }
  // actualizar convenio
  update(id_convenio: number, convenio: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'convenio/' + id_convenio, convenio, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los convenios
  getConvenios(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'convenios', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el convenio por id_convenio
  getConvenioById(id_convenio: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'convenio/' + id_convenio, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los convenios by id_proyecto
  getConveniosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'convenios/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
