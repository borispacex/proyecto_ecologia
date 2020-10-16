import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  public token: string;
  public url: string;
  public who: string;

  public adm_usuario_roles: any = [];    // donde se guarda todo lo llegado en getUsuarios --> para el listado
  public adm_usuario_rol: any = {};

  public usuario: any = {};
  public persona: any = {};
  public investigador: any = {};

  // tipoformulario
  public tipo_form: boolean; // true -> editar, false -> agregar
  public sidebarVisible: boolean = true;

  // multiselect
  public dropdownLista: Array<any> = [];
  public seleccionados: Array<any> = [];
  public dropdownConfiguracion: IDropdownSettings;

  // control de seleccionados
  public tam: number;
  // puntero listado
  public punteroListado = 1;
  public punteroMostrar = 'Lista de Usuarios';
  public punteroMostrarInvestigador = '';

  // search usuarios
  search = new FormControl('');
  public valorBusqueda = '';

  // estado de usuario
  estadoUsuario = 'ambos';
  tipo = '';

  public id_adm_usuario_rol = 0;

  constructor(
    private _serviceUsuarios: UsuariosService,
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private modalService: NgbModal,
    private _route: ActivatedRoute,
    private _serviceInvestigadores: InvestigadoresService,
    private toastr: ToastrService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;

    this.dropdownLista = [
      { id_rol: 1, rol: 'Administrador' },
      { id_rol: 2, rol: 'Director' },
      { id_rol: 3, rol: 'Investigador' }
    ];
    /*
    this.seleccionados = [
      { id_rol: 1, rol: 'Administrador' },
      { id_rol: 2, rol: 'Director' }
    ];
    */
    this.dropdownConfiguracion = {
      singleSelection: false,
      idField: 'id_rol',
      textField: 'rol',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deselecciona todo'
    };
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      // console.log('repite', params.get('tipo'));
      this.tipo = params.get('tipo');
      this.comprobarTipoUsuario(this.tipo, this.estadoUsuario); // siempre inicia en ambos
    });
    // buscador usuarios
    this.search.valueChanges.pipe(debounceTime(300)).subscribe(value => this.valorBusqueda = value);
  }
  openModalAgregar(content, size) {
    this.modalService.open(content, { size: size });
    this.vaciarUsuario();
    this.tipo_form = false;  // guardar
  }
  openModalEditar(content, size, id: number, status: boolean) {
    this.modalService.open(content, { size: size });
    // this.vaciarUsuario();
    this.tipo_form = true;  // editar
    this._serviceUsuarios.getUsuarioById(id, this.token)
      .then(response => {
        this.usuario = response.usuario;
        this.persona = this.usuario.persona;
        // ahora llenamos seleccionados
        this._serviceUsuarios.getRolesByIdUsuario(id, this.token)
          .then(roles => {
            this.seleccionados = [];
            roles.adm_usuario_roles.forEach(rol => {
              if (rol.estado) {
                this.seleccionados.push(rol.adm_role);
                // llenamos investigador, si tiene el rol de investigador
                if (rol.adm_role.id_rol === 3) {
                  this._serviceInvestigadores.getInvestigadorByIdPersona(this.usuario.id_persona, this.token)
                    .then(repsonseInvestigador => {
                      this.investigador = repsonseInvestigador.investigador;
                    }).catch(error => { console.log('error al buscar el investigador', error); });
                }
              }
            });
          }).catch(error => { console.log('error al buscaro roles por id_usuario', error); });
      }).catch(error => { console.log('Error al obtener usuario por id', error); });
  }
  editar() {
    let sw = true;
    if (this.persona.id_persona > 0) {
      // actualizamos persona
      this._serviceUsuarios.updatePersona(this.persona.id_persona, this.persona, this.token)
        .then(responsePersona => {
        }).catch(error => {
          // console.log('error al actualizar persona', error);
          this.toastr.error('Error al actualizar datos personales', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    }
    if (this.usuario.id_usuario > 0) {
      // actualizamos usuario
      this._serviceUsuarios.updateUsuario(this.usuario.id_usuario, this.usuario, this.token)
        .then(responseUsuario => {
        }).catch(error => {
          // console.log('error al actualizar usuario');
          this.toastr.error('Error al actualizar datos de usuario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    }
    if (this.investigador.id_investigador > 0) {
      // actualizamos investigadores
      this._serviceInvestigadores.updateInvestigador(this.investigador.id_investigador, this.investigador, this.token)
        .then(responseInvestigador => {
        }).catch(error => {
          // console.log('error al actualizar investigador', error);
          this.toastr.error('Error al actualizar datos investigador', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    }
    // primero actualizar cuando el usuario tenga los roles definidos
    this._serviceUsuarios.getRolesByIdUsuario(this.usuario.id_usuario, this.token)
      .then(responseRoles => {
        // almacenamos en un Array los id_rol --> posicion.
        // si mayor a cero se tiene que crear el enlace
        let contadorRol: Array<number> = [0, 0, 0, 0];            // -->
        responseRoles.adm_usuario_roles.forEach(adm_usuario_role => {
          this.seleccionados.forEach(seleccionado => {
            if (adm_usuario_role.id_rol === seleccionado.id_rol) {
              contadorRol[seleccionado.id_rol] -= contadorRol.length;
            } else {
              contadorRol[seleccionado.id_rol]++;
            }
          });
        });
        for (let pos = 1; pos < contadorRol.length; pos++) {
          if (contadorRol[pos] > 0) { // entonces se debe crear pos -> id_rol
            this.adm_usuario_rol.id_usuario = this.usuario.id_usuario;
            this.adm_usuario_rol.id_rol = pos;
            this._serviceUsuarios.saveAdmUsuarioRol(this.adm_usuario_rol, this.token)
              .then(responseAdmUser => {
                this.modalService.dismissAll();
                this.vaciarUsuario();
                this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
                if (sw) { this.toastr.success('Usuario actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); sw = false; }
              }).catch(error => {
                console.log('error al crear adm_usuario_rol', error);
                this.toastr.error('Error al enlazar usuario con rol', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              });
            if (pos === 3) {
              this.investigador.id_persona = this.persona.id_persona;
              this._serviceInvestigadores.saveInvestigador(this.investigador, this.token)
                .then(responseInvestigador => {
                  if (sw) { 
                    this.modalService.dismissAll();
                    this.vaciarUsuario();
                    this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
                    this.toastr.success('Usuario actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); 
                    sw = false;
                  }
                }).catch(error => {
                  console.log('error al crear investigador', error);
                  this.toastr.error('Error al guardar investigador', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                });
            }
          } else {             // entonces se debe actualizar
            if (contadorRol[pos] < 0) {
              // obtenemos el adm_usuario_rol, para encontrar el id_usuario_rol
              this._serviceUsuarios.getRolByIdUsuarioIdRol(this.usuario.id_usuario, pos, this.token)
                .then(responseRol => {
                  const id_adm_usuario_rol = responseRol.adm_usuario_role.id_adm_usuario_rol;
                  this._serviceUsuarios.updateAdmUsuarioRol(id_adm_usuario_rol, { estado: true }, this.token)
                    .then(responseRol => {
                      if (sw) {
                        this.toastr.success('Usuario actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                        sw = false;
                        this.modalService.dismissAll();
                        this.vaciarUsuario();
                        this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
                      }
                    }).catch(error => {
                      console.log('error al actualizar amd_usuario_rol', error);
                      this.toastr.error('Error al actualizar el rol del usuario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                    });
                }).catch(error => { console.log('error al obtener el adm_usuario_rol', error); });
            } else {
              // obtenemos el adm_usuario_rol, para encontrar el id_usuario_rol
              if (this.adm_usuario_rol) {
                this._serviceUsuarios.getRolByIdUsuarioIdRol(this.usuario.id_usuario, pos, this.token)
                  .then(responseRol => {
                    const id_adm_usuario_rol = responseRol.adm_usuario_role.id_adm_usuario_rol;
                    this._serviceUsuarios.updateAdmUsuarioRol(id_adm_usuario_rol, { estado: false }, this.token)
                      .then(responseRol => {
                        if (sw) {
                          this.toastr.success('Usuario actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          sw = false;
                          this.modalService.dismissAll();
                          this.vaciarUsuario();
                          this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
                        }
                      }).catch(error => {
                        console.log('Error al actualizar rol', error);
                        this.toastr.error('Error al actualizar el rol del usuario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                      });
                  }).catch(error => { console.log('error al obtener los roles por id_usuario y id_rol', error); }); // da error, porque la posision 'pos' no existe una vez
              }
            }
          }
        }
      }).catch(error => { console.log('error al obtener adm_usuario_roles mediante id_usuario', error); });
  }
  agregar() {
    let sw = true;
    this._serviceUsuarios.savePersona(this.persona, this.token)
      .then(response => {
        this.usuario.id_persona = response.persona.id_persona;
        this.usuario.usuario = this.persona.ci;
        this.usuario.password = this.persona.ci;
        this._serviceUsuarios.saveUsuario(this.usuario, this.token)
          .then(responseUsuario => {
            this.adm_usuario_rol.id_usuario = responseUsuario.usuario.id_usuario;
            for (let i = 0; i < this.seleccionados.length; i++) {
              if (this.seleccionados[i].id_rol === 3) {   // investigador
                this.investigador.id_persona = response.persona.id_persona;
                this._serviceInvestigadores.saveInvestigador(this.investigador, this.token)
                  .then(responseInvestigador => {
                  }).catch(error => {
                    console.log('error al crear investigador', error);
                    this.toastr.error('Error al guardar investigador', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                  });
              }
              this.adm_usuario_rol.id_rol = this.seleccionados[i].id_rol;
              this._serviceUsuarios.saveAdmUsuarioRol(this.adm_usuario_rol, this.token) // adm_usuario_rol
                .then(responseAdmUsuarioRol => {
                  if (i === this.seleccionados.length - 1) {  // para cerrar modal en la ultima creacion
                    if (sw) {
                      this.toastr.success('Usuario guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                      sw = false;
                      this.modalService.dismissAll();
                      this.vaciarUsuario();
                      this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
                    }
                  }
                }).catch(error => {
                  console.log('error adm usuario rol', error);
                  this.modalService.dismissAll();
                  this.vaciarUsuario();
                  this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
                  this.toastr.error('Error al guardar rol de usuario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                });
            }
          }).catch(error => {
            console.log('error usuario', error);
            this.toastr.error('Error al guardar datos de usuario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          });
      }).catch(error => {
        console.log('error crear persona', error);
        this.toastr.error('Error al guardar datos personales', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });

  }


  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  vaciarUsuario() {
    this.seleccionados = [];
    this.usuario = {
      id_usuario: ''
    };
    this.persona = {
      id_persona: '',
      paterno: '',
      materno: '',
      nombres: '',
      ci: '',
      grado_academico: '',
      correo: ''
    };
    this.adm_usuario_roles = [];
    this.adm_usuario_rol = {};
    this.investigador = {
      id_inv_tipo: ''
    };
  }
  public comprobarTipoUsuario(tipo: string, estadoU: string) {
    this.vaciarUsuario();
    if (estadoU === 'ambos') {
      // var tipo = this._route.snapshot.params.tipo;
      switch (tipo) {
        case 'usuario':
          this.getUsuarios();
          break;
        case 'administrador':
          this.getUsuariosAdministradores();
          break;
        case 'director':
          this.getUsuariosDirectores();
          break;
        case 'investigador':
          this.getUsuariosInvestigadores();
          break;
        case 'inv-titular':
          this.getUsuariosInvestigadoresTitular();
          break;
        case 'inv-asociado-proyecto':
          this.getUsuariosInvestigadoresAsociadoProyecto();
          break;
        case 'inv-asociado-invitacion':
          this.getUsuariosInvestigadoresAsociadoInvitacion();
          break;
        default:
          console.log('ERROR al comprobar');
          break;
      }
    } else if (estadoU === 'activo') {
      console.log('activo');
      this.comprobarTipoUsuarioByEstado(true, tipo);
    } else if (estadoU === 'inactivo') {
      console.log('inactivo');
      this.comprobarTipoUsuarioByEstado(false, tipo);
    } else {
      this.vaciarUsuario();
    }
  }
  // ------- LISTADO -------
  getUsuarios() {
    this.punteroListado = 1;
    this.punteroMostrar = 'Lista de Usuarios';
    this.punteroMostrarInvestigador = '';
    this._serviceUsuarios.getUsuarios(this.token)
      .then(response => {
        this.adm_usuario_roles = [];
        response.usuarios.forEach(usuario => {
          if (usuario.id_rol === 3) {
            this._serviceInvestigadores.getInvestigadorByIdPersona(usuario.adm_usuario.id_persona, this.token)
            .then(responseInvestigador => {
              usuario.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
              usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
              this.adm_usuario_roles.push(usuario);
            }).catch(error => { console.log('Error al obtener el investigador por id_persona', error); });
          } else {
            usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
            this.adm_usuario_roles.push(usuario);
          }
        });
      }).catch(error => { console.log('Error al obtener usuarios', error); });
  }
  getUsuariosAdministradores() {
    this.punteroListado = 2;
    this.punteroMostrar = 'Lista de Usuarios Administradores';
    this.punteroMostrarInvestigador = '';
    this._serviceUsuarios.getUsuariosAdministradores(this.token)
      .then(response => {
        this.adm_usuario_roles = [];
        response.usuarios.forEach(usuario => {
          usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
          this.adm_usuario_roles.push(usuario);
        });
      })
      .catch(error => { console.log('Error al obtener usuarios administradores', error); });
  }
  getUsuariosDirectores() {
    this.punteroListado = 3;
    this.punteroMostrar = 'Lista de Usuarios Directores';
    this.punteroMostrarInvestigador = '';
    this._serviceUsuarios.getUsuariosDirectores(this.token)
      .then(response => {
        this.adm_usuario_roles = [];
        response.usuarios.forEach(usuario => {
          usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
          this.adm_usuario_roles.push(usuario);
        });
      })
      .catch(error => { console.log('Error al obtener usuarios directores', error); });
  }
  getUsuariosInvestigadores() {
    this.punteroListado = 4;
    this.punteroMostrar = 'Lista de Usuarios Investigadores';
    this.punteroMostrarInvestigador = '';
    this._serviceUsuarios.getUsuariosInvestigadores(this.token)
      .then(response => {
        this.adm_usuario_roles = [];
        response.usuarios.forEach(adm_usuario_role => {
          this._serviceInvestigadores.getInvestigadorByIdPersona(adm_usuario_role.adm_usuario.id_persona, this.token)
            .then(responseInvestigador => {
              if (responseInvestigador.investigador) {
                adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                this.adm_usuario_roles.push(adm_usuario_role);
              }
            })
            .catch(error => { console.log('error obtener investigador', error); });
        });
      })
      .catch(error => { console.log('Error al obtener usuarios investigadores', error); });
  }
  getUsuariosInvestigadoresTitular() {
    this.punteroListado = 5;
    this.punteroMostrar = 'Lista de Usuarios Investigadores';
    this.punteroMostrarInvestigador = 'Titulares';

    this._serviceUsuarios.getUsuariosInvestigadoresTitular(this.token)
      .then(response => {
        // console.log(response);
        this.adm_usuario_roles = [];
        response.usuarios.forEach(adm_usuario_role => {
          this._serviceInvestigadores.getInvestigadorByIdPersonaAndIdInvTipo(adm_usuario_role.adm_usuario.id_persona, 1, this.token)
            .then(responseInvestigador => {
              if (responseInvestigador.investigador) {
                if (adm_usuario_role.id_rol === 3) {
                  adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                  adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                  this.adm_usuario_roles.push(adm_usuario_role);
                }
              }
            }).catch(error => { console.log('error obtener investigador', error); });
        });
      })
      .catch(error => { console.log('Error al obtener investigadores titulares', error); });
  }
  getUsuariosInvestigadoresAsociadoProyecto() {
    this.punteroListado = 6;
    this.punteroMostrar = 'Lista de Usuarios Investigadores';
    this.punteroMostrarInvestigador = 'Asociados con proyecto';

    this._serviceUsuarios.getUsuariosInvestigadoresAsociadoProyecto(this.token)
      .then(response => {
        this.adm_usuario_roles = [];
        response.usuarios.forEach(adm_usuario_role => {
          this._serviceInvestigadores.getInvestigadorByIdPersonaAndIdInvTipo(adm_usuario_role.adm_usuario.id_persona, 2, this.token)
            .then(responseInvestigador => {
              if (responseInvestigador.investigador) {
                if (adm_usuario_role.id_rol === 3) {
                  adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                  adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                  this.adm_usuario_roles.push(adm_usuario_role);
                }
              }
            })
            .catch(error => { console.log('error obtener investigador', error); });
        });
      })
      .catch(error => { console.log('Error al obtener investigador asociado con proyecto', error); });
  }
  getUsuariosInvestigadoresAsociadoInvitacion() {
    this.punteroListado = 7;
    this.punteroMostrar = 'Lista de Usuarios Investigadores';
    this.punteroMostrarInvestigador = 'Asociados por invitacion';
    this._serviceUsuarios.getUsuariosInvestigadoresAsociadoInvitacion(this.token)
      .then(response => {
        // console.log(response);
        this.adm_usuario_roles = [];
        response.usuarios.forEach(adm_usuario_role => {
          this._serviceInvestigadores.getInvestigadorByIdPersonaAndIdInvTipo(adm_usuario_role.adm_usuario.id_persona, 3, this.token)
            .then(responseInvestigador => {
              if (responseInvestigador.investigador) {
                if (adm_usuario_role.id_rol === 3) {
                  adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                  adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                  this.adm_usuario_roles.push(adm_usuario_role);
                }
              }
            })
            .catch(error => { console.log('error obtener investigador', error); });
        });
      }).catch(error => { console.log('error al obtener usuarios investigador asociados invitacion', error); });
  }

  eliminarUsuario(id: number) {
    this._serviceUsuarios.updateAdmUsuarioRol(id, { estado: false }, this.token)
      .then(response => {
        this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
      }).catch(error => { console.log('Error al eliminar usuario', error); });
  }
  getUsuariosActivos() {
    this.estadoUsuario = 'activo';
    this.comprobarTipoUsuarioByEstado(true, this.tipo);
  }
  getUsuariosInactivos() {
    this.estadoUsuario = 'inactivo';
    this.comprobarTipoUsuarioByEstado(false, this.tipo);
  }
  getUsuariosAll() {
    this.estadoUsuario = 'ambos';
    this.comprobarTipoUsuario(this.tipo, this.estadoUsuario);
  }

  public comprobarTipoUsuarioByEstado(estado: boolean, tipo: string) {
    switch (tipo) {
      case 'usuario':
        this._serviceUsuarios.getUsuariosByEstado(estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(usuario => {
              if (usuario.id_rol === 3) {
                this._serviceInvestigadores.getInvestigadorByIdPersona(usuario.adm_usuario.id_persona, this.token)
                .then(responseInvestigador => {
                  usuario.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                  usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
                  this.adm_usuario_roles.push(usuario);
                }).catch(error => { console.log('Error al obtener el investigador por id_persona', error); });
              } else {
                usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
                this.adm_usuario_roles.push(usuario);
              }
            });
          }).catch(error => { console.log('Error al obtener usuarios por estado', error); });
        break;
      case 'administrador':
        this._serviceUsuarios.getUsuariosIdRolAndEstado(1, estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(usuario => {
              usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
              this.adm_usuario_roles.push(usuario);
            });
          }).catch(error => { console.log('Error al obtener usuario por id_rol y estado', error); });
        break;
      case 'director':
        this._serviceUsuarios.getUsuariosIdRolAndEstado(2, estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(usuario => {
              usuario.nombreCompleto = `${usuario.adm_usuario.persona.nombres} ${usuario.adm_usuario.persona.paterno} ${usuario.adm_usuario.persona.materno}`;
              this.adm_usuario_roles.push(usuario);
            });
          }).catch(error => { console.log('Error al obtener usuario por id_rol y estado', error); });
        break;
      case 'investigador':
        this._serviceUsuarios.getUsuariosIdRolAndEstado(3, estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(adm_usuario_role => {
              this._serviceInvestigadores.getInvestigadorByIdPersona(adm_usuario_role.adm_usuario.id_persona, this.token)
              .then(responseInvestigador => {
                if (responseInvestigador.investigador) {
                  adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                  adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                  this.adm_usuario_roles.push(adm_usuario_role);
                }
              })
              .catch(error => { console.log('error obtener investigador', error); });
            });
          }).catch(error => { console.log('Error al obtener usuario por id_rol y estado', error); });
        break;
      case 'inv-titular':
        this._serviceUsuarios.getUsuariosIdRolAndEstado(3, estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(adm_usuario_role => {
              this._serviceInvestigadores.getInvestigadorByIdPersonaAndIdInvTipo(adm_usuario_role.adm_usuario.id_persona, 1, this.token)
                .then(responseInvestigador => {
                  if (responseInvestigador.investigador) {
                    if (adm_usuario_role.id_rol === 3 && responseInvestigador.investigador.id_inv_tipo === 1) {
                      adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                      adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                      this.adm_usuario_roles.push(adm_usuario_role);
                    }
                  }
                })
                .catch(error => { console.log('error obtener investigador', error); });
            });
          }).catch(error => { console.log('Error al obtener usuario por id_rol y estado', error); });
        break;
      case 'inv-asociado-proyecto':
        this._serviceUsuarios.getUsuariosIdRolAndEstado(3, estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(adm_usuario_role => {
              this._serviceInvestigadores.getInvestigadorByIdPersonaAndIdInvTipo(adm_usuario_role.adm_usuario.id_persona, 2, this.token)
                .then(responseInvestigador => {
                  if (responseInvestigador.investigador) {
                    if (adm_usuario_role.id_rol === 3 && responseInvestigador.investigador.id_inv_tipo === 2) {
                      adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                      adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                      this.adm_usuario_roles.push(adm_usuario_role);
                    }
                  }
                })
                .catch(error => { console.log('error obtener investigador', error); });
            });
          }).catch(error => { console.log('Error al obtener usuario por id_rol y estado', error); });
        break;
      case 'inv-asociado-invitacion':
        this._serviceUsuarios.getUsuariosIdRolAndEstado(3, estado, this.token)
          .then(response => {
            this.adm_usuario_roles = [];
            response.usuarios.forEach(adm_usuario_role => {
              this._serviceInvestigadores.getInvestigadorByIdPersonaAndIdInvTipo(adm_usuario_role.adm_usuario.id_persona, 3, this.token)
                .then(responseInvestigador => {
                  if (responseInvestigador.investigador) {
                    if (adm_usuario_role.id_rol === 3 && responseInvestigador.investigador.id_inv_tipo === 3) {
                      adm_usuario_role.inv_tipo = responseInvestigador.investigador.inv_tipo.tipo;
                      adm_usuario_role.nombreCompleto = `${adm_usuario_role.adm_usuario.persona.nombres} ${adm_usuario_role.adm_usuario.persona.paterno} ${adm_usuario_role.adm_usuario.persona.materno}`;
                      this.adm_usuario_roles.push(adm_usuario_role);
                    }
                  }
                })
                .catch(error => { console.log('error obtener investigador', error); });
            });
          }).catch(error => { console.log('Error al obtener usuario por id_rol y estado', error); });
        break;
      default:
        console.log('ERROR al comprobar');
        break;
    }
  }
  openModal(content, size, idAdmUsuarioRol: number) {
    this.modalService.open(content, { size: size });
    this.id_adm_usuario_rol = idAdmUsuarioRol;
  }
}
