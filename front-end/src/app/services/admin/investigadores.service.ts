import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class InvestigadoresService {

  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  // guardar investigador
  saveInvestigador(investigador: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'investigador', investigador, options).toPromise()
    .then(res => res);
  }
  // actualizar investigador
  updateInvestigador(id: number, investigador: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'investigador/' + id, investigador, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las investigaores
  getInvestigadores(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'investigadores', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las investigaores
  getInvestigadoresActivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'investigadoresActivos', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las investigaores. mediante el id_inv_tipo
  getInvestigadoresByIdInvTipo(id_inv_tipo: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'investigadoresByIdInvTipo/' + id_inv_tipo, options).toPromise()
    .then(res => res);
  }
  // se obtiene el investigaor, mediante el id_persona
  getInvestigadorByIdPersona(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'investigadorByIdPersona/' + id, options).toPromise()
    .then(res => res);
  }
  // se obtiene el investigaor, mediante el id_persona y id_inv_tipo
  getInvestigadorByIdPersonaAndIdInvTipo(id_persona: number, id_inv_tipo: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'investigadorByIdPersonaAndidInvTipo/' + id_persona + '/' + id_inv_tipo, options).toPromise()
    .then(res => res);
  }
  // se obtiene el investigador, mediante el id_investigador
  getInvestigador(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'investigador/' + id, options).toPromise()
    .then(res => res);
  }
}
