import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { NgbModal, NgbDatepickerI18n, NgbDateStruct, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProyArchivosService } from 'src/app/services/admin/proy-archivos.service';
import { GLOBAL } from 'src/app/services/global';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { PermisoArchivosService } from 'src/app/services/proyecto/permiso-archivos.service';
import { UploadArchivoService } from 'src/app/services/upload/upload-archivo.service';


import { ConveniosService } from 'src/app/services/proyecto/convenios.service';
import { ConvArchivosService } from 'src/app/services/proyecto/conv-archivos.service';
import { ContratadosService } from 'src/app/services/proyecto/contratados.service';
import { ContraArchivosService } from 'src/app/services/proyecto/contra-archivos.service';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';

import { ToastrService } from 'ngx-toastr';

// datapicker spanish
const I18N_VALUES = {
  es: {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    format: 'dd-mm-yyyy'
  }
};
@Injectable() export class I18n {
  language = 'es';
}
@Injectable() export class CustomDatepickerI18n extends NgbDatepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }
  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-details-proyecto',
  templateUrl: './details-proyecto.component.html',
  styleUrls: ['./details-proyecto.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }  ]
})
export class DetailsProyectoComponent implements OnInit {

  public id: number;

  public token: string;
  public url: string;
  public who: string;
  public proyectos: any[];
  public proyecto: any = {
    investigadore: {
      persona: {}
    }
  };

  // cambios de archivo
  public archivo_selected: string = '';
  public filesToUpload: Array<File> = [];
  public sidebarVisible: boolean = true;
  public titulo: string = '';
  public tipoModal: number = 0;
  public tipoModalShow = true;


  // MANEJO DE ARCHIVOS
  accept = 'pdf'; // *
  files: Array<File> = [];
  progress: number;
  hasBaseDropZoneOver: boolean = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<{}>;
  lastFileAt: Date;

  sendableFormData: FormData; //populated via ngfFormData directive

  dragFiles: any;
  validComboDrag: any;
  lastInvalids: any;
  fileDropDisabled: any;
  maxSize: any;
  baseDropValid: any;

  public datosArchivo: any = [];
  public antFileTam = 0;

  // permiso : SERNAP
  public permiso = {
    id_proyecto: null,
    id_tipo: '',
    tipo: 'solicitud',
    nombre: '',
    descripcion: ''
  };

  // manejo de archivos
  public archivos: any[];
  public archivo: any = {};

  // search
  search = new FormControl('');
  public valorBusqueda = '';

  // convenio
  public convenio: any = { tipo: '' };

  // personal
  public personal_rrhh: any = { tipo: ''};

  public fechainicio: any = {};
  public fechafinal: any = {};

  // tipo archivo: para editar
  private tipoArch = 0;
  // tipo titulo archivos
  public tituloArch = 'Documentos principales';


  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthService,
    private modalService: NgbModal,
    public calendar: NgbCalendar,
    private _serviceProyArch: ProyArchivosService,
    private _serviceProyecto: ProyectosService,
    private _servicePermisoArchivos: PermisoArchivosService,
    private _uploadArchivo: UploadArchivoService,
    private _serviceConvenios: ConveniosService,
    private _serviceConvArchivos: ConvArchivosService,
    private _serviceContratados: ContratadosService,
    private _serviceContraArchivos:ContraArchivosService,
    private _serviceInvProyectos: InvProyectosService,
    private toastr: ToastrService

    ) {
      this.token = this._auth.getToken();
      this.url = GLOBAL.url;
      this.who = GLOBAL.who;
    }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.id = params.id;
    });
    this.getArchivosByTipo(0);
    this.getProyecto(this.id);
    // buscador
    this.search.valueChanges.pipe( debounceTime(300) )
    .subscribe(value => this.valorBusqueda = value );
  }

  // Funcion para obtener los archivos de principales, permisos, convenios, contratos, proyecto final, otros
  getArchivosByTipo(tipo: number){
    this.archivos = [];
    console.log(tipo);
    this.tipoArch = tipo;
    switch (tipo) {
      case 0:
        this.tituloArch = 'Documentos - Principales';
        this._serviceProyArch.getProy_archivosByIdTipo(this.id, 1, this.token)
        .then(responseProyArch => {
          this.archivos = responseProyArch.proy_archivos;
        }).catch(error => { console.log('error al obtener proy_archivos', error); });
        break;
      case 1:
        this.tituloArch = 'Documentos - Permisos';
        this._servicePermisoArchivos.getPermisoArchivosByIdProyecto(this.id, this.token)
        .then(responsePermisoArch => {
          this.archivos = responsePermisoArch.permiso_archivos;
        }).catch(error => { console.log('error al obtener permiso archivos', error); });
        break;
      case 2:
        this.tituloArch = 'Documentos - Suscripcion convenios';
        this._serviceConvenios.getConveniosByIdProyecto(this.id, this.token)
        .then(responseConv => {
          responseConv.convenios.forEach(convenio => {
            var convArch = {
              id_convenio: convenio.id_convenio,
              archivo:  convenio.archivo,
              nombre: convenio.nombre_archivo,
              descripcion: convenio.descripcion_archivo,
              id_tipo: convenio.id_tipo,
              createdAt: convenio.createdAt,
              convArchivos: Array,
              estado: convenio.estado
            };
            this._serviceConvArchivos.getConvArchivosByIdConvenio(convenio.id_convenio, this.token)
            .then(responseConvArch => {
              convArch.convArchivos = responseConvArch.conv_archivos;
              this.archivos.push(convArch);
            }).catch(error => { console.log('error al obtener convenio archivos', error); });
          });
          console.log(this.archivos);
        }).catch(error => { console.log('error al obtener convenios', error); });
        break;
      case 3:
        this.tituloArch = 'Documentos - Personal contratado';
        this._serviceContratados.getContratadosByIdProyecto(this.id, this.token)
        .then(responseContra => {
          responseContra.contratados.forEach(contratado => {
            var contraArch = {
              id_contratado: contratado.id_contratado,
              archivo:  contratado.archivo,
              nombre: contratado.nombre_archivo,
              descripcion: contratado.descripcion_archivo,
              id_tipo: contratado.id_tipo,
              createdAt: contratado.createdAt,
              convArchivos: Array,
              estado: contratado.estado
            };
            this._serviceContraArchivos.getContraArchivosByIdContratado(contratado.id_contratado, this.token)
            .then(responseContraArch => {
              contraArch.convArchivos = responseContraArch.contra_archivos;
              this.archivos.push(contraArch);
            }).catch(error => { console.log('error al obtener contratado archivo por id contratado', error); });
          });
          // console.log(this.archivos);
        }).catch(error => { console.log('error al obtener contratados', error); });
        break;
      case 6:
        this.tituloArch = 'Documentos - Proyecto final';
        // console.log(this.tipoArch);
        this._serviceProyArch.getProy_archivosByIdTipo(this.id, 6, this.token)
        .then(responseProyArch => {
          this.archivos = responseProyArch.proy_archivos;
          // console.log(responseProyArch);
        }).catch(error => { console.log('error al obtener proy_archivos', error); });
        break;
      case 7:
        this.tituloArch = 'Documentos -  Otros';
        this._serviceProyArch.getProy_archivosByIdTipo(this.id, 7, this.token)
        .then(responseProyArch => {
          this.archivos = responseProyArch.proy_archivos;
          // console.log(responseProyArch);
        }).catch(error => { console.log('error al obtener proy_archivos', error); });
        break;
      default:
        break;
    }
  }

  openArchivo(pdf: string) {
    window.open(this.who + pdf, '_blank');
  }
  openModalArchivo(content1, size, archivo: any) {
    // console.log(archivo);
    this.vaciar();
    this.modalService.open(content1, { size: size }); 
    this.archivo = {
      nombre: archivo.nombre,
      descripcion: archivo.descripcion,
      estado: archivo.estado
    };
    if (archivo.id_tipo === 1) {
      // archivo principal
      this.archivo.id_proy_archivo = archivo.id_proy_archivo;
      this.tipoModal = 10;
    } else if ( 2 <= archivo.id_tipo && archivo.id_tipo <= 5) {
      // archivo permiso (DGB, SERNAP, CITES, BIOETICA)
      this.archivo.id_permiso_archivo = archivo.id_permiso_archivo;
      this.tipoModal = 11;
    } else if (archivo.id_tipo === 6) {
      // archivos cierre proyecto
      this.archivo.id_proy_archivo = archivo.id_proy_archivo;
      this.tipoModal = 12;
    } else if (archivo.id_tipo === 7) {
      // archivos otros
      this.archivo.id_proy_archivo = archivo.id_proy_archivo;
      this.tipoModal = 13;
    } else if (archivo.id_tipo === 8) {
      if (archivo.id_conv_archivo) {
        // archivos conv_archivos
        this.archivo.id_conv_archivo = archivo.id_conv_archivo;
        this.tipoModal = 14;
      } else {
        // archivo convenio
        this.archivo.id_convenio = archivo.id_convenio;
        this.tipoModal = 15;
      }
    } else if (archivo.id_tipo === 9) {
      if (archivo.id_contra_archivo) {
        // archivos contra_archivos
        this.archivo.id_contra_archivo = archivo.id_contra_archivo;
        this.tipoModal = 16;
      } else {
        // archivos contratados
        this.archivo.id_contratado = archivo.id_contratado;
        this.tipoModal = 17;
      }
    }
  }
  openModalArchivoVarios(content, size, archivo: any) {
    // console.log(archivo);
    if (archivo.id_tipo === 8) {
      this.openModal(content, size, 6); // archivos convenios
      this._serviceConvenios.getConvenioById(archivo.id_convenio, this.token)
      .then(responseConv => {
        // console.log(responseConv);
        this.convenio = responseConv.convenio;
        var date = new Date(this.convenio.fechaini);
        this.fechainicio = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        var date = new Date(this.convenio.fechafin);
        this.fechafinal = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
      }).catch(error => { console.log('Error al obtener convenio por id', error); });

    } else if (archivo.id_tipo === 9) {
      this.openModal(content, size, 7); // archivos contratados
      this._serviceContratados.getContratadoById(archivo.id_contratado, this.token)
      .then(responseContra => {
        // console.log(responseContra);
        this.personal_rrhh = responseContra.contratado;
        var date = new Date(this.personal_rrhh.fechaini);
        this.fechainicio = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        var date = new Date(this.personal_rrhh.fechafin);
        this.fechafinal = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
      }).catch(error => { console.log('Error al obtener contratado por id', error); });
    }
  }
  openModal(content, size, num) {
    this.vaciar();
    this.modalService.open(content, { size: size });
    switch (num) {
      case 1:
        this.titulo = 'Subir archivos';
        this.tipoModal = 1;
        this.tipoModalShow = true;
        break;
      case 2:
        this.titulo = 'Permisos';
        this.tipoModal = 2;
        this.tipoModalShow = true;
        break;
      case 3:
        this.titulo = 'Suscripcion convenios';
        this.tipoModal = 3;
        this.tipoModalShow = true;
        break;
      case 4:
        this.titulo = 'Personal contradado - RECURSOS HUMANOS' ;
        this.tipoModal = 4;
        this.tipoModalShow = true;
        break;
      case 5:
        this.titulo = 'Proyecto final';
        this.tipoModal = 5;
        this.tipoModalShow = true;
        break;
      case 6:
        // actualizar convenio
        this.titulo = 'Actualizar Suscripcion convenio';
        this.tipoModal = 3;
        this.tipoModalShow = false;
        break;
      case 7:
        // actualizar contrato
        this.titulo = 'Actualizar Personal contradado - RECURSOS HUMANOS';
        this.tipoModal = 4;
        this.tipoModalShow = false;
        break;
      default:
        console.log('error al navegar');
        this.tipoModal = -1;
        break;
    }
  }
  guardar() {
    // console.log(this.files);
    // console.log(this.tipoModal);
    let sw = true;
    switch (this.tipoModal) {
      case 1:
        // Otros
        for (let pos = 0; pos < this.files.length; pos++) {
          this.datosArchivo[pos].id_proyecto = this.id;
          this.datosArchivo[pos].id_tipo = 7;  // otros
          this._serviceProyArch.saveProy_archivo(this.datosArchivo[pos], this.token)
          .then(responseProyArch => {
            this._uploadArchivo.uploadArchivo(this.url + 'upload-proyecto-archivo/' + responseProyArch.proy_archivo.id_proy_archivo, this.files[pos], this.token)
            .then((responseArchivo: any) => { 
              if (sw) { this.toastr.success('Archivos guardados', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); sw = false; }
            }).catch(error => {
              console.log('Error al crear archivo del Inv_proyecto', error);
              this.toastr.error('Error al guardar archivo ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          }).catch(error => {
            console.log('Error al crear el proyecto archivo', error);
            this.toastr.error('Error al guardar proyecto ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          });
        }
        this.getArchivosByTipo(7); // mostrar otros
        this.modalService.dismissAll();
        break;
      case 2:
        // Permisos
        this.permiso.id_proyecto = this.id;
        this.datosArchivo.forEach(datoArchivo => {
          datoArchivo.tipo = this.permiso.id_tipo;
        });
        // archivo
        if (this.files) {
            this.permiso.nombre = this.datosArchivo[0].nombre;
            this.permiso.descripcion = this.datosArchivo[0].descripcion;
            this._servicePermisoArchivos.save(this.permiso, this.token)
              .then(response => {
                this._uploadArchivo.uploadArchivo(this.url + 'upload-permiso-archivo/' + response.permiso_archivos.id_permiso_archivo, this.files[0], this.token)
                  .then(responseArchivo => {
                    if (sw) { this.toastr.success('Permisos guardados', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); sw = false; }
                  }).catch(error => {
                    console.log('error al subir archivo', error);
                    this.toastr.error('Error al guardar archivo ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                  });
              }).catch(error => {
                console.log('error al crear archivo', error);
                this.toastr.error('Error al guardar proyecto ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              });
        }
        this.getArchivosByTipo(1); // mostrar permisos
        this.modalService.dismissAll();
        break;
      case 3:
        this.convenio.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
        this.convenio.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
        if (this.tipoModalShow) {
          // Convenio crear
          this.convenio.id_proyecto = this.id;
          this.convenio.archivo = '';
          this.convenio.nombre_archivo = 'Convenio de ' + this.convenio.titulo;
          this.convenio.descripcion_archivo = 'descripcion de convenio: ' + this.convenio.descripcion;
          this.convenio.id_tipo = 8;
          // console.log(this.filesToUpload[0]);
          this.datosArchivo.forEach(datoArchivo => {
            datoArchivo.id_tipo = 8;  // id_tipo: convenio
          });
          // archivo
          if (this.filesToUpload) {
            // console.log(this.convenio);
            this._serviceConvenios.save(this.convenio, this.token)
              .then(response => {
                // console.log(response);
                this._uploadArchivo.uploadArchivo(this.url + 'upload-convenio/' + response.convenios.id_convenio, this.filesToUpload[0], this.token)
                  .then((responseArchivo: any) => {
                    // aqui crear los demas archivos
                    if (this.files) {
                      for (let i = 0; i < this.files.length; i++) {
                        var conv_archivo = {
                          id_convenio: response.convenios.id_convenio,
                          archivo: '',
                          nombre: this.datosArchivo[i].nombre,
                          descripcion: this.datosArchivo[i].descripcion,
                          id_tipo: 8
                        };
                        // console.log(conv_archivo);
                        this._serviceConvArchivos.save(conv_archivo, this.token)
                        .then(responseArchivo => {
                          // console.log(responseArchivo);
                          this._uploadArchivo.uploadArchivo(this.url + 'upload-conv-archivo/' + responseArchivo.conv_archivos.id_conv_archivo, this.files[i], this.token)
                          .then(responseFile => {
                            if (sw) { this.toastr.success('Convenio guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); sw = false; }
                          }).catch(error => {
                            console.log('error al subir el archivo', error);
                            this.toastr.error('Error al subir archivo', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          });
                        }).catch(error => {
                          console.log('error al crear conv archivo', error);
                          this.toastr.error('Error al guardar archivo ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                        });
                      }
                    }
                  }).catch(error => {
                    console.log('error al subir archivo principal', error);
                    this.toastr.error('Error al subir archivo convenio', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                  });
              }).catch(error => {
                console.log('error al crear convenio', error);
                this.toastr.error('Error al guardar convenio ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              });
          }
        } else {
          // actualizar convenio
          this._serviceConvenios.update(this.convenio.id_convenio, this.convenio, this.token)
          .then(responseConv => {
            // console.log(responseConv);
            this.getArchivosByTipo(2);
            this.toastr.success('Convenio actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }).catch(error => {
            console.log('Error al actualizar convenio', error);
            this.toastr.error('Error al actualizar convenio ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          });
        }
        this.modalService.dismissAll();
        break;
      case 4:
        this.personal_rrhh.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
        this.personal_rrhh.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
        if (this.tipoModalShow) {
          // crear Contrato personal
          this.personal_rrhh.id_proyecto = this.id;
          this.personal_rrhh.archivo = '';
          this.personal_rrhh.nombre_archivo = 'Contrado de ' + this.personal_rrhh.nombrecompleto;
          this.personal_rrhh.descripcion_archivo = 'descripcion del documento: ' + this.personal_rrhh.descripcion;
          this.personal_rrhh.id_tipo = 9;
          // console.log(this.filesToUpload[0]);
          this.datosArchivo.forEach(datoArchivo => {
            datoArchivo.id_tipo = 9;
          });
          // archivo
          if (this.filesToUpload) {
            // console.log(this.convenio);
            this._serviceContratados.save(this.personal_rrhh, this.token)
              .then(response => {
                // console.log(response);
                this._uploadArchivo.uploadArchivo(this.url + 'upload-contratado/' + response.contratados.id_contratado, this.filesToUpload[0], this.token)
                  .then((responseArchivo: any) => {
                    // console.log(responseArchivo);
                    // aqui crear los demas archivos
                    if (this.files) {
                      for (let i = 0; i < this.files.length; i++) {
                        var contra_archivo = {
                          id_contratado: response.contratados.id_contratado,
                          archivo: '',
                          nombre: this.datosArchivo[i].nombre,
                          descripcion: this.datosArchivo[i].descripcion,
                          id_tipo: 9
                        };
                        // console.log(contra_archivo);
                        this._serviceContraArchivos.save(contra_archivo, this.token)
                        .then(responseArchivo => {
                          // console.log(responseArchivo);
                          this._uploadArchivo.uploadArchivo(this.url + 'upload-contra-archivo/' + responseArchivo.contra_archivos.id_contra_archivo, this.files[i], this.token)
                          .then(responseFile => { 
                            if (sw) { this.toastr.success('Personal contratado guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); sw = false; }
                          }).catch(error => {
                            console.log('error al subir el archivo', error);
                            this.toastr.error('Error al subir archivos ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          });
                        }).catch(error => {
                          console.log('error al crear contra archivo', error);
                          this.toastr.error('Error al guardar archivos', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                        });
                      }
                    }
                  }).catch(error => {
                    console.log('error al subir archivo principal', error);
                    this.toastr.error('Error al subir archivo personal contratado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                  });
              }).catch(error => {
                console.log('error al crear contratados', error);
                this.toastr.error('Error al guardar personal contratado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              });
          }
        } else {
          // actualizar contratado
          // console.log(this.personal_rrhh);
          this._serviceContratados.update(this.personal_rrhh.id_contratado, this.personal_rrhh, this.token)
          .then(responseContra => {
            // console.log(responseContra);
            this.getArchivosByTipo(3);
            this.toastr.success('Personal contratado actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }).catch(error => {
            console.log('Error al actualizar contratado', error);
            this.toastr.error('Error al actualizar personal contratado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          });
        }
        this.modalService.dismissAll();
        break;
      case 5:
        // Cierre de proyecto
        for (let pos = 0; pos < this.files.length; pos++) {
          this.datosArchivo[pos].id_proyecto = this.id;
          this.datosArchivo[pos].id_tipo = 6;  // Final proyecto
          this._serviceProyArch.saveProy_archivo(this.datosArchivo[pos], this.token)
          .then(responseProyArch => {
            // console.log(responseProyArch);
            this._uploadArchivo.uploadArchivo(this.url + 'upload-proyecto-archivo/' + responseProyArch.proy_archivo.id_proy_archivo, this.files[pos], this.token)
            .then((responseArchivo: any) => { 
              if (sw) { this.toastr.success('Proyecto final guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); sw = false; }
            }).catch(error => {
              console.log('Error al crear archivo del Inv_proyecto', error);
              this.toastr.error('Error al subir archivo de proyecto final', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          }).catch(error => {
            console.log('Error al crear el proyecto archivo', error);
            this.toastr.error('Error al guardar proyecto final', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          });
        }
        this.modalService.dismissAll();
        this.getArchivosByTipo(6);
        break;
      default:
        console.log('Error funcion guardar');
        break;
    }
  }
  editarArchivo() {
    // console.log(this.archivo);
    // console.log(this.tipoModal);
    switch (this.tipoModal) {
      case 10:
        // principal
        this._serviceProyArch.updateProy_archivo(this.archivo.id_proy_archivo, this.archivo, this.token)
        .then(responseProyArch => {
          this.getArchivosByTipo(0);
          this.toastr.success('Archivo principal actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar Proy_archivo', error);
          this.toastr.error('Error al actualizar archivo principal', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 11:
        // permiso
        this._servicePermisoArchivos.update(this.archivo.id_permiso_archivo, this.archivo, this.token)
        .then(responsePerArch => {
          this.getArchivosByTipo(1);
          this.toastr.success('Archivo permiso actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar permiso_archivo', error);
          this.toastr.error('Error al actualizar archivo permiso', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 12:
        // final
        this._serviceProyArch.updateProy_archivo(this.archivo.id_proy_archivo, this.archivo, this.token)
        .then(responseProyArch => { 
          this.getArchivosByTipo(6);
          this.toastr.success('Archivo proyecto final actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar Proy_archivo', error);
          this.toastr.error('Error al actualizar archivo proyecto final', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 13:
        // otros
        this._serviceProyArch.updateProy_archivo(this.archivo.id_proy_archivo, this.archivo, this.token)
        .then(responseProyArch => {
          this.getArchivosByTipo(7);
          this.toastr.success('Archivo otros actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar Proy_archivo', error);
          this.toastr.error('Error al actualizar archivo otros', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 14:
        // conv_archivo
        this._serviceConvArchivos.update(this.archivo.id_conv_archivo, this.archivo, this.token)
        .then(responseConvArch => {
          this.getArchivosByTipo(2);
          this.toastr.success('SubArchivo convenio actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar conv_archivos', error);
          this.toastr.error('Error al actualizar Subarchivo convenio', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 15:
        // convenio
        const archivoSubir = {
          nombre_archivo: this.archivo.nombre,
          descripcion_archivo: this.archivo.descripcion,
          estado: this.archivo.estado
        };
        this._serviceConvenios.update(this.archivo.id_convenio, archivoSubir, this.token)
        .then(responseConv => {
          this.getArchivosByTipo(2);
          this.toastr.success('Archivo convenio actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar convenios', error);
          this.toastr.error('Error al actualizar archivo convenio', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 16:
        // contra_archivo
        this._serviceContraArchivos.update(this.archivo.id_contra_archivo, this.archivo, this.token)
        .then(responseContraArch => {
          this.getArchivosByTipo(3);
          this.toastr.success('SubArchivo personal contratado actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar contra_archivos', error);
          this.toastr.error('Error al actualizar Subarchivo personal contratado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      case 17:
        // contratado
        const archivoUp = {
          nombre_archivo: this.archivo.nombre,
          descripcion_archivo: this.archivo.descripcion,
          estado: this.archivo.estado
        };
        this._serviceContratados.update(this.archivo.id_contratado, archivoUp, this.token)
        .then(responseContra => {
          this.getArchivosByTipo(3);
          this.toastr.success('Archivo personal contratado actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar contratados', error);
          this.toastr.error('Error al actualizar archivo personal contratado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
        break;
      default:
        console.log('error al elegir la actualizacion');
        break;
    }
    this.modalService.dismissAll();
  }
 fileChangeEvent(fileInput: any) {
  this.filesToUpload =
    fileInput.target.files.length > 0
      ? <Array<File>>fileInput.target.files
      : null;
  this.archivo_selected =
    this.filesToUpload
      ? fileInput.target.files[0].name
      : '';
  }
  obtenerNombreArchivo(cadena: string) {
    var final = '';
    for (let i = 0; i < cadena.length - 3; i++) {
      var cad = cadena.substring(i, i + 4);
      if (cad === '.pdf') {
        return final;
      } else {
        final = final + cadena.substring(i, i + 1);
      }
    }
  }
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  cancel() {
    this.progress = 0;
    this.files.length = 0; // llevamos todo a 0
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
    if (this.httpEmitter) {
      console.log('Cancelado');
      this.httpEmitter.unsubscribe();
    }
  }
  public setName(files: any) {
    // console.log(files);
    // console.log('posicion', this.antFileTam);
    for (let i = this.antFileTam; i < files.length; i++) {
      const file = files[i];
      this.datosArchivo.push({ nombre: this.obtenerNombreArchivo(file.name) });
    }
    this.antFileTam = files.length;
    // console.log(this.datosArchivo);
  }
  public deleteName(pos: number) {
    this.datosArchivo.splice(pos, 1);
  }
  getDate() {
    return new Date();
  }
  vaciar() {
    this.datosArchivo = [];
    this.personal_rrhh = {
      tipo: '',
      nombreCompleto: '',
      ci: '',
      fechaini: null,
      fechafin: null,
      descripcion: ''
    };
    this.convenio = {
      tipo: '',
      titulo: '',
      fechaini: null,
      fechafin: null,
      descripcion: ''
    };
    this.files.length = 0;
    this.filesToUpload = [];
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
    this.convenio = { tipo: '' }; // vaciar
    this.personal_rrhh = { tipo: '' };
    this.permiso = {
      id_proyecto: null,
      id_tipo: '',
      tipo: 'solicitud',
      nombre: '',
      descripcion: ''
    };
    this.archivo_selected = '';
  }
  getProyecto(id: number) {
    this._serviceProyecto.getProyecto(id, this.token)
    .then(responseProyecto => {
      this.proyecto = responseProyecto.proyecto;
      // console.log(this.proyecto);
      this._serviceInvProyectos.getInv_proyectosByIdProyecto(this.proyecto.id_proyecto, this.token)
      .then(responseInvProy => {
        // console.log(responseInvProy.inv_proyectos);
        this.proyecto.investigadores = responseInvProy.inv_proyectos;
        // console.log(this.proyecto);
      }).catch(error => { console.log('Error al obtener Inv Proyecto by Id Proyecto', error); });
    }).catch(error => { console.log('error al obtener proyecto', error); });
  }

  formatDate(d: NgbDate): string {
    if (d === null) {
      return null;
    }
    return [
      d.year,
      (d.month < 10 ? ('0' + d.month) : d.month),
      (d.day < 10 ? ('0' + d.day) : d.day)
    ].join('-');
  }

  fileChange() {
    this.lastFileAt = this.getDate();
    this.setName(this.files);
  }
  removerTodo() {
    this.files.length = 0;
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
  }
}
