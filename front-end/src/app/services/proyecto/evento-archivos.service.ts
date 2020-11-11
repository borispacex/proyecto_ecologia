import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class EventoArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // evento_archivos, evento_archivo, EventoArchivos, EventoArchivo, id_evento, IdEvento

  // guardar una evento_archivo
  save(evento_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'evento_archivo', evento_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar evento_archivo
  update(id_evento_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'evento_archivo/' + id_evento_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los evento_archivos
  getEventoArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'evento_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el evento_archivo por id_evento_archivo
  getEventoArchivoById(token: string, id_evento_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'evento_archivo/' + id_evento_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los evento_archivos by id_evento
  getEventoArchivosByIdEvento(id_evento: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'evento_archivos/' + id_evento, options).toPromise()
    .then(res => res);
  }
  // contar todos los evento_archivos by id_evento
  countEventoArchivosByIdEvento(id_evento: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countEventoArchivosByIdEvento/' + id_evento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los evento_archivos by estado
  getEventoArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'evento_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los evento_archivos by id_evento
  getEventoArchivosByIdEventoAndEstado(id_evento: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'evento_archivosByIdEventoAndEstado/' + id_evento + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los evento_archivos by id_evento
  countEventoArchivosByIdEventoAndEstado(id_evento: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countEventoArchivosByIdEventoAndEstado/' + id_evento + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
