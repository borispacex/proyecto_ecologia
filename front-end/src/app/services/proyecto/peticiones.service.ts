import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar una peticion
  save(peticion: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'peticion', peticion, options).toPromise()
      .then(res => res.json());
  }
  // actualizar peticion
  update(id_peticion: number, peticion: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'peticion/' + id_peticion, peticion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peticiones
  getPeticiones(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peticiones', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peticiones true
  getPeticionesByEstado(estado: boolean, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peticionesByEstado/' + estado, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el peticion por id_peticion
  getPeticionById(id_peticion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peticion/' + id_peticion, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peticiones by id_proyecto
  getPeticionesByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peticiones-proy/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
    // obtenemos todos los peticiones by id_proyecto
  getPeticionesByIdProyectoAndIdInvestigador(id_proyecto: number, id_investigador,token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peticiones-proy-inv/' + id_proyecto + '/' + id_investigador, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peticiones by id_investigador
  getPeticionesByIdInvestigador(id_investigador: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peticiones-inv/' + id_investigador, options).toPromise()
      .then(res => res.json());
  }
  // contamos todos los peticiones by id_proyecto
  countPeticionesByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countPeticionesByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
