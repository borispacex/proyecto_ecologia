import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FotografiasService } from 'src/app/services/upload/fotografias.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-fotografia',
  templateUrl: './list-fotografia.component.html',
  styleUrls: ['./list-fotografia.component.css']
})
export class ListFotografiaComponent implements OnInit {

  public token: string;
  public fotografias: any[] = [];
  public url: string;
  public fotografia: any = {};
  public image_selected: string;
  public filesToUpload: Array<File>;
  public tipo_form: boolean; // true -> editar, false -> agregar

  public sidebarVisible: boolean = true;

  // buscador
  // search proyectos
  search = new FormControl('');
  public valorBusqueda = '';

  constructor(
    private _serviceFotografias: FotografiasService,
    private _auth: AuthService,
    private modalService: NgbModal,
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _upload: UploadService,
    private toastr: ToastrService
    ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getFotografiasAdmin();
    this.vaciarFotografia();
    // buscador proyectos
    this.search.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.valorBusqueda = value );
  }
  getFotografiasAdmin() {
    this._serviceFotografias.getFotografiasAdmin(this.token)
      .then(response => {
        this.fotografias = response.fotografias;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getFotografiasTrue() {
    this._serviceFotografias.getFotografiasTrue(this.token)
      .then(response => {
        this.fotografias = response.fotografias;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getFotografiasFalse() {
    this._serviceFotografias.getFotografiasFalse(this.token)
      .then(response => {
        this.fotografias = response.fotografias;
      })
      .catch(error => {
        console.log(error);
      });
  }

  openModalAgregar(content, size) {
    this.modalService.open(content, { size: size });
    this.vaciarFotografia();
    this.tipo_form = false;  // guardar
  }
  openModalEditar(content, size, id: number) {
    this.fotografia.id_fotografia = id;
    this.modalService.open(content, { size: size });
    this.tipo_form = true;  // editar
    this._serviceFotografias.getFotografiasById(id, this.token)
      .then(response => {
        this.image_selected = response.fotografia.imagen;
        this.fotografia = response.fotografia;
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  editar() {
    this._serviceFotografias.update(this.fotografia.id_fotografia, this.fotografia, this.token)
      .then(response => {
        if (this.filesToUpload) {
          this._upload.upload(this.url + 'upload-fotografia/' + response.fotografia.id_fotografia, this.filesToUpload, this.token)
            .then(fotografias => {
              // console.log('fotografias', fotografias);
              this.modalService.dismissAll();
              this.getFotografiasAdmin();
              this.vaciarFotografia();
              this.toastr.success('Fotografia actualizada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            })
            .catch(error => {
              console.log('Error al subir fotografia actualizada', error);
              this.toastr.error('Error al subir fotografia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
        } else {
          this.modalService.dismissAll();
          this.getFotografiasAdmin();
          this.vaciarFotografia();
        }
      }).catch(error => {
        console.log('Error al actualizar fotografia', error);
        this.toastr.error('Error al actualizar fotografia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
  }
  agregar() {
    // this.fotografia.usuario_creacion = this._auth.getIdentity().usuario;
    this._serviceFotografias.save(this.fotografia, this.token)
      .then(response => {
        if (this.filesToUpload) {
          this._upload.upload(this.url + 'upload-fotografia/' + response.fotografias.id_fotografia, this.filesToUpload, this.token)
            .then(fotografias => {
              // console.log('fotografias', fotografias);
              this.modalService.dismissAll();
              this.getFotografiasAdmin();
              this.vaciarFotografia();
              this.toastr.success('Fotografia guardada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            }).catch(error => {
              this.modalService.dismissAll();
              this.getFotografiasAdmin();
              this.vaciarFotografia();
              console.log('Error al subir fotografia', error);
              this.toastr.error('Error al subir fotografia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
        }
      })
      .catch(error => {
        console.log('Error al guardar fotografia', error);
        this.toastr.error('Error al guardar fotografia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload =
      fileInput.target.files.length > 0
        ? <Array<File>>fileInput.target.files
        : null;
    this.image_selected = this.filesToUpload
      ? fileInput.target.files[0].name
      : '';
  }
  vaciarFotografia() {
    this.image_selected = '';
    this.fotografia = {
      id_fotografia: '',
      tipo: '',
      descripcion: '',
      numero: '',
      estado: false
    };
  }
  eliminarFotografia(id: number) {
    this._serviceFotografias.update(id, { estado: false }, this.token)
    .then(response => {
      // console.log(response);
      this.getFotografiasAdmin();
    }).catch(error => { console.log('Error al eliminar la foto', error); });
  }
}
