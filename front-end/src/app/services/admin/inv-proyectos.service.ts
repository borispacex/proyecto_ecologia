import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class InvProyectosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // guardar inv_proyecto
  saveInv_proyecto(inv_proyecto: any, token: string) {
    // console.log('hola desde el servicio', inv_proyecto);
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'inv_proyecto', inv_proyecto, options).toPromise()
    .then(res => res);
  }
  // actualizar inv_proyecto
  updateInv_proyecto(id: number, inv_proyecto: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'inv_proyecto/' + id, inv_proyecto, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las inv_proyectos
  getInv_proyectos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'inv_proyectos', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las inv_proyectos, mediante el id_proyecto
  getInv_proyectosByIdProyecto(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'inv_proyectosByIdProyecto/' + id, options).toPromise()
    .then(res => res);
  }
  // se obtiene el inv_proyecto, mediante el id_investigador
  getInv_proyectosByIdInvestigador(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'inv_proyectosByIdInvestigador/' + id, options).toPromise()
    .then(res => res);
  }
  // se obtiene el inv_proyecto, mediante el id_inv_proyecto
  getInv_proyecto(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'inv_proyecto/' + id, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las inv_proyectos, mediante el estado
  getInv_proyectosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'inv_proyectosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las inv_proyectos, mediante el id investigador y estado
  getInv_proyectosByIdInvestigadorAndEstado(id_investigador: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'inv_proyectosByIdInvestigadorAndEstado/' + id_investigador + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las inv_proyectos, mediante el id proyecto y estado
  getInv_proyectosByIdProyectoAndEstado(id_proyecto: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'inv_proyectosByIdProyectoAndEstado/' + id_proyecto + '/' + estado, options).toPromise()
    .then(res => res);
  }
}
