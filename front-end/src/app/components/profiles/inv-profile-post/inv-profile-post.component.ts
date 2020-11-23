import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { AutoresService } from 'src/app/services/proyecto/autores.service';
import { ComentariosService } from 'src/app/services/proyecto/comentarios.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { PublicacionesService } from 'src/app/services/proyecto/publicaciones.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-inv-profile-post',
  templateUrl: './inv-profile-post.component.html',
  styleUrls: ['./inv-profile-post.component.css']
})
export class InvProfilePostComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public id_publicacion: number;
  private token: string;
  public url: string;
  public who: string;

  public comentario: any = {};

  public publicacion: any = {};
  public archivos: any = [];
  public comentarios: any = [];
  public persona: any = {
    fotografia: {
      imagen: 'photo_default.png'
    }
  };

  public id_persona: number;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _servicePublicaciones: PublicacionesService,
    private _serviceComentarios: ComentariosService,
    private _servicePubliArchivos: PubliArchivosService,
    private _serviceInvestigador: InvestigadoresService,
    private _serviceAutores: AutoresService,
    private _auth: AuthService,
    private toastr: ToastrService,
    private modalService: NgbModal
    
    ) {
      this.token = this._auth.getToken();
      this.url = GLOBAL.url;
      this.who = GLOBAL.who;
      // this.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
  }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      this.id_persona = params.id_persona;
      this.id_publicacion = params.id_publicacion;
    });
    this.obtenerPublicacion();
    this.obtenerComentarios();
    this.obtenerInvestigador();
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
      this.publicacion.archivos = [];
      this._servicePubliArchivos.getPubliArchivosByIdPublicacion(this.id_publicacion, this.token)
      .then(responseAr => {
        this.publicacion.archivos = responseAr.publi_archivos;
        this._serviceComentarios.getCountByIdPublicacion(this.publicacion.id_publicacion, this.token)
        .then(response => {
          this.publicacion.nroComentarios = response.contador;
          this.publicacion.autor = this.publicacion.autores;
          this.publicacion.autores = '';
          this._serviceAutores.getAutoresByIdPublicacionAndEstado(this.publicacion.id_publicacion, true, this.token)
          .then(responseA => {
            var contadorA = 0;
            responseA.autores.forEach(autor => {
              contadorA++;
              if (contadorA === responseA.autores.length) {
                this.publicacion.autores = this.publicacion.autores + `${autor.investigadore.persona.grado_academico} ${autor.investigadore.persona.nombres} ${autor.investigadore.persona.paterno} `;
                // this.publicaciones.push(publi);
              } else {
                this.publicacion.autores = this.publicacion.autores + `${autor.investigadore.persona.grado_academico} ${autor.investigadore.persona.nombres} ${autor.investigadore.persona.paterno}, `;
              }
            });
          }).catch(error => { console.log('Error al obtener autores', error); });
        }).catch(error => { console.log('Error al obtener nro comentarios by id', error); });


      }).catch(error => { console.log('Error al obtener archivos por id publicacion', error); });
    }).catch(error => { console.log('Error al obtener publicacion por id', error); });
  }
  obtenerComentarios() {
    this._serviceComentarios.getComentariosByIdPublicacionAndEstado(this.id_publicacion, true, this.token)
    .then(response => {
      this.comentarios = response.comentarios;
      // console.log(this.comentarios);
    }).catch(error => { console.log('Error al obtener comentarios por id publicacion', error); });
  }
  obtenerInvestigador() {
    this._serviceInvestigador.getInvestigadorByIdPersona(this.id_persona, this.token)
    .then(response => {
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

  openModalNuevoComentario(content, size, publicacion: any) {
    this.modalService.open(content, { size: size });
    this.publicacion = publicacion;
  }
  guardarComentario() {
    this.comentario.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
    this.comentario.id_publicacion = this.publicacion.id_publicacion;
    if (this.comentario.id_comentario) {
      // actualizar
      this._serviceComentarios.update(this.comentario.id_comentario, this.comentario, this.token)
        .then(response => {
          // console.log(response);
          this.obtenerComentarios();
          this.modalService.dismissAll();
          this.toastr.success('Comentario actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar comentario', error);
          this.toastr.error('Error al actualizar comentario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else {
      if (this.publicacion.id_publicacion) {
        this._serviceComentarios.save(this.comentario, this.token)
        .then(response => {
          // console.log(response);
          this.obtenerComentarios();
          this.modalService.dismissAll();
          this.toastr.success('Comentario guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al guardar comentario', error);
          this.toastr.error('Error al guardar comentario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
      }
    }
  }

}
