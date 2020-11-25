import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GLOBAL } from 'src/app/services/global';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';

@Component({
  selector: 'app-list-investigadores',
  templateUrl: './list-investigadores.component.html',
  styleUrls: ['./list-investigadores.component.css']
})
export class ListInvestigadoresComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public isResizing: boolean = false;

  public token: string;
  public url: string;
  public who: string;

  public usuario: any = {};
  public persona: any = {};
  public investigador: any = {};
  public investigadores: any = [];

  public punteroMostrarInvestigador = 'Lista de investigadores';

  // search archivos
  search = new FormControl('');
  public valorBusqueda = '';
  public page: number = 1;


  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private _route: ActivatedRoute,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceInvProyectos: InvProyectosService,
    private _serviceProyectos: ProyectosService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;
  }

  ngOnInit(): void {
    // this.vaciarUsuario();
    this.comprobarTipoUsuario();
    // buscador proyectos
    this.search.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.valorBusqueda = value );
  }

  toggleFullWidth() {
    this.isResizing = true;
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    let that = this;
    setTimeout(function () {
      that.isResizing = false;
      that.cdr.detectChanges();
    }, 400);
  }

  public comprobarTipoUsuario() {
    this._route.params.forEach((params: Params) => {
      switch (params.tipo) {
        case 'investigador':
          this.punteroMostrarInvestigador = 'Lista de investigadores';
          this.getUsuariosInvestigadores();
          break;
        case 'inv-titular':
          this.punteroMostrarInvestigador = 'Titular';
          this.getUsuariosInvestigadoresByTipo(1);
          break;
        case 'inv-asociado-proyecto':
          this.punteroMostrarInvestigador = 'Asociado con proyecto';
          this.getUsuariosInvestigadoresByTipo(2);
          break;
        case 'inv-asociado-invitacion':
          this.punteroMostrarInvestigador = 'Asociado con invitación';
          this.getUsuariosInvestigadoresByTipo(3);
          break;
        default:
          console.log('ERROR al comprobar');
          break;
      }
    });
  }

  getUsuariosInvestigadores() {
    this._serviceInvestigadores.getInvestigadores(this.token)
      .then(response => {
        this.investigadores = [];
        response.investigadores.forEach(investigador => {
          this._serviceInvProyectos.getInv_proyectosByIdInvestigador(investigador.id_investigador, this.token)
          .then(responseP => {
            investigador.inv_proyectos = [];
            this._serviceProyectos.getProyectosByIdCoordinador(investigador.id_investigador, this.token)
            .then(responseProy => {
              responseProy.proyectos.forEach(proyecto => {
                let inv_proyecto = {
                  id_proyecto: proyecto.id_proyecto,
                  proyecto: proyecto
                };
                inv_proyecto.proyecto = proyecto;
                investigador.inv_proyectos.push(inv_proyecto);
              });
            }).catch(error => { console.log('Error al obtener proyecto por id_inv', error); });
            investigador.inv_proyectos = investigador.inv_proyectos.concat(responseP.inv_proyectos);
            investigador.nombreCompleto = `${investigador.persona.nombres} ${investigador.persona.paterno} ${investigador.persona.materno}`;
            this.investigadores.push(investigador);
          }).catch(error => { console.log('Error al obtener investigador proyecto', error); })
        });
      })
      .catch(error => { console.log('Error al obtener usuarios investigadores', error); });
  }
  getUsuariosInvestigadoresByTipo(tipo: number) {
    this._serviceInvestigadores.getInvestigadoresByIdInvTipo(tipo, this.token)
      .then(responseInvestigador => {
        this.investigadores = [];
        responseInvestigador.investigadores.forEach(investigador => {
          this._serviceInvProyectos.getInv_proyectosByIdInvestigador(investigador.id_investigador, this.token)
          .then(response => {
            investigador.inv_proyectos = [];
            this._serviceProyectos.getProyectosByIdCoordinador(investigador.id_investigador, this.token)
            .then(responseProy => {
              responseProy.proyectos.forEach(proyecto => {
                let inv_proyecto = {
                  id_proyecto: proyecto.id_proyecto,
                  proyecto: proyecto
                };
                inv_proyecto.proyecto = proyecto;
                investigador.inv_proyectos.push(inv_proyecto);
              });
            }).catch(error => { console.log('Error al obtener proyecto por id_inv', error); });
            investigador.inv_proyectos = investigador.inv_proyectos.concat(response.inv_proyectos);
            investigador.nombreCompleto = `${investigador.persona.nombres} ${investigador.persona.paterno} ${investigador.persona.materno}`;
            this.investigadores.push(investigador);
          }).catch(error => { console.log('Error al obtener investigador proyecto', error); })
        });
      })
      .catch(error => { console.log('error obtener investigador por tipo', error); });
  }

}
