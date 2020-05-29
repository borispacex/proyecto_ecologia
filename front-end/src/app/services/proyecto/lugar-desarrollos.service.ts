import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class LugarDesarrollosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // lugar_desarrollos, lugar_desarrollo, LugarDesarrollos, LugarDesarrollo, id_proyecto, IdProyecto

  // guardar una lugar_desarrollo
  save(lugar_desarrollo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'lugar_desarrollo', lugar_desarrollo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar lugar_desarrollo
  update(id_lugar_desarrollo: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'lugar_desarrollo/' + id_lugar_desarrollo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos
  getLugarDesarrollos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el lugar_desarrollo por id_lugar_desarrollo
  getLugarDesarrolloById(token: string, id_lugar_desarrollo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollo/' + id_lugar_desarrollo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los lugar_desarrollos by id_proyecto
  getLugarDesarrollosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'lugar_desarrollos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
