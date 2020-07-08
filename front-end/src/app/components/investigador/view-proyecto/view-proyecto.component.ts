import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyArchivosService } from 'src/app/services/admin/proy-archivos.service';
import { GLOBAL } from 'src/app/services/global';
import { Subscription } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { PermisoArchivosService } from 'src/app/services/proyecto/permiso-archivos.service';
import { ConveniosService } from 'src/app/services/proyecto/convenios.service';
import { ConvArchivosService } from 'src/app/services/proyecto/conv-archivos.service';
import { ContratadosService } from 'src/app/services/proyecto/contratados.service';
import { ContraArchivosService } from 'src/app/services/proyecto/contra-archivos.service';

@Component({
  selector: 'app-view-proyecto',
  templateUrl: './view-proyecto.component.html',
  styleUrls: ['./view-proyecto.component.css']
})
export class ViewProyectoComponent implements OnInit {

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
  public archivo_selected1: string;
  public archivo_selected2: string;
  public archivo_selected3: string;
  public filesToUpload: Array<File> = [];
  public sidebarVisible: boolean = true;
  public titulo: string = '';
  public permisos: boolean = false;


  // MANEJO DE ARCHIVOS
  accept = 'pdf'; // *
  files: File[] = [];
  progress: number;
  //url = 'https://evening-anchorage-3159.herokuapp.com/api/'
  //url = 'https://jquery-file-upload.appspot.com/';
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

  names: any = [];

  // manejo de archivos
  public proy_archivos: any[];
  public proy_archivo: any = {};
  public archivo: any = {};
  public archivos: any[];

  // search
  search = new FormControl('');
  public valorBusqueda = '';

  // tipo titulo archivos
  public tituloArch = 'Documentos principales';


  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthService,
    private modalService: NgbModal,
    private _serviceProyArch: ProyArchivosService,
    private _serviceProyecto: ProyectosService,
    private _serviceInvProyectos: InvProyectosService,
    private _servicePermisoArchivos: PermisoArchivosService,
    private _serviceConvenios: ConveniosService,
    private _serviceConvArchivos: ConvArchivosService,
    private _serviceContratados: ContratadosService,
    private _serviceContraArchivos: ContraArchivosService
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
    this.getProArchivosByIdProyecto(this.id);
    this.getProyecto(this.id);
    // buscador
    this.search.valueChanges.pipe( debounceTime(300) )
    .subscribe(value => this.valorBusqueda = value );
  }
  getProyecto(id: number) {
    this._serviceProyecto.getProyecto(id, this.token)
    .then(responseProyecto => { 
      this.proyecto = responseProyecto.proyecto;
      console.log(this.proyecto);
      this._serviceInvProyectos.getInv_proyectosByIdProyecto(this.proyecto.id_proyecto, this.token)
      .then(responseInvProy => {
        // console.log(responseInvProy.inv_proyectos);
        this.proyecto.investigadores = responseInvProy.inv_proyectos;
        // console.log(this.proyecto);
      }).catch(error => { console.log('Error al obtener Inv Proyecto by Id Proyecto', error); });
    }).catch(error => { console.log('error al obtener proyecto', error); });
  }
  getProArchivosByIdProyecto(id: number) {
    this._serviceProyArch.getProy_archivosByIdProyecto(id, this.token)
    .then(responseProyArch => {
      this.proy_archivos = responseProyArch.proy_archivos;
    })
    .catch(error => { console.log('error al obtener proy_archivos', error); });
  }

  // Funcion para obtener los archivos de principales, permisos, convenios, contratos, proyecto final, otros
  getArchivosByTipo(tipo: number){
    this.archivos = [];
    // this.tipoArch = tipo;
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
  openModalArchivo(content, size, id: number) {
    this.modalService.open(content, { size: size });

    // this._serviceArchivos.getArchivoById(this.token, id)
    // .then(responseArchivo => {
    //   this.archivo = responseArchivo.archivo;
    // })
    // .catch(error => { console.log('error al obtener el archivo', error); });

  }
  openModal(content, size, num) {
    this.modalService.open(content, { size: size });
    // this.vaciarProyecto();
    switch (num) {
      case 1:
        this.titulo = 'Petición a coordinador';
        this.permisos = false;
        break;
      default:
        console.log('error al navegar');
        break;
    }
  }
  guardar() {
    console.log('Archivos', this.files);
    console.log('PROGRESO', this.progress);
    console.log(this.hasBaseDropZoneOver);
    console.log(this.httpEmitter);
    console.log(this.httpEvent);
    console.log(this.lastFileAt);
    console.log(this.sendableFormData);
    console.log(this.dragFiles);
    console.log(this.validComboDrag);
    console.log(this.lastInvalids);
    console.log(this.fileDropDisabled);
    console.log(this.maxSize);
    console.log(this.baseDropValid);

    this.modalService.dismissAll();
  }
  editarArchivo() {

  }
  fileChangeEvent(fileInput: any, pos: number) {
    if (fileInput.target.files.length > 0) {
      this.filesToUpload.push(fileInput.target.files[0] as File);
    }
    switch (pos) {
      case 0:
        this.archivo_selected1 = this.filesToUpload
          ? fileInput.target.files[0].name
          : '';
        break;
      case 1:
        this.archivo_selected2 = this.filesToUpload
          ? fileInput.target.files[0].name
          : '';
        break;
      case 2:
        this.archivo_selected3 = this.filesToUpload
          ? fileInput.target.files[0].name
          : '';
        break;
      default:
        console.log('error');
        break;
    }
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
    this.names.length = 0;
    if (this.httpEmitter) {
      console.log('Cancelado');
      this.httpEmitter.unsubscribe();
    }
  }
  public setName(name: any) {
    this.names.push({ nombre: this.obtenerNombreArchivo(name.name) });
  }
  public deleteName(pos: number) {
    this.names.splice(pos, 1);
  }
  getDate() {
    return new Date();
  }
  vaciar() {
    this.names = {
      nombre: '',
      descripcion: ''
    };
  }

  fileChange(files: any) {
    this.lastFileAt = this.getDate();
    this.setName(files[files.length - 1]);
  }

}
