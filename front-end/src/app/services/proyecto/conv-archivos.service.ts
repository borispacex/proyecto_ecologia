import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class ConvArchivosService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // conv_archivos, conv_archivo, ConvArchivos, ConvArchivo, id_convenio, IdConvenio

  // guardar una conv_archivo
  save(conv_archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'conv_archivo', conv_archivo, options).toPromise()
    .then(res => res);
  }
  // actualizar conv_archivo
  update(id_conv_archivo: number, archivo: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'conv_archivo/' + id_conv_archivo, archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los conv_archivos
  getConvArchivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conv_archivos', options).toPromise()
    .then(res => res);
  }
  // obtenemos el conv_archivo por id_conv_archivo
  getConvArchivoById(token: string, id_conv_archivo: number) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conv_archivo/' + id_conv_archivo, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los conv_archivos by id_convenio
  getConvArchivosByIdConvenio(id_convenio: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conv_archivos/' + id_convenio, options).toPromise()
    .then(res => res);
  }
  // contar todos los conv_archivos by estado
  countConvArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countConvArchivosByIdConvenio/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los conv_archivos by id_convenio
  getConvArchivosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conv_archivosByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtenemos todos los conv_archivos by id_convenio
  getConvArchivosByIdConvenioAndEstado(id_convenio: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'conv_archivosByIdConvenioAndEstado/' + id_convenio + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // contar todos los conv_archivos by id_convenio
  countConvArchivosByIdConvenioAndEstado(id_convenio: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'countConvArchivosByIdConvenioAndEstado/' + id_convenio + '/' + estado, options).toPromise()
    .then(res => res);
  }

}
