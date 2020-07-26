import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar proyecto
  saveproyecto(proyecto: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'proyecto', proyecto, options).toPromise()
    .then(res => res.json());
  }
  // actualizar proyecto
  updateproyecto(id: number, proyecto: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'proyecto/' + id, proyecto, options).toPromise()
      .then(res => res.json());
  }
  // se obtiene todos las proyectos
  getProyectos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyectos', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las proyectos por estado: proyecto, activo, inactivo, pendiente, cerrado
  getProyectosByEstado(estado: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyectosByEstado/' + estado, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las proyectos. mediante el id_persona_adm
  getProyectosByIdPersonaAdm(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyectosByIdPersonaAdm/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el proyecto, mediante el id_coordinador
  getProyectosByIdCoordinador(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyectosByIdCoordinador/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el proyecto, mediante el id_proyecto
  getProyecto(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyecto/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene los proyectos, mediante el id_coordinador y estado
  getProyectosByIdCoordinadorAndEstado(id: number, status: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyectosByIdCoordinadorAndStatus/' + id + '/' + status, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el proyecto por el id_proyecto, y estado
  getProyectoByIdAndStatus(id: number, status: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proyectoByIdAndStatus/' + id + '/' + status, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene los proyectos entre fechas
  getProyectosBetweenDates(fechaini: string, fechafin: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'getAllBetweenDates/' + fechaini + '/' + fechafin, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene los proyectos entre fechas
  getProyectosBetweenDatesAndStatus(fechaini: string, fechafin: string, estado: string, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'getAllBetweenDatesAndStatus/' + fechaini + '/' + fechafin + '/' + estado, options).toPromise()
    .then(res => res.json());
  }

}
