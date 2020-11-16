import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PetiArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

    // peti_archivos, peti_archivo, PetiArchivos, PetiArchivo, id_peticion, IdPeticion


  save(peti_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'peti_archivo', peti_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar peti_archivo
  update(id_peti_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'peti_archivo/' + id_peti_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peti_archivos
  getPetiArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peti_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peti_archivos when true
  getPetiArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peti_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos el peti_archivo por id_peti_archivo
  getPetiArchivoById(id_peti_archivo: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peti_archivo/' + id_peti_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peti_archivos by id_peticion
  getPetiArchivosByIdPeticion(id_peticion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peti_archivos/' + id_peticion, options).toPromise()
    .then(res => res);
  }
  // contador todos los peti_archivos by id_peticion
  countPetiArchivosByIdPeticion(id_peticion: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPetiArchivosByIdPeticion/' + id_peticion, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los peti_archivos by id_peticion
  getPetiArchivosByIdPeticionAndEstado(id_peticion: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'peti_archivosByIdPeticionAndEstado/' + id_peticion + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contador todos los peti_archivos by id_peticion
  countPetiArchivosByIdPeticionAndEstado(id_peticion: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countPetiArchivosByIdPeticionAndEstado/' + id_peticion + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
