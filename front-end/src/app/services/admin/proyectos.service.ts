import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // guardar proyecto
  saveProyecto(proyecto: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'proyecto', proyecto, options).toPromise()
    .then(res => res);
  }
  // actualizar proyecto
  updateProyecto(id_proyecto: number, proyecto: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'proyecto/' + id_proyecto, proyecto, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos los proyectos
  public getProyectos(token: string){
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectos', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las proyectos por estado: proyecto, activo, inactivo, pendiente, cerrado
  getProyectosByEstado(estado: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las proyectos. mediante el id_persona_adm
  getProyectosByIdPersonaAdm(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectosByIdPersonaAdm/' + id, options).toPromise()
    .then(res => res);
  }
  // se obtiene el proyecto, mediante el id_coordinador
  getProyectosByIdCoordinador(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectosByIdCoordinador/' + id, options).toPromise()
    .then(res => res);
  }
  // se obtiene el proyecto, mediante el id_proyecto
  getProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos, mediante el id_coordinador y estado
  getProyectosByIdCoordinadorAndEstado(id: number, status: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectosByIdCoordinadorAndStatus/' + id + '/' + status, options).toPromise()
    .then(res => res);
  }
  // se obtiene el proyecto por el id_proyecto, y estado
  getProyectoByIdAndStatus(id: number, status: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectoByIdAndStatus/' + id + '/' + status, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre fechas, fechaini
  getProyectosBetweenDatesIni(fechaini: string, fechafin: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenDatesIni/' + fechaini + '/' + fechafin, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre fechas, fechafin
  getProyectosBetweenDatesFin(fechaini: string, fechafin: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenDatesFin/' + fechaini + '/' + fechafin, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre fechas, fechaini, estado
  getProyectosBetweenDatesIniAndStatus(fechaini: string, fechafin: string, estado: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenDatesIniAndStatus/' + fechaini + '/' + fechafin + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre fechas, fechafin, estado
  getProyectosBetweenDatesFinAndStatus(fechaini: string, fechafin: string, estado: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenDatesFinAndStatus/' + fechaini + '/' + fechafin + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre proceso
  getProyectosBetweenProccess(ini: number, fin: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenProccess/' + ini + '/' + fin, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre proceso, estado
  getProyectosBetweenProccessAndStatus(ini: number, fin: number, estado: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenProccessAndStatus/' + ini + '/' + fin + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre proceso, fechaini
  getProyectosBetweenProccessAndBetweenDatesIni(ini: number, fin: number, fechaini: string, fechafin: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    // tslint:disable-next-line:max-line-length
    return this._httpClient.get<any>(this.url + 'getAllBetweenProccessAndBetweenDatesIni/' + ini + '/' + fin + '/' + fechaini + '/' + fechafin, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre proceso, fechafin
  getProyectosBetweenProccessAndBetweenDatesFin(ini: number, fin: number, fechaini: string, fechafin: string, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    // tslint:disable-next-line:max-line-length
    return this._httpClient.get<any>(this.url + 'getAllBetweenProccessAndBetweenDatesFin/' + ini + '/' + fin + '/' + fechaini + '/' + fechafin, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre proceso, fechaini, estado
  getProyectosBetweenProccessBetweenDatesIniAndStatus(ini: number, fin: number, fechaini: string, fechafin: string, estado: string,token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenProccessBetweenDatesIniAndStatus/' + ini + '/' + fin + '/' + fechaini + '/' + fechafin + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // se obtiene los proyectos entre proceso, fechafin, estado
  getProyectosBetweenProccessBetweenDatesFinAndStatus(ini: number, fin: number, fechaini: string, fechafin: string, estado: string,token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getAllBetweenProccessBetweenDatesFinAndStatus/' + ini + '/' + fin + '/' + fechaini + '/' + fechafin + '/' + estado, options).toPromise()
    .then(res => res);
  }
  sendEmailCreacionProyecto(id_persona: number, id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'proyectoCreado/' + id_persona + '/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
