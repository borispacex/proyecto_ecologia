import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class CursoArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // curso_archivos, curso_archivo, CursoArchivos, CursoArchivo, id_curso, IdCurso

  // guardar una curso_archivo
  save(curso_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'curso_archivo', curso_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar curso_archivo
  update(id_curso_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'curso_archivo/' + id_curso_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los curso_archivos
  getCursoArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'curso_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el curso_archivo por id_curso_archivo
  getCursoArchivoById(token: string, id_curso_archivo: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'curso_archivo/' + id_curso_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los curso_archivos by id_curso
  getCursoArchivosByIdCurso(id_curso: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'curso_archivos/' + id_curso, options).toPromise()
      .then(res => res.json());
  }
  // contar todos los curso_archivos by id_curso
  countCursoArchivosByIdCurso(id_curso: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countCursoArchivosByIdCurso/' + id_curso, options).toPromise()
      .then(res => res.json());
  }


}
