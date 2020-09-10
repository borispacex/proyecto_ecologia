import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class InvestigadoresService {

  private url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }
  // guardar investigador
  saveInvestigador(investigador: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'investigador', investigador, options).toPromise()
    .then(res => res.json());
  }
  // actualizar investigador
  updateInvestigador(id: number, investigador: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'investigador/' + id, investigador, options).toPromise()
      .then(res => res.json());
  }
  // se obtiene todos las investigaores
  getInvestigadores(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'investigadores', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las investigaores
  getInvestigadoresActivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'investigadoresActivos', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos las investigaores. mediante el id_inv_tipo
  getInvestigadoresByIdInvTipo(id_inv_tipo: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'investigadoresByIdInvTipo/' + id_inv_tipo, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el investigaor, mediante el id_persona
  getInvestigadorByIdPersona(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'investigadorByIdPersona/' + id, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el investigaor, mediante el id_persona y id_inv_tipo
  getInvestigadorByIdPersonaAndIdInvTipo(id_persona: number, id_inv_tipo: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'investigadorByIdPersonaAndidInvTipo/' + id_persona + '/' + id_inv_tipo, options).toPromise()
    .then(res => res.json());
  }
  // se obtiene el investigador, mediante el id_investigador
  getInvestigador(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'investigador/' + id, options).toPromise()
    .then(res => res.json());
  }
}
