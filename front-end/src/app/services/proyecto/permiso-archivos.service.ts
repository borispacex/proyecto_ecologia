import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PermisoArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // permiso_archivos, permiso_archivo, PermisoArchivos, PermisoArchivo, id_proyecto, IdProyecto

  // guardar una permiso_archivo
  save(permiso_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'permiso_archivo', permiso_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar permiso_archivo
  update(id_permiso_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'permiso_archivo/' + id_permiso_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los permiso_archivos
  getPermisoArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'permiso_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el permiso_archivo por id_permiso_archivo
  getPermisoArchivoById(token: string, id_permiso_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'permiso_archivo/' + id_permiso_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los permiso_archivos by id_proyecto
  getPermisoArchivosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'permiso_archivos/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar todos los permiso_archivos by id_proyecto
  countPermisoArchivosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPermisoArchivosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los permiso_archivos by estado
  getPermisoArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'permiso_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los permiso_archivos by id_proyecto
  getPermisoArchivosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'permiso_archivosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los permiso_archivos by id_proyecto
  countPermisoArchivosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPermisoArchivosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }
}
