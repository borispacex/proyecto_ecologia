import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class NotaArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // nota_archivos, nota_archivo, NotaArchivos, NotaArchivo, id_nota_prensa, IdNotaPrensa

  // guardar una nota_archivo
  save(nota_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'nota_archivo', nota_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar nota_archivo
  update(id_nota_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'nota_archivo/' + id_nota_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los nota_archivos
  getNotaArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'nota_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el nota_archivo por id_nota_archivo
  getNotaArchivoById(token: string, id_nota_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'nota_archivo/' + id_nota_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los nota_archivos by id_nota_prensa
  getNotaArchivosByIdNotaPrensa(id_nota_prensa: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'nota_archivos/' + id_nota_prensa, options).toPromise()
    .then(res => res);
  }
  // contar todos los nota_archivos by id_nota_prensa
  countNotaArchivosByIdNotaPrensa(id_nota_prensa: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countNotaArchivosByIdNotaPrensa/' + id_nota_prensa, options).toPromise()
    .then(res => res);
  }

}
