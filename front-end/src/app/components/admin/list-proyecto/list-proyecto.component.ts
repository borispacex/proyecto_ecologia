import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgbModal, NgbDatepickerI18n, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { GLOBAL } from 'src/app/services/global';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { UploadArchivoService } from 'src/app/services/upload/upload-archivo.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { ProyArchivosService } from 'src/app/services/admin/proy-archivos.service';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { Params, ActivatedRoute } from '@angular/router';

import { Proyecto } from 'src/app/interfaces/proyecto';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
  selector: 'app-list-proyecto',
  templateUrl: './list-proyecto.component.html',
  styleUrls: ['./list-proyecto.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})
export class ListProyectoComponent implements OnInit {

  public token: string;
  public proyectos: Array<Proyecto> = [];
  public url: string;
  public proyecto: any = {};
  public fechainicio: any = {};
  public fechafinal: any = {};

  // obtener droplist


  // cambios de archivo
  public archivo_selected1: string;
  public archivo_selected2: string;
  public archivo_selected3: string;
  public filesToUpload: Array<File> = [];
  public tipo_form: boolean; // true -> editar, false -> agregar
  public sidebarVisible: boolean = true;

  // datapicker
  public model: NgbDateStruct;

  // multiselect
  public dropdownLista: Array<any> = [];
  public seleccionados1: Array<any> = [];
  public seleccionados2: Array<any> = [];
  public dropdownConfiguracion1: IDropdownSettings;
  public dropdownConfiguracion2: IDropdownSettings;
  public disabled1: boolean = false;
  public disabled2: boolean = false;

  // archivos
  public archivos: any[];
  public archivo: any = {};

  // search proyectos
  search = new FormControl('');
  public valorBusqueda = '';

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private modalService: NgbModal,
    private _uploadArchivo: UploadArchivoService,
    private _serviceUsuarios: UsuariosService,
    private _serviceProyArch: ProyArchivosService,
    private _serviceProyecto: ProyectosService,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceInvProyectos: InvProyectosService,
    private _route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;

    this.dropdownConfiguracion1 = {
      singleSelection: true,
      idField: 'id_investigador',
      textField: 'nombreCompleto',
      searchPlaceholderText: 'Buscar',
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
      maxHeight: 70
    };
    this.dropdownConfiguracion2 = {
      singleSelection: false,
      idField: 'id_investigador',
      textField: 'nombreCompleto',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deselecciona todo',
      searchPlaceholderText: 'Buscar',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection: 5,
      maxHeight: 70
    };
  }

  ngOnInit() {
    this.vaciarProyecto();
    this.getUsuariosInvestigadoresActivos();
    this.comprobarTipoProyecto();
    // buscador proyectos
    this.search.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.valorBusqueda = value );
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
  openModalAgregar(content, size) {
    this.modalService.open(content, { size: size });
    this.vaciarProyecto();
    this.tipo_form = false;  // guardar
    this.disabled1 = false;
    this.disabled2 = false;
  }
  openModalEditar(content, size, id: number) {
    this.proyecto.id_proyecto = id;
    this.modalService.open(content, { size: size });
    this.tipo_form = true;  // editar
    this.seleccionados1 = [];
    this.seleccionados2 = [];
    this._serviceProyecto.getProyecto(id, this.token)
      .then(responseProy => {
        // console.log('proyecto ', responseProy.proyecto);
        this.proyecto = responseProy.proyecto;
        var date = new Date(this.proyecto.fechaini);
        // console.log(date);
        this.fechainicio = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        // console.log(this.fechainicio);
        var date = new Date(this.proyecto.fechafin);
        // console.log(date);
        this.fechafinal = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        // console.log(this.fechafinal);
        this.disabled1 = true;
        this.disabled2 = true;
        this._serviceInvestigadores.getInvestigador(this.proyecto.id_coordinador, this.token)
          .then(responseInvestigador => {
            this.seleccionados1 = [];
            this.seleccionados1.push({
              id_investigador: responseInvestigador.investigador.id_investigador,
              nombreCompleto: responseInvestigador.investigador.persona.nombres + ' ' + responseInvestigador.investigador.persona.paterno
                + ' ' + responseInvestigador.investigador.persona.materno
            });
          })
          .catch(error => { console.log('error al obtener el coordinador investigador', error); });
        this._serviceInvProyectos.getInv_proyectosByIdProyecto(this.proyecto.id_proyecto, this.token)
          .then(responseInvPro => {
            // console.log(responseInvPro.inv_proyectos);
            this.seleccionados2 = [];
            responseInvPro.inv_proyectos.forEach(invProyecto => {
              this.seleccionados2.push({
                id_investigador: invProyecto.investigadore.id_investigador,
                nombreCompleto: invProyecto.investigadore.persona.nombres + ' ' + invProyecto.investigadore.persona.paterno
                  + ' ' + invProyecto.investigadore.persona.materno
              });
            });
          }).catch(error => { console.log('error al obtener inv proyectos por id_proyecto', error); });
      }).catch(error => { console.log('error al obtener proyecto', error); });
  }
  editar() {
    this.proyecto.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
    this.proyecto.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
    this._serviceProyecto.updateproyecto(this.proyecto.id_proyecto, this.proyecto, this.token)
      .then(responseProy => {
        this.modalService.dismissAll();
        this.comprobarTipoProyecto();
        this.vaciarProyecto();
        this.toastr.success('Proyecto actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      }).catch(error => {
        console.log('Error al actualizar el proyecto ', error);
        this.toastr.error('Error al actualizar proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
  }
  agregar() {
    let sw = true;
    console.log(this.proyecto, 'proyecto');
    console.log(this.seleccionados1, 'coordinador');
    console.log(this.seleccionados2, 'investigadores');
    console.log(this.filesToUpload, 'archivos');
    this.proyecto.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
    this.proyecto.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';

    this.proyecto.id_adm = JSON.parse(localStorage.getItem('identity_user')).id_persona;
    this.proyecto.id_coordinador = this.seleccionados1[0].id_investigador;

    this._serviceProyecto.saveproyecto(this.proyecto, this.token)
      .then(responseProy => {
        console.log(responseProy);
        // inv_proyectos
        this.seleccionados2.forEach(investigador => {
          var inv_proyecto: any = {};
          inv_proyecto.id_proyecto = responseProy.proyecto.id_proyecto;
          inv_proyecto.id_investigador = investigador.id_investigador;
          this._serviceInvProyectos.saveInv_proyecto(inv_proyecto, this.token)
            .then(responseInvPro => { })
            .catch(error => {
              console.log('error al crear el inv_proyecto', error);
              this.toastr.error('Error al enlazar proyecto con investigador', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
        });
        // archivos
        sw = false;
        if (this.filesToUpload) {
          // for (let i = 0; i < this.filesToUpload.length; i++) {
          // console.log(this.filesToUpload[i]);
          var proyecto_archivo: any = {
            id_proyecto: responseProy.proyecto.id_proyecto,
            descripcion: 'Archivos necesarios para la creacion de proyecto',
            id_tipo: 1,
            nombre: this.obtenerNombreArchivo(this.filesToUpload[0].name)
          };
          // 1
          this._serviceProyArch.saveProy_archivo(proyecto_archivo, this.token)
            .then(responseProyArch => {
              console.log(responseProyArch, this.filesToUpload[0]);
              this._uploadArchivo.uploadArchivo(this.url + 'upload-proyecto-archivo/' + responseProyArch.proy_archivo.id_proy_archivo, this.filesToUpload[0], this.token)
                .then((responseArchivo: any) => {
                  console.log(responseArchivo);
                  // 2
                  proyecto_archivo.nombre = this.obtenerNombreArchivo(this.filesToUpload[1].name);
                  console.log(proyecto_archivo, this.token, this.filesToUpload[1]);
                  this._serviceProyArch.saveProy_archivo(proyecto_archivo, this.token)
                    .then(responseProyArch2 => {
                      console.log(responseProyArch2, this.filesToUpload[1]);
                      this._uploadArchivo.uploadArchivo(this.url + 'upload-proyecto-archivo/' + responseProyArch2.proy_archivo.id_proy_archivo, this.filesToUpload[1], this.token)
                        .then((responseArchivo2: any) => {
                          console.log(responseArchivo2);
                          // 3
                          proyecto_archivo.nombre = this.obtenerNombreArchivo(this.filesToUpload[2].name);
                          console.log(proyecto_archivo, this.token, this.filesToUpload[2]);
                          this._serviceProyArch.saveProy_archivo(proyecto_archivo, this.token)
                            .then(responseProyArch3 => {
                              console.log(responseProyArch3, this.filesToUpload[2]);
                              this._uploadArchivo.uploadArchivo(this.url + 'upload-proyecto-archivo/' + responseProyArch3.proy_archivo.id_proy_archivo, this.filesToUpload[2], this.token)
                                .then((responseArchivo3: any) => {
                                  console.log(responseArchivo3);
                                  this.toastr.success('Proyecto guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                                  this.modalService.dismissAll();
                                  this.comprobarTipoProyecto();
                                  this.vaciarProyecto();
                                }).catch(error => {
                                  console.log('Error al crear archivo del Inv_proyecto', error);
                                  this.toastr.error('Error al subir archivo proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                                });
                            }).catch(error => {
                              console.log('Error al crear proy Archivos', error);
                              this.toastr.error('Error al guardar archivo proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                            });
                        }).catch(error => {
                          console.log('Error al crear archivo del Inv_proyecto', error);
                          this.toastr.error('Error al subir archivo proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                        });
                    }).catch(error => {
                      console.log('Error al crear proy Archivos', error); // aqui
                      this.toastr.error('Error al guardar archivo proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                    });
                }).catch(error => {
                  console.log('Error al crear archivo del Inv_proyecto', error);
                  this.toastr.error('Error al subir archivo proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                });
            }).catch(error => {
              console.log('Error al crear proy Archivos', error);
              this.toastr.error('Error al guardar archivo proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          // }
        }
      }).catch(error => {
        console.log('error al crear proyecto', error);
        this.toastr.error('Error al guardar proyecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
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

  fileChangeEvent(fileInput: any, pos: number) {
    console.log(fileInput);
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
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  vaciarProyecto() {
    this.archivo_selected1 = '';
    this.archivo_selected2 = '';
    this.archivo_selected3 = '';
    this.fechainicio = {};
    this.fechafinal = {};
    this.proyecto = {
      titulo: '',
      fechaini: '',
      fechafin: '',
      estado: 'activo'
    };
    this.filesToUpload = [];
    this.seleccionados1 = [];
    this.seleccionados2 = [];
  }
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
  obtenerNombreArchivo(cadena: string) {
    let final = '';
    for (let i = 0; i < cadena.length - 3; i++) {
      let cad = cadena.substring(i, i + 4);
      if (cad === '.pdf') {
        return final;
      } else {
        final = final + cadena.substring(i, i + 1);
      }
    }
  }
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

  tipoFormulario(tipo_form) {
    // tipo_form ? editar() : agregar()
    if (tipo_form) {
      this.editar();
    } else {
      this.agregar();
    }
  }
}
