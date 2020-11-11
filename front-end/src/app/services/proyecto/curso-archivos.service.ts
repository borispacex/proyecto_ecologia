import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class CursoArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // curso_archivos, curso_archivo, CursoArchivos, CursoArchivo, id_curso, IdCurso

  // guardar una curso_archivo
  save(curso_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'curso_archivo', curso_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar curso_archivo
  update(id_curso_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'curso_archivo/' + id_curso_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los curso_archivos
  getCursoArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'curso_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el curso_archivo por id_curso_archivo
  getCursoArchivoById(token: string, id_curso_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'curso_archivo/' + id_curso_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los curso_archivos by id_curso
  getCursoArchivosByIdCurso(id_curso: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'curso_archivos/' + id_curso, options).toPromise()
    .then(res => res);
  }
  // contar todos los curso_archivos by id_curso
  countCursoArchivosByIdCurso(id_curso: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countCursoArchivosByIdCurso/' + id_curso, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los curso_archivos by estado
  getCursoArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'curso_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los curso_archivos by id_curso
  getCursoArchivosByIdCursoAndEstado(id_curso: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'curso_archivosByIdCursoAndEstado/' + id_curso + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los curso_archivos by id_curso
  countCursoArchivosByIdCursoAndEstado(id_curso: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countCursoArchivosByIdCursoAndEstado/' + id_curso + '/' + estado, options).toPromise()
    .then(res => res);
  }


}
