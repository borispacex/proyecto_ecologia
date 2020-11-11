import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class LugarDesarrollosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // lugar_desarrollos, lugar_desarrollo, LugarDesarrollos, LugarDesarrollo, id_proyecto, IdProyecto

  // guardar una lugar_desarrollo
  save(lugar_desarrollo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'lugar_desarrollo', lugar_desarrollo, options).toPromise()
    .then(res => res);
  }
  // actualizar lugar_desarrollo
  update(id_lugar_desarrollo: number, lugar_desarrollo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'lugar_desarrollo/' + id_lugar_desarrollo, lugar_desarrollo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos
  getLugarDesarrollos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el lugar_desarrollo por id_lugar_desarrollo
  getLugarDesarrolloById(token: string, id_lugar_desarrollo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollo/' + id_lugar_desarrollo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by id_proyecto
  getLugarDesarrollosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollos/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoDepartamentoAndProvincia(id_proyecto: number, departamento: string, provincia: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoDepartamentAndProvince/'+ id_proyecto + '/' + departamento + '/' + provincia, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoAndDepartamento(id_proyecto: number, departamento: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoAndDepartament/' + id_proyecto + '/' + departamento, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoAndProvincia(id_proyecto: number, provincia: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoAndProvince/' + id_proyecto + '/' + provincia, options).toPromise()
    .then(res => res);
  }
  // contar todos los lugar_desarrollos by id_proyecto
  countLugarDesarrollosByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countLugarDesarrollosByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }


  // obtenemos todos los lugar_desarrollos by estado
  getLugarDesarrollosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by id_proyecto
  getLugarDesarrollosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
      .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoDepartamentoProvinciaAndEstado(id_proyecto: number, departamento: string, provincia: string, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoDepartamentoAndProvinciaAndEstado/' + id_proyecto + '/' + departamento + '/' + provincia + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoDepartamentoAndEstado(id_proyecto: number, departamento: string, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoAndDepartamentoAndEstado/' + id_proyecto + '/' + departamento + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los lugar_desarrollos by departamento y provincia
  getLugarDesarrollosByIdProyectoProvinciaAndEstado(id_proyecto: number, provincia: string, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'lugar_desarrollosByIdProyectoAndProvinciaAndEstado/' + id_proyecto + '/' + provincia + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los lugar_desarrollos by id_proyecto
  countLugarDesarrollosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countLugarDesarrollosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
