import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { AutoresService } from 'src/app/services/proyecto/autores.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { FotografiasService } from 'src/app/services/upload/fotografias.service';
import { ComentariosService } from 'src/app/services/proyecto/comentarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public activeTab: string = "Overview";

  // usuario
  public usuario: any = {};
  public persona: any = {};
  public fotografia: any = {};
  public imagen: string = 'photo_default.png';

  private token: string;
  public url: string;
  public who: string;

  private id_persona;
  public publicaciones: any = [];
  public nroComentarios = 0;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private _serviceUsuario: UsuariosService,
    private _serviceAutores: AutoresService,
    private _serviceInvestigadores: InvestigadoresService,
    private _servicePubliArchivos: PubliArchivosService,
    private _serviceFotografia: FotografiasService,
    private _serviceComentarios: ComentariosService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;
  }

  ngOnInit() {
    const id_usuario = JSON.parse(localStorage.getItem('identity_user')).id_usuario;
    this.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
    this.obtenerDatos(id_usuario);
    this.obtenerPublicaciones();
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  toggleTabs(tab: string) {
    if (tab) {
      this.activeTab = tab;
    }
  }
  obtenerDatos(id_usuario) {
    this._serviceUsuario.getUsuarioById(id_usuario, this.token)
    .then(responseUsuario => {
      this.usuario = responseUsuario.usuario;
      this.persona = responseUsuario.usuario.persona;
      this.fotografia = responseUsuario.usuario.persona.fotografia;
      this._serviceFotografia.getImagen().subscribe((value: string) => {
        this.imagen = value;
      });
    })
    .catch(error => { console.log('error al obtener usuario', error); });
  }

  obtenerPublicaciones() {
    this._serviceInvestigadores.getInvestigadorByIdPersona(this.id_persona, this.token)
    .then(response => {
      // console.log(response.investigador);
      this._serviceAutores.getAutoresByIdInvestigador(response.investigador.id_investigador, this.token)
      .then(responseA => {
        // console.log(responseA);
        this.publicaciones = [];
        responseA.autores.forEach(autor => {
          var publi = autor.publicacione;
          this._servicePubliArchivos.getPubliArchivosByIdPublicacion(publi.id_publicacion, this.token)
          .then(responsePubliA => {
            publi.archivos = responsePubliA.publi_archivos;
            this._serviceComentarios.getCountByIdPublicacion(publi.id_publicacion, this.token)
            .then(response => {
              publi.nroComentarios = response.contador;
              this.publicaciones.push(publi);
            }).catch(error => { console.log('Error al obtener nro comentarios by id', error); });
          }).catch(error => { console.log('Error al obtener publi archivos by id_publicacion', error); });
        });
        // console.log(this.publicaciones);
      }).catch(error => { console.log('Error al obtener Autores por id_investigador', error); });
    }).catch(error => { console.log('Error al obtener investigador por id_persona', error); });
  }

}
