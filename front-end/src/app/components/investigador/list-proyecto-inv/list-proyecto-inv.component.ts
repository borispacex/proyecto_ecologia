import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';

@Component({
  selector: 'app-list-proyecto-inv',
  templateUrl: './list-proyecto-inv.component.html',
  styleUrls: ['./list-proyecto-inv.component.css']
})
export class ListProyectoInvComponent implements OnInit {

  public sidebarVisible: boolean = true;

  public id_investigador: number;
  public token: string;
  public proyectos: Array<Proyecto> = [];
  public url: string;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private _route: ActivatedRoute,
    private _serviceProyecto: ProyectosService,
    private _serviceInvestigador: InvestigadoresService,
    private _serviceInvProyecto: InvProyectosService
    ) {
      this.token = this._auth.getToken();
      this.url = GLOBAL.url;
    }

  ngOnInit() {
    const id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
    this.obtenerTipoProyecto(id_persona);
  }
  obtenerProyectos() {
    var fotos: any[] = [];
    this.proyectos = [];
    // --> abtenemos atraves del id_investigador -> id_coordinador
    this._serviceProyecto.getProyectosByIdCoordinador(this.id_investigador, this.token)
    .then(responseProyectos => {

      responseProyectos.proyectos.forEach(proy => {
        this._serviceInvProyecto.getInv_proyectosByIdProyecto(proy.id_proyecto, this.token)
        .then(responseInvProy => {
          fotos.push(proy.investigadore.persona.fotografia.imagen);
          var inv_proyectos = responseInvProy.inv_proyectos;
          inv_proyectos.forEach(inv_proy => {
            fotos.push(inv_proy.investigadore.persona.fotografia.imagen);
          });
          proy.fotos = fotos;
          this.proyectos.push(proy);
          fotos = [];
        }).catch(error => { console.log('Error al obtener proyectos inv por id_proyecto', error); });
      });
      
    })
    .catch(error => { console.log('error al obtener los proyectos', error); });
    // --> obtenemos atraves del id_investigador -> id_investigador (inv_proyectos)
    this._serviceInvProyecto.getInv_proyectosByIdInvestigador(this.id_investigador, this.token)
    .then(responseInvProy => {
      responseInvProy.inv_proyectos.forEach(invProy => {
        this._serviceProyecto.getProyecto(invProy.id_proyecto, this.token)
        .then(responseProyecto => {

          const proy = responseProyecto.proyecto;
          this._serviceInvProyecto.getInv_proyectosByIdProyecto(proy.id_proyecto, this.token)
          .then(responseInvProy => {
            fotos.push(proy.investigadore.persona.fotografia.imagen);
            var inv_proyectos = responseInvProy.inv_proyectos;
            inv_proyectos.forEach(inv_proy => {
              fotos.push(inv_proy.investigadore.persona.fotografia.imagen);
            });
            proy.fotos = fotos;
            this.proyectos.push(proy);
            fotos = [];
          }).catch(error => { console.log('Error al obtener proyectos inv por id_proyecto', error); });

         }).catch(error => { console.log('Error al obtener proyecto ', error); });
      });
    });
  }
  obtenerProyectosByEstado(status: string) {
    var fotos: any[] = [];
    this.proyectos = [];
    // --> abtenemos atraves del id_investigador -> id_coordinador
    this._serviceProyecto.getProyectosByIdCoordinadorAndEstado(this.id_investigador, status, this.token)
    .then(responseProyectos => {

      responseProyectos.proyectos.forEach(proy => {
        this._serviceInvProyecto.getInv_proyectosByIdProyecto(proy.id_proyecto, this.token)
        .then(responseInvProy => {
          fotos.push(proy.investigadore.persona.fotografia.imagen);
          var inv_proyectos = responseInvProy.inv_proyectos;
          inv_proyectos.forEach(inv_proy => {
            fotos.push(inv_proy.investigadore.persona.fotografia.imagen);
          });
          proy.fotos = fotos;
          this.proyectos.push(proy);
          fotos = [];
        }).catch(error => { console.log('Error al obtener proyectos inv por id_proyecto', error); });
      });

    }).catch(error => { console.log('error al obtener proyectos por estado', error); });

    // --> obtenemos atraves del id_investigador -> id_investigador (inv_proyectos)
    this._serviceInvProyecto.getInv_proyectosByIdInvestigador(this.id_investigador, this.token)
    .then(responseInvProy => {
      responseInvProy.inv_proyectos.forEach(invProy => {
        this._serviceProyecto.getProyectoByIdAndStatus(invProy.id_proyecto, status, this.token)
        .then(responseProyecto => {
          if (responseProyecto.proyecto) { 

            const proy = responseProyecto.proyecto;
            this._serviceInvProyecto.getInv_proyectosByIdProyecto(proy.id_proyecto, this.token)
            .then(responseInvProy => {
              fotos.push(proy.investigadore.persona.fotografia.imagen);
              var inv_proyectos = responseInvProy.inv_proyectos;
              inv_proyectos.forEach(inv_proy => {
                fotos.push(inv_proy.investigadore.persona.fotografia.imagen);
              });
              proy.fotos = fotos;
              this.proyectos.push(proy);
              fotos = [];
            }).catch(error => { console.log('Error al obtener proyectos inv por id_proyecto', error); });

          }
         }).catch(error => { console.log('Error al obtener proyecto ', error); });
      });
    });

  }
  obtenerTipoProyecto(id_persona: number) {
    this._serviceInvestigador.getInvestigadorByIdPersona(id_persona, this.token)
    .then(responseInvestigador => {
      this.id_investigador = responseInvestigador.investigador.id_investigador;
      console.log(responseInvestigador);
      this._route.params.forEach((params: Params) => {
        switch (params.tipo) {
          case 'proyecto':
            this.obtenerProyectos();
            break;
          case 'activo':
            this.obtenerProyectosByEstado(params.tipo);
            break;
          case 'inactivo':
            this.obtenerProyectosByEstado(params.tipo);
            break;
          case 'pendiente':
            this.obtenerProyectosByEstado(params.tipo);
            break;
          case 'cerrado':
            this.obtenerProyectosByEstado(params.tipo);
            break;
          default:
            console.log('error a ir al enlace');
            this.obtenerProyectos();
            break;
        }
      });
    }).catch(error => { console.log('error al obtener investigador por id_persona', error); });
  }
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
}
