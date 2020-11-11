import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProyArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  // guardar proy_archivo
  saveProy_archivo(proy_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'proy_archivo', proy_archivo, options).toPromise()
    .then(res => res.json());
  }
  // actualizar proy_archivo
  updateProy_archivo(id: number, proy_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'proy_archivo/' + id, proy_archivo, options).toPromise()
      .then(res => res.json());
  }
  // se obtiene todos las proy_archivos
  getProy_archivos(token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proy_archivos', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las proy_archivos. mediante el id_proyecto
  getProy_archivosByIdProyecto(id: number, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proy_archivosByIdProyecto/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el proy_archivo, mediante el id_archivo
  getProy_archivosByIdTipo(id_proyecto:number, id_tipo: number, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proy_archivosByIdTipo/' + id_proyecto + '/' + id_tipo, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el proy_archivo, mediante el id_proy_archivo
  getProyArchivoById(id: number, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proy_archivo/' + id, options).toPromise()
    .then(res => res.json());
  }
  // contar todos las proy_archivos. mediante el id_proyecto
  countProy_archivosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countProyArchivosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las proy_archivos. mediante el id_proyecto and estado
  getProy_archivosByIdProyectoAndEstado(id: number, estado: boolean, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proy_archivosByIdProyectoAndEstado/' + id + '/' + estado, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las proy_archivos. mediante and estado
  getProy_archivosByEstado(estado: boolean, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'proy_archivosByEstado/' + estado, options).toPromise()
    .then(res => res.json());
  }
  // contar todos las proy_archivos. mediante el id_proyecto
  countProy_archivosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${token}`
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countProyArchivosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res.json());
  }

}
