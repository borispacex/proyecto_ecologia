import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // eventos, evento, Eventos, Evento, id_proyecto, IdProyecto

  // guardar una evento
  save(evento: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'evento', evento, options).toPromise()
    .then(res => res);
  }
  // actualizar evento
  update(id_evento: number, evento: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'evento/' + id_evento, evento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los eventos
  getEventos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'eventos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el evento por id_evento
  getEventoById(token: string, id_evento: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'evento/' + id_evento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los eventos by id_proyecto
  getEventosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'eventos/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar todos los eventos by id_proyecto
  countEventosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countEventosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
