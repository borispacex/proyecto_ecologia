import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { GLOBAL } from 'src/app/services/global';
import { AutoresService } from 'src/app/services/proyecto/autores.service';
import { ComentariosService } from 'src/app/services/proyecto/comentarios.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { PublicacionesService } from 'src/app/services/proyecto/publicaciones.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {


  public token: string;
  public url: string;
  public who: string;

  public sidebarVisible: boolean = true;
  public investigadores: any = [];
  public publicaciones: any = [];

  // search archivos
  search = new FormControl('');
  public valorBusqueda = '';
  public page: number = 1;
  public pageInv: number = 1;


  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceInvProyectos: InvProyectosService,
    private _servicePublicaciones: PublicacionesService,
    private _servicePubliArchivos: PubliArchivosService,
    private _serviceAutores: AutoresService,
    private _serviceComentarios: ComentariosService
  ) {
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;
  }

  ngOnInit() {
    this.obtenerPublicaciones();
    this.comprobarTipoInvestigador('investigador');
    this.search.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.valorBusqueda = value );
  }

  public comprobarTipoInvestigador(tipo: string) {
    switch (tipo) {
      case 'investigador':
        this.getUsuariosInvestigadores();
        break;
      case 'inv-titular':
        this.getUsuariosInvestigadoresByTipo(1);
        break;
      case 'inv-asociado-proyecto':
        this.getUsuariosInvestigadoresByTipo(2);
        break;
      case 'inv-asociado-invitacion':
        this.getUsuariosInvestigadoresByTipo(3);
        break;
      default:
        console.log('ERROR al comprobar');
        break;
    }
  }

  getUsuariosInvestigadores() {
    this._serviceInvestigadores.getInvestigadores(this.token)
      .then(response => {
        this.investigadores = [];
        response.investigadores.forEach(investigador => {
          this._serviceInvProyectos.getInv_proyectosByIdInvestigador(investigador.id_investigador, this.token)
          .then(responseP => {
            investigador.inv_proyectos = responseP.inv_proyectos;
            investigador.nombreCompleto = `${investigador.persona.nombres} ${investigador.persona.paterno} ${investigador.persona.materno}`;
            this.investigadores.push(investigador);
          }).catch(error => { console.log('Error al obtener investigador proyecto', error); })
        });
      })
      .catch(error => { console.log('Error al usuarios investigadores', error); });
  }
  getUsuariosInvestigadoresByTipo(tipo: number) {
    this._serviceInvestigadores.getInvestigadoresByIdInvTipo(tipo, this.token)
      .then(responseInvestigador => {
        this.investigadores = [];
        responseInvestigador.investigadores.forEach(investigador => {
          this._serviceInvProyectos.getInv_proyectosByIdInvestigador(investigador.id_investigador, this.token)
          .then(response => {
            investigador.inv_proyectos = response.inv_proyectos;
            investigador.nombreCompleto = `${investigador.persona.nombres} ${investigador.persona.paterno} ${investigador.persona.materno}`;
            this.investigadores.push(investigador);
          }).catch(error => { console.log('Error al obtener investigador proyecto', error); })
        });
      })
      .catch(error => { console.log('error obtener investigador por tipo', error); });
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  changeInvestigadores(e) {
    this.comprobarTipoInvestigador(e.target.value);
  }

  obtenerPublicaciones() {
    this._servicePublicaciones.getPublicacionesByEstado(true, this.token)
    .then(response => {
      // this.publicaciones = response.publicaciones;
      // console.log(this.publicaciones);
      response.publicaciones.forEach(publicacion => {
        this._serviceAutores.getAutoresByIdInvestigador(publicacion.id_coordinador, this.token)
        .then(responseA => {
          // console.log(responseA);
          this.publicaciones = [];
          // this.nroPublicaciones = responseA.autores.length;
          responseA.autores.forEach(autor => {
            var publi = autor.publicacione;
            this._servicePubliArchivos.getPubliArchivosByIdPublicacion(publi.id_publicacion, this.token)
            .then(responsePubliA => {
              publi.archivos = responsePubliA.publi_archivos;
              this._serviceComentarios.getCountByIdPublicacion(publi.id_publicacion, this.token)
              .then(response => {
                publi.nroComentarios = response.contador;
                publi.autores = '';
                this._serviceAutores.getAutoresByIdPublicacionAndEstado(publi.id_publicacion, true, this.token)
                .then(responseA => {
                  var contadorA = 0;
                  responseA.autores.forEach(autor => {
                    contadorA++;
                    if (contadorA === responseA.autores.length) {
                      publi.autores = publi.autores + `${autor.investigadore.persona.grado_academico} ${autor.investigadore.persona.nombres} ${autor.investigadore.persona.paterno} `;
                      this.publicaciones.push(publi);
                    } else {
                      publi.autores = publi.autores + `${autor.investigadore.persona.grado_academico} ${autor.investigadore.persona.nombres} ${autor.investigadore.persona.paterno}, `;
                    }
                  });
                }).catch(error => { console.log('Error al obtener autores', error); });
              }).catch(error => { console.log('Error al obtener nro comentarios by id', error); });
            }).catch(error => { console.log('Error al obtener publi archivos by id_publicacion', error); });
          });
          // console.log(this.publicaciones);
        }).catch(error => { console.log('Error al obtener Autores por id_investigador', error); });
      });

    }).catch(error => { console.log('al obtener publicaciones', error); });
  }
  obtenerPublicacionesInvestigador(idPersona: number) {
    this._serviceInvestigadores.getInvestigadorByIdPersona(idPersona, this.token)
    .then(response => {
      // console.log(response.investigador);
      this._serviceAutores.getAutoresByIdInvestigador(response.investigador.id_investigador, this.token)
      .then(responseA => {
        // console.log(responseA);
        this.publicaciones = [];
        // this.nroPublicaciones = responseA.autores.length;
        responseA.autores.forEach(autor => {
          var publi = autor.publicacione;
          this._servicePubliArchivos.getPubliArchivosByIdPublicacion(publi.id_publicacion, this.token)
          .then(responsePubliA => {
            publi.archivos = responsePubliA.publi_archivos;
            this._serviceComentarios.getCountByIdPublicacion(publi.id_publicacion, this.token)
            .then(response => {
              publi.nroComentarios = response.contador;
              publi.autores = '';
              this._serviceAutores.getAutoresByIdPublicacionAndEstado(publi.id_publicacion, true, this.token)
              .then(responseA => {
                var contadorA = 0;
                responseA.autores.forEach(autor => {
                  contadorA++;
                  if (contadorA === responseA.autores.length) {
                    publi.autores = publi.autores + `${autor.investigadore.persona.grado_academico} ${autor.investigadore.persona.nombres} ${autor.investigadore.persona.paterno} `;
                    this.publicaciones.push(publi);
                  } else {
                    publi.autores = publi.autores + `${autor.investigadore.persona.grado_academico} ${autor.investigadore.persona.nombres} ${autor.investigadore.persona.paterno}, `;
                  }
                });
              }).catch(error => { console.log('Error al obtener autores', error); });
            }).catch(error => { console.log('Error al obtener nro comentarios by id', error); });
          }).catch(error => { console.log('Error al obtener publi archivos by id_publicacion', error); });
        });
        // console.log(this.publicaciones);
      }).catch(error => { console.log('Error al obtener Autores por id_investigador', error); });
    }).catch(error => { console.log('Error al obtener investigador por id_persona', error); });
  }

  isPdf(url: string) {
    var tam = url.length;
    var ext = url.substring(tam - 3, tam);
    if (ext === 'pdf') {
      return true;
    } else {
      return false;
    }
  }

}
