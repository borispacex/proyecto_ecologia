import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // cursos, curso, Cursos, Curso, id_proyecto, IdProyecto

  // guardar una curso
  save(curso: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'curso', curso, options).toPromise()
      .then(res => res.json());
  }
  // actualizar curso
  update(id_curso: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'curso/' + id_curso, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los cursos
  getCursos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'cursos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el curso por id_curso
  getCursoById(token: string, id_curso: number) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'curso/' + id_curso, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los cursos by id_proyecto
  getCursosByIdProyecto(id_proyecto: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'cursos/' + id_proyecto, options).toPromise()
      .then(res => res.json());
  }

}
