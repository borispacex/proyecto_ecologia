import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // guardar una peticion
  save(peticion: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'peticion', peticion, options).toPromise()
    .then(res => res);
  }
  // actualizar peticion
  update(id_peticion: number, peticion: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'peticion/' + id_peticion, peticion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peticiones
  getPeticiones(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peticiones', options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peticiones true
  getPeticionesByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peticionesByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos el peticion por id_peticion
  getPeticionById(id_peticion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peticion/' + id_peticion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peticiones by id_proyecto
  getPeticionesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peticiones-proy/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
    // obtenemos todos los peticiones by id_proyecto
  getPeticionesByIdProyectoAndIdInvestigador(id_proyecto: number, id_investigador,token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peticiones-proy-inv/' + id_proyecto + '/' + id_investigador, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peticiones by id_investigador
  getPeticionesByIdInvestigador(id_investigador: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peticiones-inv/' + id_investigador, options).toPromise()
    .then(res => res);
  }
  // contamos todos los peticiones by id_proyecto
  countPeticionesByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPeticionesByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
