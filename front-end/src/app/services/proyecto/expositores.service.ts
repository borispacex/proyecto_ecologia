import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ExpositoresService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  // guardar una expositor
  save(expositor: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'expositor', expositor, options).toPromise()
    .then(res => res);
  }
  // actualizar expositor
  update(id_expositor: number, expositores: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'expositor/' + id_expositor, expositores, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los expositores
  getExpositores(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'expositores', options).toPromise()
    .then(res => res);
  }
  // obtenemos el expositor por id_expositor
  getExpositorById(token: string, id_expositor: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'expositor/' + id_expositor, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los expositores by id_curso
  getExpositoresByIdCurso(id_curso: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'expositores/' + id_curso, options).toPromise()
    .then(res => res);
  }
  // borramos la expositor
  deleteExpositorByIdCurso(id_curso: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'expositores/' + id_curso, options).toPromise()
    .then(res => res);
  }
  // borramos la expositor
  deleteExpositor(id_expositor: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.delete<any>(this.url + 'expositor/' + id_expositor, options).toPromise()
    .then(res => res);
  }

}
