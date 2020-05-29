import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PermisoArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // permiso_archivos, permiso_archivo, PermisoArchivos, PermisoArchivo, id_proyecto, IdProyecto

  // guardar una permiso_archivo
  save(permiso_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'permiso_archivo', permiso_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar permiso_archivo
  update(id_permiso_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'permiso_archivo/' + id_permiso_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los permiso_archivos
  getPermisoArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'permiso_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el permiso_archivo por id_permiso_archivo
  getPermisoArchivoById(token: string, id_permiso_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'permiso_archivo/' + id_permiso_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los permiso_archivos by id_proyecto
  getPermisoArchivosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'permiso_archivos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
