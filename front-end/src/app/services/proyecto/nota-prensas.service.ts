import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class NotaPrensasService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // nota_prensas, nota_prensa, NotaPrensas, NotaPrensa, id_proyecto, IdProyecto

  // guardar una nota_prensa
  save(nota_prensa: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'nota_prensa', nota_prensa, options).toPromise()
    .then(res => res);
  }
  // actualizar nota_prensa
  update(id_nota_prensa: number, nota_prensa: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'nota_prensa/' + id_nota_prensa, nota_prensa, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los nota_prensas
  getNotaPrensas(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'nota_prensas', options).toPromise()
    .then(res => res);
  }
  // obtenemos el nota_prensa por id_nota_prensa
  getNotaPrensaById(token: string, id_nota_prensa: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'nota_prensa/' + id_nota_prensa, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los nota_prensas by id_proyecto
  getNotaPrensasByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'nota_prensas/' + id_proyecto, options).toPromise()
    .then(res => res);
  }
  // contar todos los nota_prensas by id_proyecto
  countNotaPrensasByIdProyecto(id_proyecto: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countNotaPrensasByIdProyecto/' + id_proyecto, options).toPromise()
    .then(res => res);
  }

}
