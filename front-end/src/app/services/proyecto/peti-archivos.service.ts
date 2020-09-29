import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from './../global';

@Injectable({
  providedIn: 'root'
})
export class PetiArchivosService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

    // peti_archivos, peti_archivo, PetiArchivos, PetiArchivo, id_peticion, IdPeticion


  save(peti_archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'peti_archivo', peti_archivo, options).toPromise()
      .then(res => res.json());
  }
  // actualizar peti_archivo
  update(id_peti_archivo: number, archivo: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'peti_archivo/' + id_peti_archivo, archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peti_archivos
  getPetiArchivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peti_archivos', options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peti_archivos when true
  getPetiArchivosByEstado(estado: boolean, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peti_archivosByEstado/' + estado, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos el peti_archivo por id_peti_archivo
  getPetiArchivoById(id_peti_archivo: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peti_archivo/' + id_peti_archivo, options).toPromise()
      .then(res => res.json());
  }
  // obtenemos todos los peti_archivos by id_peticion
  getPetiArchivosByIdPeticion(id_peticion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'peti_archivos/' + id_peticion, options).toPromise()
      .then(res => res.json());
  }
  // contador todos los peti_archivos by id_peticion
  countPetiArchivosByIdPeticion(id_peticion: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'countPetiArchivosByIdPeticion/' + id_peticion, options).toPromise()
      .then(res => res.json());
  }

}
