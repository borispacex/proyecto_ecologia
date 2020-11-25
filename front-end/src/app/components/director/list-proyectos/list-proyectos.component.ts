import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { Params, ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-proyectos',
  templateUrl: './list-proyectos.component.html',
  styleUrls: ['./list-proyectos.component.css']
})
export class ListProyectosComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public isResizing: boolean = false;

  public token: string;
  public proyectos: Array<Proyecto> = [];
  public url: string;
  public who: string;
  public proyecto: any = {};

  // search archivos
  search = new FormControl('');
  public valorBusqueda = '';
  public page: number = 1;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private _serviceProyecto: ProyectosService,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceInvProyectos: InvProyectosService,
    private _route: ActivatedRoute
  ) { 
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;
  }

  ngOnInit(): void {
    // this.vaciarProyecto();
    // this.getUsuariosInvestigadoresActivos();
    this.comprobarTipoProyecto();

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

  getProyectosAdmin() {
    var fotos: any[] = [];
    this.proyectos = [];
    this._serviceProyecto.getProyectos(this.token)
      .then(responseProyectos => {
        responseProyectos.proyectos.forEach(proy => {
          this._serviceInvProyectos.getInv_proyectosByIdProyecto(proy.id_proyecto, this.token)
            .then(responseInvProy => {
              fotos.push(proy.investigadore.persona.fotografia.imagen);
              var inv_proyectos = responseInvProy.inv_proyectos;
              inv_proyectos.forEach(inv_proy => {
                fotos.push(inv_proy.investigadore.persona.fotografia.imagen);
              });
              proy.fotos = fotos;
              this.proyectos.push(proy);
              fotos = [];
            })
            .catch(error => { console.log('Error al obtener proyectos inv por id_proyecto', error); });
        });
      })
      .catch(error => { console.log('error al obtener proyectos', error); });
  }

  getProyectosByEstado(estado: string) {
    var fotos: any[] = [];
    this.proyectos = [];
    this._serviceProyecto.getProyectosByEstado(estado, this.token)
      .then(responseProyectos => {
        responseProyectos.proyectos.forEach(proy => {
          this._serviceInvProyectos.getInv_proyectosByIdProyecto(proy.id_proyecto, this.token)
            .then(responseInvProy => {
              fotos.push(proy.investigadore.persona.fotografia.imagen);
              var inv_proyectos = responseInvProy.inv_proyectos;
              inv_proyectos.forEach(inv_proy => {
                fotos.push(inv_proy.investigadore.persona.fotografia.imagen);
              });
              proy.fotos = fotos;
              this.proyectos.push(proy);
              fotos = [];
            })
            .catch(error => { console.log('Error al obtener proyectos inv por id_proyecto', error); });
        });
      })
      .catch(error => { console.log('error al obtener proyectos', error); });
  }
  /*
  getUsuariosInvestigadoresActivos() {
    this._serviceInvestigadores.getInvestigadoresActivos(this.token)
      .then(response => {
        // console.log(response.investigadores);
        response.investigadores.forEach(investigador => {
          this.dropdownLista.push(
            {
              id_investigador: investigador.id_investigador,
              nombreCompleto: investigador.persona.nombres + ' ' +
                investigador.persona.paterno + ' ' + investigador.persona.materno
            }
          );
        });
      })
      .catch(error => { console.log('error al obtener investigadores activos', error); });
  }
  */
  comprobarTipoProyecto() {
    this._route.params.forEach((params: Params) => {
      switch (params.tipo) {
        case 'proyecto':
          this.getProyectosAdmin();
          break;
        case 'activo':
          this.getProyectosByEstado('activo');
          break;
        case 'inactivo':
          this.getProyectosByEstado('inactivo');
          break;
        case 'pendiente':
          this.getProyectosByEstado('pendiente');
          break;
        case 'cerrado':
          this.getProyectosByEstado('cerrado');
          break;
        default:
          console.log('ERROR al comprobar');
          break;
      }
    });
  }

}
