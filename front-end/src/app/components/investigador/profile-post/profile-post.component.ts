import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PublicacionesService } from 'src/app/services/proyecto/publicaciones.service';
import { ComentariosService } from 'src/app/services/proyecto/comentarios.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { GLOBAL } from 'src/app/services/global';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AutoresService } from 'src/app/services/proyecto/autores.service';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.css']
})
export class ProfilePostComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public id_publicacion: number;
  private token: string;
  public url: string;

  public publicacion: any = {};
  public archivos: any = [];
  public comentarios: any = [];
  public persona: any = {
    fotografia: {
      imagen: ''
    }
  };

  private id_persona: number;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _servicePublicaciones: PublicacionesService,
    private _serviceComentarios: ComentariosService,
    private _servicePubliArchivos: PubliArchivosService,
    private _serviceInvestigador: InvestigadoresService,
    private _serviceAutores: AutoresService,
    private _auth: AuthService
    ) {
      this.token = this._auth.getToken();
      this.url = GLOBAL.url;
      this.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
  }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.id_publicacion = params.id_publicacion;
    });
    this.obtenerPublicacion();
    this.obtenerPubliArchivos();
    this.obtenerComentarios();
    this.obtenerInvestigador();

    this.isPdf('hola.jpg');
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  obtenerPublicacion() {
    this._servicePublicaciones.getPublicacionById(this.id_publicacion, this.token)
    .then(response => {
      this.publicacion = response.publicacion;
    }).catch(error => { console.log('Error al obtener publicacion por id', error); });
  }
  obtenerPubliArchivos() {
    this._servicePubliArchivos.getPubliArchivosByIdPublicacion(this.id_publicacion, this.token)
    .then(response => {
      this.archivos = response.publi_archivos;
    }).catch(error => { console.log('Error al obtener archivos por id publicacion', error); });
  }
  obtenerComentarios() {
    this._serviceComentarios.getcomentariosByIdPublicacion(this.id_publicacion, this.token)
    .then(response => {
      this.comentarios = response.comentarios;
      console.log(this.comentarios);
    }).catch(error => { console.log('Error al obtener comentarios por id publicacion', error); });
  }
  obtenerInvestigador() {
    this._serviceInvestigador.getInvestigadorByIdPersona(this.id_persona, this.token)
    .then(response => {
      console.log(response);
      this.persona = response.investigador.persona;
    }).catch(error => { console.log('Error al obtener investigador por id', error); });
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
