import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string;

  constructor(private _httpClient: HttpClient) { 
    this.url = GLOBAL.url;
  }
  //mostrar usuario por ID
  getUsuarioById(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuario/' + id, options).toPromise()
    .then(res => res);
  }
  // guardar Usuario
  saveUsuario(usuario: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'usuario', usuario, options).toPromise()
    .then(res => res);
  }
  // actualizar usuario
  updateUsuario(id_usuario: number, usuario: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'usuario/' + id_usuario, usuario, options).toPromise()
    .then(res => res);
  }
  // se obtiene todos las personas
  getPersonas(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'personas', options).toPromise()
    .then(res => res);
  }
  //mostrar persona por ID
  getPersonaById(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'persona/' + id, options).toPromise()
    .then(res => res);
  }
  // guardar Persona
  savePersona(persona: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'persona', persona, options).toPromise()
    .then(res => res);
  }
  // actualizar Persona
  updatePersona(id: number, persona: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'persona/' + id, persona, options).toPromise()
    .then(res => res);
  }
  // guardar adm_usuario_roles
  saveAdmUsuarioRol(adm_usuario_rol: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'adm_usuario_rol', adm_usuario_rol, options).toPromise()
    .then(res => res);
  }
  // actualizar adm_usuario_roles
  updateAdmUsuarioRol(id: number, adm_usuario_rol: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'adm_usuario_rol/' + id, adm_usuario_rol, options).toPromise()
    .then(res => res);
  }
  // obtener rol, atravez de un id_usuario
  getRolesByIdUsuario(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getByRolesIdUsuario/' + id, options).toPromise()
    .then(res => res);
  }

  // obtener rol, atravez de un id_usuario
  getRolesByIdUsuarioIdRolAndEstado(id_usuario: number, id_rol: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'adm_usuario_rolesByIdUsuarioIdRolAndEstado/' + id_usuario + '/' + id_rol + '/' + estado, options).toPromise()
    .then(res => res);
  }
  // obtener rol, atravez de un id_usuario
  getRolesByIdUsuarioAndEstado(id_usuario: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'adm_usuario_rolesByIdUsuarioAndEstado/' + id_usuario + '/' + estado, options).toPromise()
    .then(res => res);
  }


  // se obtiene todos los usuarios
  getUsuarios(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuarios', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos los usuarios administradores
  getUsuariosAdministradores(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosAdministradores', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos los usuarios directores
  getUsuariosDirectores(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosDirectores', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos los usuarios
  getUsuariosInvestigadores(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosInvestigadores', options).toPromise()
    .then(res => res);
  }
  // se obtiene todos los usuarios
  getUsuariosInvestigadoresActivos(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosInvestigadoresActivos', options).toPromise()
    .then(res => res);
  }
  getUsuariosInvestigadoresTitular(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosInvestigadoresTitular', options).toPromise()
    .then(res => res);
  }
  getUsuariosInvestigadoresAsociadoProyecto(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosInvestigadoresAsociadoProyecto', options).toPromise()
    .then(res => res);
  }
  getUsuariosInvestigadoresAsociadoInvitacion(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosInvestigadoresAsociadoInvitacion', options).toPromise()
    .then(res => res);
  }
  getRolByIdUsuarioIdRol(idUsuario: number, idRol: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getRolByIdUsuarioIdRol/' + idUsuario + '/' + idRol, options).toPromise()
    .then(res => res);
  }
  getUsuariosIdRolAndEstado(idRol: number, estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosAdmUsuarioRolesByIdRolAndByEstado/' + idRol + '/' + estado, options).toPromise()
    .then(res => res);
  }
  getUsuariosByEstado(estado: boolean, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'usuariosAdmUsuarioRolesByEstado/' + estado, options).toPromise()
    .then(res => res);
  }
  verificarPassword(usuario: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'Application/json'
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'verificar-password', usuario, options).toPromise()
    .then(res => res);
  }
  sendEmailBienvenidoUser(id_persona: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'bienvenidoUser/' + id_persona, options).toPromise()
    .then(res => res);
  }
  
}
