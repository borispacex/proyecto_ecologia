import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class EventoArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // evento_archivos, evento_archivo, EventoArchivos, EventoArchivo, id_evento, IdEvento

  // guardar una evento_archivo
  save(evento_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'evento_archivo', evento_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar evento_archivo
  update(id_evento_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'evento_archivo/' + id_evento_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los evento_archivos
  getEventoArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'evento_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el evento_archivo por id_evento_archivo
  getEventoArchivoById(token: string, id_evento_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'evento_archivo/' + id_evento_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los evento_archivos by id_evento
  getEventoArchivosByIdEvento(id_evento: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'evento_archivos/' + id_evento, options).toPromise()
      .then(res => res.json());
  }

}
