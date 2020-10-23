import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // cursos, curso, Cursos, Curso, id_proyecto, IdProyecto

  // guardar una curso
  save(curso: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'curso', curso, options).toPromise()
    .then(res => res);
  }
  // actualizar curso
  update(id_curso: number, curso: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'curso/' + id_curso, curso, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los cursos
  getCursos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'cursos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el curso por id_curso
  getCursoById(token: string, id_curso: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'curso/' + id_curso, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los cursos by id_proyecto
  getCursosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'cursos/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar los cursos by id_proyecto
  countCursosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countCursosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
