import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class NotaPrensasService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // nota_prensas, nota_prensa, NotaPrensas, NotaPrensa, id_proyecto, IdProyecto

  // guardar una nota_prensa
  save(nota_prensa: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'nota_prensa', nota_prensa, options).toPromise()
      .then(res => res.json());
  }
  // actualizar nota_prensa
  update(id_nota_prensa: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'nota_prensa/' + id_nota_prensa, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los nota_prensas
  getNotaPrensas(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'nota_prensas', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el nota_prensa por id_nota_prensa
  getNotaPrensaById(token: string, id_nota_prensa: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'nota_prensa/' + id_nota_prensa, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los nota_prensas by id_proyecto
  getNotaPrensasByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'nota_prensas/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
