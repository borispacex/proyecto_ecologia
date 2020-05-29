import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ExposicionesService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // exposiciones, exposicion, Exposiciones, Exposicion, id_proyecto, IdProyecto

  // guardar una exposicion
  save(exposicion: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'exposicion', exposicion, options).toPromise()
      .then(res => res.json());
  }
  // actualizar exposicion
  update(id_exposicion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'exposicion/' + id_exposicion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los exposiciones
  getExposiciones(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'exposiciones', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el exposicion por id_exposicion
  getExposicionById(token: string, id_exposicion: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'exposicion/' + id_exposicion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los exposiciones by id_proyecto
  getExposicionesByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'exposiciones/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
