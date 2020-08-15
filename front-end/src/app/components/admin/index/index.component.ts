import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpEvent } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public sidebarVisible: boolean = true;
  // public isResizing: boolean = false;

  // variable para subir archivos
  private url: string;
  archivoSubir;
  multipleArchivosSubir = [];
  progress = 0;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    // setTimeout( () => {
    //   this.showToastr();
    // }, 1000);
  }

  showToastr() {
    this.toastr.info('Hola, bienvenido administrador.', undefined, { closeButton: true, positionClass: 'toast-top-right' });
  }

  toggleFullWidth() {
    // this.isResizing = true;
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    let that = this;
    setTimeout(() => {
      // that.isResizing = false;
      that.cdr.detectChanges();
    }, 400);
  }

  // funciones para subir los archivos
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.archivoSubir = file;
    }
  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleArchivosSubir = event.target.files;
    }
  }

  onSubmit(){
    if (this.archivoSubir) {
      const formData = new FormData();
      formData.append('file', this.archivoSubir);

      this.http.post<any>(this.url + 'uploadfile', formData, { reportProgress: true, observe: 'events' }).subscribe(
        (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Solicitud ha sido hecha!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Se ha recibido el encabezado de respuesta!');
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(event.loaded / event.total * 100);
              console.log(`Uploaded! ${this.progress}%`);
              break;
            case HttpEventType.Response:
              if (event.body.statusCode === 200) {
                console.log('subio correctamente los archivos', event.body);
                // Reset the file input
                setTimeout(() => {
                  this.progress = 0;
                  this.multipleArchivosSubir = null;
                }, 1500);
              }
          }
        },
        er => { console.log('Error al subir el archivo', er); });
    }
  }

  onMultipleSubmit(){
    if (this.multipleArchivosSubir) {
      const formData = new FormData();
      for (let archivo of this.multipleArchivosSubir) {
        formData.append('files', archivo);
      }
      this.http.post<any>(this.url + 'multipleUploadfiles', formData, { reportProgress: true, observe: 'events' }).subscribe(
        (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Solicitud ha sido hecha!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Se ha recibido el encabezado de respuesta!');
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(event.loaded / event.total * 100);
              console.log(`Uploaded! ${this.progress}%`);
              break;
            case HttpEventType.Response:
              if (event.body.statusCode === 200) {
                console.log('subio correctamente los archivos', event.body);
                // Reset the file input
                setTimeout(() => {
                  this.progress = 0;
                  this.multipleArchivosSubir = null;
                }, 1500);
              }
          }
        },
        er => { console.log('Error al subir los archivos', er); });
    }
  }

}
