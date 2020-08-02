import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // eventos, evento, Eventos, Evento, id_proyecto, IdProyecto

  // guardar una evento
  save(evento: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'evento', evento, options).toPromise()
      .then(res => res.json());
  }
  // actualizar evento
  update(id_evento: number, evento: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'evento/' + id_evento, evento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los eventos
  getEventos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'eventos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el evento por id_evento
  getEventoById(token: string, id_evento: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'evento/' + id_evento, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los eventos by id_proyecto
  getEventosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'eventos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }
  // contar todos los eventos by id_proyecto
  countEventosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countEventosByIdProyecto/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
