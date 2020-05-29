import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string;

  constructor(private _http: Http) { 
    this.url = GLOBAL.url;
  }
  //mostrar usuario por ID
  getUsuarioById(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuario/' + id, options).toPromise()
      .then(res => res.json());
  }
  // guardar Usuario
  saveUsuario(usuario: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'usuario', usuario, options).toPromise()
    .then(res => res.json());
  }
  // actualizar usuario
  updateUsuario(id: number, usuario: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'usuario/' + id, usuario, options).toPromise()
      .then(res => res.json());
  }
  // se obtiene todos las personas
  getPersonas(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'personas', options).toPromise()
    .then(res => res.json());
  }
  //mostrar persona por ID
  getPersonaById(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'persona/' + id, options).toPromise()
      .then(res => res.json());
  }
  // guardar Persona
  savePersona(persona: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'persona', persona, options).toPromise()
    .then(res => res.json());
  }
  // actualizar Persona
  updatePersona(id: number, persona: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'persona/' + id, persona, options).toPromise()
      .then(res => res.json());
  }
  // guardar adm_usuario_roles
  saveAdmUsuarioRol(adm_usuario_rol: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'adm_usuario_rol', adm_usuario_rol, options).toPromise()
    .then(res => res.json());
  }
  // actualizar adm_usuario_roles
  updateAdmUsuarioRol(id: number, adm_usuario_rol: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'adm_usuario_rol/' + id, adm_usuario_rol, options).toPromise()
      .then(res => res.json());
  }
  // obtener rol, atravez de un id_usuario
  getRolesByIdUsuario(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'getByRolesIdUsuario/' + id, options).toPromise()
    .then (res => res.json());
  }
  // se obtiene todos los usuarios
  getUsuarios(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuarios', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos los usuarios administradores
  getUsuariosAdministradores(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosAdministradores', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos los usuarios directores
  getUsuariosDirectores(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosDirectores', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos los usuarios
  getUsuariosInvestigadores(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosInvestigadores', options).toPromise()
    .then(res => res.json());
  }
  // se obtiene todos los usuarios
  getUsuariosInvestigadoresActivos(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosInvestigadoresActivos', options).toPromise()
    .then(res => res.json());
  }
  getUsuariosInvestigadoresTitular(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosInvestigadoresTitular', options).toPromise()
    .then(res => res.json());
  }
  getUsuariosInvestigadoresAsociadoProyecto(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosInvestigadoresAsociadoProyecto', options).toPromise()
    .then(res => res.json());
  }
  getUsuariosInvestigadoresAsociadoInvitacion(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'usuariosInvestigadoresAsociadoInvitacion', options).toPromise()
    .then(res => res.json());
  }
  getRolByIdUsuarioIdRol(idUsuario: number, idRol: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'getRolByIdUsuarioIdRol/' + idUsuario + '/' + idRol, options).toPromise()
    .then(res => res.json());
  }
  verificarPassword(usuario: any, token: string) {
    let headers = new Headers({
      'Authorization': token,
      'Content-Type': 'Application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'verificar-password', usuario, options).toPromise()
    .then( res => res.json());
  }
}
