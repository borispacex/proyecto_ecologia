import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class InvProyectosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar inv_proyecto
  saveInv_proyecto(inv_proyecto: any, token: string) {
    console.log('hola desde el servicio', inv_proyecto);
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'inv_proyecto', inv_proyecto, options).toPromise()
    .then(res => res.json());
  }
  // actualizar inv_proyecto
  updateInv_proyecto(id: number, inv_proyecto: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'inv_proyecto/' + id, inv_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // se obtiene todos las inv_proyectos
  getInv_proyectos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'inv_proyectos', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las inv_proyectos, mediante el id_proyecto
  getInv_proyectosByIdProyecto(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'inv_proyectosByIdProyecto/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el inv_proyecto, mediante el id_investigador
  getInv_proyectosByIdInvestigador(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'inv_proyectosByIdInvestigador/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el inv_proyecto, mediante el id_inv_proyecto
  getInv_proyecto(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'inv_proyecto/' + id, options).toPromise()
    .then(res => res.json());
  }
}
