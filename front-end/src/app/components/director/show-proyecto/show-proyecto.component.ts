import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ProyArchivosService } from 'src/app/services/admin/proy-archivos.service';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { LugarDesarrollosService } from 'src/app/services/proyecto/lugar-desarrollos.service';
import { CursosService } from 'src/app/services/proyecto/cursos.service';
import { EventosService } from 'src/app/services/proyecto/eventos.service';
import { NotaPrensasService } from 'src/app/services/proyecto/nota-prensas.service';
import { ExposicionesService } from 'src/app/services/proyecto/exposiciones.service';
import { CursoArchivosService } from 'src/app/services/proyecto/curso-archivos.service';
import { EventoArchivosService } from 'src/app/services/proyecto/evento-archivos.service';
import { NotaArchivosService } from 'src/app/services/proyecto/nota-archivos.service';
import { ExpoArchivosService } from 'src/app/services/proyecto/expo-archivos.service';
import { UploadArchivoService } from 'src/app/services/upload/upload-archivo.service';
import { PermisoArchivosService } from 'src/app/services/proyecto/permiso-archivos.service';
import { ConveniosService } from 'src/app/services/proyecto/convenios.service';
import { ConvArchivosService } from 'src/app/services/proyecto/conv-archivos.service';
import { ContratadosService } from 'src/app/services/proyecto/contratados.service';
import { ContraArchivosService } from 'src/app/services/proyecto/contra-archivos.service';
import { ExpositoresService } from 'src/app/services/proyecto/expositores.service';
import { UnidadesService } from 'src/app/services/proyecto/unidades.service';
import { ToastrService } from 'ngx-toastr';
import { PublicacionesService } from 'src/app/services/proyecto/publicaciones.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { AutoresService } from 'src/app/services/proyecto/autores.service';
import { ActivatedRoute, Params } from '@angular/router';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ComentariosService } from 'src/app/services/proyecto/comentarios.service';
import { HttpEvent } from '@angular/common/http';
import { SeguiArchivosService } from 'src/app/services/proyecto/segui-archivos.service';
import { SeguimientosService } from 'src/app/services/proyecto/seguimientos.service';
import { FinanciamientosService } from 'src/app/services/proyecto/financiamientos.service';

@Component({
  selector: 'app-show-proyecto',
  templateUrl: './show-proyecto.component.html',
  styleUrls: ['./show-proyecto.component.css']
})
export class ShowProyectoComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public pieOptions: any = {};
  public isResizing: boolean = false;

  public id: number;

  public token: string;
  public url: string;
  public who: string;
  public proyectos: any[] = [];
  public proyecto: any = {
    investigadore: {
      persona: {}
    }
  };

  // cambios de archivo
  public tituloFormulario = '';
  public tipoDifusion = 0;

  // difusion
  public difusion: any = {};

  // manejo de archivos
  public proy_archivos: any[] = [];
  public proy_archivo: any = {};

  public basica_tecnica: any = {
    tipo: '',
    estado: true
  };
  public lugar_desarrollo: any = {
    departamento: '',
    provincia: '',
    estado: true
  };

  // tabs
  public fragment: string = 'tavArchivos';
  private ngUnsubscribe = new Subject();

  public dropdownLista: Array<any> = [];
  public seleccionados: Array<any> = [];
  public dropdownConfiguracion: any;
  public disabled: boolean = false;

  // multi unidades de la UMSA co-ejecutantes
  public unidades: any[] = [{
    nombre: ''
  }];
  // multi expositores
  public expositores: any[] = [{
    nombre: '',
    apellidos: ''
  }];

  // multiples archivos
  datosArchivo: any = [];
  public antFileTam = 0;

  // investigadores del proyecto
  public investigadores: Array<any> = [];

  // listado
  public basica_tecnicas: any[] = [];
  public lugar_desarrollos: any[] = [];
  public difusiones: any[] = [];
  public listado_difusion: string;

  // manejo de archivos
  public archivos: any[] = [];
  public archivo: any = {};

  // search archivos
  search = new FormControl('');
  public valorBusqueda = '';
  // search difusiones
  searchDifusion = new FormControl('');
  public valorBusquedaDifusion = '';

  // tipo archivo: para editar
  private tipoArch = 0;
  // tipo titulo archivos
  public tituloArch = 'Documentos principales';

  // archivos para difusion
  public archivosDifusion: any[] = [];

  // fechas
  public fechainicio: any = {};
  public fechafinal: any = {};

  // publicacion
  public publicaciones: any[] = [];
  public publicacion: any = {
    tipo: '',
    estado: true
  };

  // comentario
  public comentario: any = {};

  public provincias: any = [];
  public departamentos: any = [
    { value: 'BE', depa: 'Beni', capi: 'Trinidad',
      provincias: [
        { provi: 'Cercado', capi: 'San Javier'},
        { provi: 'Antonio Vaca Díez', capi: 'Riberalta'},
        { provi: 'General José Ballivián Segurola', capi: 'Santos Reyes'},
        { provi: 'Yacuma', capi: 'Santa Ana de Yacuma'},
        { provi: 'Moxos', capi: 'San Ignacio de Moxos'},
        { provi: 'Marbán', capi: 'Loreto'},
        { provi: 'Mamoré', capi: 'San Joaquín'},
        { provi: 'Iténez', capi: 'Magdalena'}
      ]
    },
    { value: 'CH', depa: 'Chuquisaca', capi: 'Sucre',
      provincias: [
        { provi: 'Oropeza', capi: 'Sucre'},
        { provi: 'Juana Azurduy de Padilla', capi: 'Azurduy'},
        { provi: 'Jaime Zudáñez', capi: 'Villa Zudáñez'},
        { provi: 'Tomina', capi: 'Padilla'},
        { provi: 'Hernando Siles', capi: 'Monteagudo'},
        { provi: 'Yamparáez', capi: 'Tarabuco'},
        { provi: 'Nor Cinti', capi: 'Camargo'},
        { provi: 'Sud Cinti', capi: 'Camataqui'},
        { provi: 'Belisario Boeto', capi: 'Villa Serrano'},
        { provi: 'Luis Calvo', capi: 'Villa Vaca Guzmán'}
      ]
    },
    { value: 'CB', depa: 'Cochabamba', capi: 'Cochabamba',
      provincias: [
        { provi: 'Arani', capi: 'Arani'},
        { provi: 'Esteban Arce', capi: 'Tarata'},
        { provi: 'Arque', capi: 'Arque'},
        { provi: 'Ayopaya', capi: 'Villa Independencia'},
        { provi: 'Campero', capi: 'Aiquile'},
        { provi: 'Capinota', capi: 'Villa Capinota'},
        { provi: 'Cercado', capi: 'Cochabamba'},
        { provi: 'Carrasco', capi: 'Totora'},
        { provi: 'Chapare', capi: 'Sacaba'},
        { provi: 'Germán Jordán', capi: 'Villa Cliza'},
        { provi: 'Mizque', capi: 'Mizque'},
        { provi: 'Punata', capi: 'Punata'},
        { provi: 'Quillacollo', capi: 'Quillacollo'},
        { provi: 'Tapacarí', capi: 'Tapacarí'},
        { provi: 'Bolívar', capi: 'Bolívar'},
        { provi: 'Tiraque', capi: 'Tiraque'}
      ]
    },
    { value: 'LP', depa: 'La Paz', capi: 'La Paz',
      provincias: [
        { provi: 'Aroma', capi: 'Sica Sica'},
        { provi: 'Bautista Saavedra', capi: 'Charazani'},
        { provi: 'Abel Iturralde', capi: 'Ixiamas'},
        { provi: 'Caranavi', capi: 'Caranavi'},
        { provi: 'Eliodoro Camacho', capi: 'Puerto Acosta'},
        { provi: 'Franz Tamayo', capi: 'Apolo'},
        { provi: 'Gualberto Villaroel', capi: 'San Pedro de Curahuara'},
        { provi: 'Ingavi', capi: 'Viacha'},
        { provi: 'Inquisivi', capi: 'Inquisivi'},
        { provi: 'General José Manuel Pando', capi: 'Santiago de Machaca'},
        { provi: 'Larecaja', capi: 'Sorata'},
        { provi: 'Loayza', capi: 'Luribay'},
        { provi: 'Los Andes', capi: 'Pucarani'},
        { provi: 'Manco Kapac', capi: 'Copacabana'},
        { provi: 'Muñecas', capi: 'Chuma'},
        { provi: 'Nor Yungas', capi: 'Coroico'},
        { provi: 'Omasuyos', capi: 'Achacachi'},
        { provi: 'Pacajes', capi: 'Coro coro'},
        { provi: 'Pedro Domingo Murillo', capi: 'La Paz'},
        { provi: 'Sud Yungas', capi: 'Chulumani'}
      ]
    },
    { value: 'OR', depa: 'Oruro', capi: 'Oruro',
      provincias: [
        { provi: 'Sabaya', capi: 'Sabaya'},
        { provi: 'Carangas', capi: 'Corque'},
        { provi: 'Cercado', capi: 'Oruro'},
        { provi: 'Eduardo Abaroa', capi: 'Challapata'},
        { provi: 'Ladislao Cabrera', capi: 'Salinas de Garcí Mendoza'},
        { provi: 'Litoral', capi: 'Huachacalla'},
        { provi: 'Mejillones', capi: 'La Rivera'},
        { provi: 'Nor Carangas', capi: 'Huayllamarca'},
        { provi: 'Pantaleón Dalence', capi: 'Huanuni'},
        { provi: 'Poopó', capi: 'Poopó'},
        { provi: 'Sajama', capi: 'Curahuara de Carangas'},
        { provi: 'San Pedro de Totora', capi: 'Totora'},
        { provi: 'Saucarí', capi: 'Toledo'},
        { provi: 'Sebastián Pagador', capi: 'Santiago de Huari'},
        { provi: 'Sud Carangas', capi: 'Santiago de Andamarca'},
        { provi: 'Tomas Barrón', capi: 'Eucaliptus'}
      ]
    },
    { value: 'PD', depa: 'Pando', capi: 'Cobija',
      provincias: [
        { provi: 'Abuná', capi: 'Santa Rosa del Abuná'},
        { provi: 'Federico Román', capi: 'Nueva Esperanza'},
        { provi: 'Madre de Dios', capi: 'Puerto Gonzalo Moreno'},
        { provi: 'Manuripi', capi: 'Puerto Rico'},
        { provi: 'Nicolás Suárez', capi: 'Cobija'}
      ]
    },
    { value: 'PT', depa: 'Potosí', capi: 'Potosí',
      provincias: [
        { provi: 'Alonzo de Ibáñez', capi: 'Villa de Sacaca'},
        { provi: 'Antonio Quijarro', capi: 'Uyuni'},
        { provi: 'Bernardino Bilbao', capi: 'Arampampa'},
        { provi: 'Charcas', capi: 'San Pedro de Buena Vista'},
        { provi: 'Chayanta', capi: 'Colquechaca'},
        { provi: 'Cornelio Saavedra', capi: '	Betanzos'},
        { provi: 'Daniel Saavedra', capi: 'Llica'},
        { provi: 'Enrique Baldivieso', capi: 'San Agustín'},
        { provi: 'José María Linares', capi: 'Puna'},
        { provi: 'Modesto Omiste', capi: 'Villazón'},
        { provi: 'Nor Chichas', capi: 'Cotagaita'},
        { provi: 'Nor Lípez', capi: 'Colcha K'},
        { provi: 'Rafael Bustillo', capi: 'Uncía'},
        { provi: 'Sud Chichas', capi: 'Tupiza'},
        { provi: 'Sud Lipez', capi: 'San Pablo de Lipez'},
        { provi: 'Tomás Frías', capi: 'Tinguipaya'}
      ]
    },
    { value: 'SC', depa: 'Santa Cruz', capi: 'Santa Cruz de la Sierra',
      provincias: [
        { provi: 'Andrés Ibáñez', capi: 'Ciudad de Santa Cruz'},
        { provi: 'Ignacio Warnes', capi: 'Warnes'},
        { provi: 'José Miguel de Velasco', capi: 'San Ignacio'},
        { provi: 'Ichilo', capi: 'Buena Vista'},
        { provi: 'Chiquitos', capi: 'San José'},
        { provi: 'Sara', capi: 'Portachuelo'},
        { provi: 'Cordillera', capi: 'Lagunillas'},
        { provi: 'Vallegrande', capi: 'Vallegrande'},
        { provi: 'Florida', capi: 'Samaipata'},
        { provi: 'Santistevan', capi: 'Montero'},
        { provi: 'Ñuflo de Chávez', capi: 'Concepción'},
        { provi: 'Ángel Sandoval', capi: 'San Matías'},
        { provi: 'Caballero', capi: 'Comarapa'},
        { provi: 'Germán Busch', capi: 'Puerto Suárez'},
        { provi: 'Guarayos', capi: 'Ascensión'}
      ]
    },
    { value: 'TJ', depa: 'Tarija', capi: 'Tarija',
      provincias: [
        { provi: 'Aniceto Arce', capi: 'Padcaya'},
        { provi: 'Burdet OConnor', capi: 'Entre Ríos'},
        { provi: 'Cercado', capi: 'Tarija'},
        { provi: 'Eustaquio Méndez', capi: 'San Lorenzo'},
        { provi: 'Gran Chaco', capi: 'Yacuiba'},
        { provi: 'José María Avilés', capi: 'Uriondo'}
      ]
    }
  ];

  // id_persona
  private id_persona: number;

  seguimiento: any = {
    tipo: '',
    estado: true
  };
  seguimientos: any = [];
  id_seguimiento = 0;

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

  convenio: any = {};
  personal_rrhh: any = {};

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private _route: ActivatedRoute,
    private modalService: NgbModal,
    private _serviceProyArch: ProyArchivosService,
    private _serviceProyecto: ProyectosService,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceInvProyectos: InvProyectosService,
    private _serviceFinanciamientos: FinanciamientosService,
    private _serviceLugarDesarrollos: LugarDesarrollosService,
    private _serviceCursos: CursosService,
    private _serviceEventos: EventosService,
    private _serviceNotaPrensas: NotaPrensasService,
    private _serviceExposiciones: ExposicionesService,
    private _serviceCursoArchivos: CursoArchivosService,
    private _serviceEventoArchivos: EventoArchivosService,
    private _serviceNotaArchivos: NotaArchivosService,
    private _serviceExpoArchivos: ExpoArchivosService,
    private _uploadArchivo: UploadArchivoService,
    private _servicePermisoArchivos: PermisoArchivosService,
    private _serviceConvenios: ConveniosService,
    private _serviceConvArchivos: ConvArchivosService,
    private _serviceContratados: ContratadosService,
    private _serviceContraArchivos: ContraArchivosService,
    private _serviceExpositores: ExpositoresService,
    private _serviceUnidades: UnidadesService,
    private toastr: ToastrService,
    private _servicePublicaciones: PublicacionesService,
    private _servicePubliArchivos: PubliArchivosService,
    private _serviceAutores: AutoresService,
    private _serviceComentarios: ComentariosService,
    private _serviceSeguimientos: SeguimientosService,
    private _serviceSeguiArchivos: SeguiArchivosService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;

    this.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;

    // tab
    this._route.fragment
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((fragment: string) => {
        if (fragment) {
          this.fragment = fragment;
        }
      });
    // autores
    this.dropdownConfiguracion = {
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

  ngOnInit(): void {

    this._route.params.forEach((params: Params) => {
      this.id = params.id_proyecto;
    });
    this.getProArchivosByIdProyecto(this.id);
    this.getArchivosByTipo(8);
    this.getProyecto(this.id);

    // buscador archivos
    this.search.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.valorBusqueda = value );
    // buscador difusiones
    this.searchDifusion.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.valorBusquedaDifusion = value );
    this.getInvestigadoresByProyecto(); // investigadores del proyecto

    // this.obtenerBasicaTecnicas();
    this.obtenerLugarDesarrollos();
    this.obtenerDifusion(5);
    this.listado_difusion = 'Todas las difusiones';
    this.obtenerPublicaciones(this.id);
    this.obtenerSeguimientos();

    this.obtenerEstadistica();

  }
  toggleFullWidth() {
    this.isResizing = true;
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    let that = this;
    setTimeout(() => {
      that.isResizing = false;
      that.cdr.detectChanges();
    }, 400);
  }

  obtenerEstadistica() {
    this._servicePublicaciones.countPublicacionesByIdProyecto(this.id, this.token)
    .then(responseCountPubli => {
        this._serviceLugarDesarrollos.countLugarDesarrollosByIdProyecto(this.id, this.token)
        .then(responseCountLD => {
          this._serviceCursos.countCursosByIdProyecto(this.id, this.token)
          .then(responseCountCurso => {
            this._serviceEventos.countEventosByIdProyecto(this.id, this.token)
            .then(responseCountEvento => {
              this._serviceNotaPrensas.countNotaPrensasByIdProyecto(this.id, this.token)
              .then(responseCountNota => {
                this._serviceExposiciones.countExposicionesByIdProyecto(this.id, this.token)
                .then(responseCountExpo => {
                  this._serviceSeguimientos.countSeguimientosByIdProyecto(this.id, this.token)
                  .then(responseCountSegui => {
                    this.pieOptions = {
                      color: ['#49c5b6', '#a27ce6', '#ffce4b', '#3eacff'],
                      title: {
                        text: '',
                        subtext: '',
                        x: 'center',
                        textStyle: {
                          color: '#C2C2C2'
                        }
                      },
                      tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                      },
                      legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['Publicaciones', 'Basicas tecnica', 'Lugares Desarrollo', 'Difusiones', 'Seguimientos'],
                        textStyle: {
                          color: '#C2C2C2'
                        }
                      },
                      series: [
                        {
                          name: 'Cantidad',
                          type: 'pie',
                          radius: '55%',
                          center: ['50%', '60%'],
                          data: [
                            { value: responseCountPubli.contador, name: 'Publicaciones' },
                            { value: responseCountLD.contador, name: 'Lugares Desarrollo' },
                            // tslint:disable-next-line:max-line-length
                            { value: responseCountCurso.contador + responseCountEvento.contador + responseCountNota.contador + responseCountExpo.contador, name: 'Difusiones' },
                            { value: responseCountSegui.contador, name: 'Seguimientos' }
                          ],
                          itemStyle: {
                            emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                          }
                        }
                      ]
                    };

                  }).catch(error => { console.log('Error al obtener count seguimiento', error); });
                }).catch(error => { console.log('Error al obtener count exposicion', error); });
              }).catch(error => { console.log('Erro al obtener count nota prensa', error); });
            }).catch(error => { console.log('Error al obtener count evento', error); });
          }).catch(error => { console.log('Error al obtener count curso', error); });
        }).catch(error => { console.log('Error al obtener count lugar desarrollo', error); });
    }).catch(error => { console.log('Error al obtener count publicaciones', error); });
  }

  getInvestigadoresByProyecto() {
    this._serviceProyecto.getProyecto(this.id, this.token)
    .then( response => {
      // console.log(response.proyecto.investigadore.persona);
      this.investigadores.push(response.proyecto.investigadore);
      this.dropdownLista.push(
        {
          id_investigador: response.proyecto.investigadore.id_investigador,
          nombreCompleto: response.proyecto.investigadore.persona.nombres + ' ' +
          response.proyecto.investigadore.persona.paterno + ' ' + response.proyecto.investigadore.persona.materno
        }
      );
    }).catch(error => { console.log('error al obtener el proyecto by id_proyecto', error); });
    this._serviceInvProyectos.getInv_proyectosByIdProyecto(this.id, this.token)
    .then(response => {
      // console.log(response.inv_proyectos);
      response.inv_proyectos.forEach( inv_proyecto => {
        // console.log(inv_proyecto.investigadore.persona);
        this.investigadores.push(inv_proyecto.investigadore);
        this.dropdownLista.push(
          {
            id_investigador: inv_proyecto.investigadore.id_investigador,
            nombreCompleto: inv_proyecto.investigadore.persona.nombres + ' ' +
            inv_proyecto.investigadore.persona.paterno + ' ' + inv_proyecto.investigadore.persona.materno
          }
        );
      });
    })
    .catch(error => { console.log('error al obtener inv_proyectos by id_proyecto', error); });
    // console.log(this.investigadores);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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
          // console.log(this.archivos);
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
        this.tituloArch = 'Documentos - Cierre Proyecto';
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
      case 8:
        this.tituloArch = 'Todos los documentos';
        this._serviceProyArch.getProy_archivosByIdTipo(this.id, 1, this.token)
        .then(responseProyArch => {
          this.archivos = this.archivos.concat(responseProyArch.proy_archivos);
          this._servicePermisoArchivos.getPermisoArchivosByIdProyecto(this.id, this.token)
          .then(responsePermisoArch => {
            this.archivos = this.archivos.concat(responsePermisoArch.permiso_archivos);
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
              // console.log(this.archivos);
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
                this._serviceProyArch.getProy_archivosByIdTipo(this.id, 6, this.token)
                .then(responseProyArch => {
                  this.archivos = this.archivos.concat(responseProyArch.proy_archivos);
                  // console.log(responseProyArch);
                  this._serviceProyArch.getProy_archivosByIdTipo(this.id, 7, this.token)
                  .then(responseProyArch => {
                    this.archivos = this.archivos.concat(responseProyArch.proy_archivos);
                    // console.log(responseProyArch);
                  }).catch(error => { console.log('error al obtener proy_archivos', error); });
                }).catch(error => { console.log('error al obtener proy_archivos', error); });
              }).catch(error => { console.log('error al obtener contratados', error); });
            }).catch(error => { console.log('error al obtener convenios', error); });
          }).catch(error => { console.log('error al obtener permiso archivos', error); });
        }).catch(error => { console.log('error al obtener proy_archivos', error); });
        break;
      default:
        break;
    }
  }

  openArchivo(pdf: string) {
    window.open(this.who + pdf, '_blank');
  }

  openModalBaseTecnica(content, size, id?) {
    if (id) {
      this.unidades = [];
      // obtener informacion by id

    } else {
      this.unidades = [{
        nombre: ''
      }];
      this.basica_tecnica = {
        tipo: '',
        estado: true
      };
    }
    this.modalService.open(content, { size: size });
  }
  openModalLugarDesarrollo(content, size, id?) {
    if (id) {
      this._serviceLugarDesarrollos.getLugarDesarrolloById(this.token, id)
      .then(responseLugar => {
        // console.log(responseLugar);
        this.lugar_desarrollo = responseLugar.lugar_desarrollo;
        // this.provincias = this.;
        this.obtenerProvincias();
      }).catch(error => { console.log('Error al obtener lugar desarrollo', error); });
    } else {
      this.lugar_desarrollo = {
        departamento: '',
        provincia: '',
        estado: true
      };
      this.provincias.length = 0;
    }
    this.modalService.open(content, { size: size });
  }
  openModalDifusion(content, size, difusion?) {
    this.difusion = {};
    this.expositores = [{
      nombres: ''
    }];
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
    this.expositores = [];
    this.fechainicio = '';
    this.fechafinal = '';

    // console.log(difusion);

    if (difusion.id_curso) {
      // console.log('actualizar curso', difusion);
      this.tituloFormulario = 'Cursos, Seminarios y Talleres - Actualizar';
      this.tipoDifusion = 1;
      this._serviceCursos.getCursoById(this.token, difusion.id_curso)
      .then(response => {
        // console.log(response);
        this.difusion = response.curso;
        var date = new Date(this.difusion.fechaini);
        this.fechainicio = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        date = new Date(this.difusion.fechafin);
        this.fechafinal = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this._serviceExpositores.getExpositoresByIdCurso(this.difusion.id_curso, this.token)
        .then(responseExpos => {
          // console.log(responseExpos);
          this.expositores = responseExpos.expositores;
        }).catch(error => {  console.log('Error al obtener expositores', error); });
      }).catch(error => { console.log('Error al obtener curso', error); });
    } else if (difusion.id_evento) {
      // console.log('actualizar evento', difusion);
      this.tituloFormulario = 'Eventos cientificos - Actualizar';
      this.tipoDifusion = 2;
      this._serviceEventos.getEventoById(this.token, difusion.id_evento)
      .then(response => {
        // console.log(response);
        this.difusion = response.evento;
        var date = new Date(this.difusion.fechaini);
        this.fechainicio = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        date = new Date(this.difusion.fechafin);
        this.fechafinal = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
      }).catch(error => { console.log('obtener el evento', error); });
    } else if (difusion.id_nota_prensa) {
      // console.log('actulizar nota');
      this.tituloFormulario = 'Notas de prensa - Actualizar';
      this.tipoDifusion = 3;
      this._serviceNotaPrensas.getNotaPrensaById(this.token, difusion.id_nota_prensa)
      .then(response => {
        // console.log(response);
        this.difusion = response.nota_prensa;
        var date = new Date(this.difusion.fecha);
        this.difusion.fecha = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
      }).catch(error => { console.log('Error al obtener nota de prensa', error); });
    } else if (difusion.id_exposicion) {
      // console.log('actualizar exposicion');
      this.tituloFormulario = 'Exposiciones y conferencias - Actualizar';
      this.tipoDifusion = 4;
      this._serviceExposiciones.getExposicionById(this.token, difusion.id_exposicion)
      .then(response => {
        // console.log(response);
        this.difusion = response.exposicion;
        var date = new Date(this.difusion.fechaini);
        this.fechainicio = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        date = new Date(this.difusion.fechafin);
        this.fechafinal = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
      }).catch(error => { console.log('Error al obtener exposicion', error); });
    } else if (!isNaN(difusion)) {
      // console.log('guardar');
      switch (difusion) {
        case 1:
          this.tituloFormulario = 'Cursos, Seminarios y Talleres';
          this.tipoDifusion = 1;
          break;
        case 2:
          this.tituloFormulario = 'Eventos cientificos';
          this.tipoDifusion = 2;
          break;
        case 3:
          this.tituloFormulario = 'Notas de prensa';
          this.tipoDifusion = 3;
          break;
        case 4:
          this.tituloFormulario = 'Exposiciones y conferencias';
          this.tipoDifusion = 4;
          break;
        default:
          console.log('error al navegar');
          this.tipoDifusion = 0;
          break;
      }
    }
    this.modalService.open(content, { size: size });
  }
  openModalNuevaPublicacion(content, size, id?) {
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
    this.seleccionados = [];
    this.publicacion = {
      tipo: '',
      autores: [],
      archivos: []
    };
    this.disabled = false;
    if (id) {
      // console.log('actualizar');
      this.disabled = true;
      this._servicePublicaciones.getPublicacionById(id, this.token)
      .then(response => {
        // console.log(response);
        this.publicacion = response.publicacion;
        var date = new Date(this.publicacion.fecha);
        this.publicacion.fecha = {  year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
        this._serviceAutores.getAutoresByIdPublicacion(id, this.token)
        .then(responseAutores => {
          // console.log(responseAutores);
          this.seleccionados = [];
          responseAutores.autores.forEach(autor => {
            var selec = {
              id_investigador: autor.id_investigador,
              nombreCompleto: autor.investigadore.persona.nombres + ' ' +
              autor.investigadore.persona.paterno + ' ' + autor.investigadore.persona.materno
            };
            this.seleccionados.push(selec);
          });
        }).catch(error => { console.log('Error al obtener autores por id_publicacion', error); });
      }).catch(error => { console.log('Error al obtener publicacion', error); });
    }
    this.modalService.open(content, { size: size });
  }

  openModalArchivo(content, size, archivo: any) {
    // console.log(archivo);
    this.modalService.open(content, { size: size });
    if (archivo.id_permiso_archivo) {
      this._servicePermisoArchivos.getPermisoArchivoById(this.token, archivo.id_permiso_archivo)
      .then(response => {
        // console.log(response);
        this.archivo = response.permiso_archivo;
      }).catch(error => { console.log('Error al obtener permi archivos', error); });
    } else if (archivo.id_convenio) {
      this.archivo = archivo;
    } else if (archivo.id_conv_archivo) {
      this._serviceConvArchivos.getConvArchivoById(this.token, archivo.id_conv_archivo)
      .then(response => {
        // console.log(response);
        this.archivo = response.conv_archivo;
      }).catch(error => { console.log('Error al obtener conv archivo', error); });
    } else if (archivo.id_contratado) {
      this.archivo = archivo;
    } else if (archivo.id_contra_archivo) {
      this._serviceContraArchivos.getContraArchivoById(this.token, archivo.id_contra_archivo)
      .then(response => {
        // console.log(response);
        this.archivo = response.contra_archivo;
      }).catch(error => { console.log('Error al obtener evento archivo', error); });
    } else if (archivo.id_publi_archivo) {
      this._servicePubliArchivos.getPubliArchivoById(this.token, archivo.id_publi_archivo)
      .then(response => {
        this.archivo = response.publi_archivo;
      }).catch(error => { console.log('Error al obtener publi archivo', error); });
    } else if (archivo.id_curso_archivo) {
      this._serviceCursoArchivos.getCursoArchivoById(this.token, archivo.id_curso_archivo)
      .then(response => {
        this.archivo = response.curso_archivo;
      }).catch(error => { console.log('Error al obtener curso archivo', error); });
    } else if (archivo.id_evento_archivo) {
      this._serviceEventoArchivos.getEventoArchivoById(this.token, archivo.id_evento_archivo)
      .then(response => {
        this.archivo = response.evento_archivo;
      }).catch(error => { console.log('Error al obtener evento archivo', error); });
    } else if (archivo.id_nota_archivo) {
      this._serviceNotaArchivos.getNotaArchivoById(this.token, archivo.id_nota_archivo)
      .then(response => {
        this.archivo = response.nota_archivo;
      }).catch(error => { console.log('Error al obtener nota archivo', error); });
    } else if (archivo.id_expo_archivo) {
      this._serviceExpoArchivos.getExpoArchivoById(this.token, archivo.id_expo_archivo)
      .then(response => {
        this.archivo = response.expo_archivo;
      }).catch(error => { console.log('Error al obtener expo archivo', error); });
    } else if (archivo.id_proy_archivo) {
      this._serviceProyArch.getProyArchivoById(archivo.id_proy_archivo, this.token)
      .then(response => {
        this.archivo = response.proy_archivo;
      }).catch(error => { console.log('Error al obtener expo archivo', error); });
    } else if (archivo.id_segui_archivo) {
      this._serviceSeguiArchivos.getSeguiArchivoById(archivo.id_segui_archivo, this.token)
      .then(response => {
        this.archivo = response.segui_archivo;
      }).catch(error => { console.log('Error al obtener segui archivo', error); });
    }
  }

  openModalArchivoVarios(content, size, archivo: any) {
    // console.log(archivo);
    this.modalService.open(content, { size: size });
    if (archivo.id_tipo === 8) {
      // this.openModal(content, size, 6); // archivos convenios
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
      // this.openModal(content, size, 7); // archivos contratados
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

  guardarBasicaTecnica() {
    this.modalService.dismissAll();
  }
  guardarLugarDesarrollo() {
    this.modalService.dismissAll();
  }
  guardarDifusion() {
    this.modalService.dismissAll();
  }
  guardarPublicacion() {
    this.modalService.dismissAll();
  }
  borrarTodoDifusion() {
    this.difusion = {};
    this.unidades = [{
      nombre: ''
    }];
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
  }
  borrarTodoPublicacion() {
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
    this.seleccionados.length = 0;
    this.publicacion = {
      tipo: ''
    };
  }
  onEvent() {
    console.log('click');
  }
  obtenerProvincias() {
    this.departamentos.forEach(departamento => {
      if (departamento.value === this.lugar_desarrollo.departamento) {
        this.provincias = departamento.provincias;
      }
    });
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
  // cancel() {
  //   this.progress = 0;
  //   if (this.httpEmitter) {
  //     console.log('Cancelado');
  //     this.httpEmitter.unsubscribe();
  //   }
  // }
  public setName(files: any) {
    // console.log(files);
    for (let index = this.antFileTam; index < files.length; index++) {
      const file = files[index];
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

  obtenerLugarDesarrollos() {
    this._serviceLugarDesarrollos.getLugarDesarrollosByIdProyecto(this.id, this.token)
    .then(response => {
      // console.log(response);
      this.lugar_desarrollos = response.lugar_desarrollos;
    }).catch(error => { console.log('error al obtener Lugar de desarrollos', error); });
  }
  obtenerDifusion(numero: number) {
    this.difusiones = [];
    switch (numero) {
      case 1:
        this.listado_difusion = 'Cursos, Seminarios y Talleres';
        this._serviceCursos.getCursosByIdProyecto(this.id, this.token)
        .then(response => {
          // this.difusiones = response.cursos;
          // console.log(response.cursos);
          response.cursos.forEach(difusion => {
            var difu = difusion;
            // obtener cursos_archivos
            this._serviceCursoArchivos.getCursoArchivosByIdCurso(difusion.id_curso, this.token)
            .then(responseArch => {
              difu.archivos = responseArch.curso_archivos;
              this.difusiones.push(difu);
            }).catch(error => { console.log('Error al obtener Curso Archivos', error); });
          });
        }).catch(error => { console.log('error al obtener cursos', error); });
        break;
      case 2:
        this.listado_difusion = 'Eventos cientificos';
        this._serviceEventos.getEventosByIdProyecto(this.id, this.token)
        .then(response => {
          response.eventos.forEach(difusion => {
            // obtener evento_archivos
            var difu = difusion;
            this._serviceEventoArchivos.getEventoArchivosByIdEvento(difusion.id_evento, this.token)
            .then(responseArch => {
              difu.archivos = responseArch.evento_archivos;
              this.difusiones.push(difu);
            }).catch(error => { console.log('Error al obtener Evento Archivos', error); });
          });
        }).catch(error => { console.log('error al obtener eventos', error); });
        break;
      case 3:
        this.listado_difusion = 'Notas de prensa';
        this._serviceNotaPrensas.getNotaPrensasByIdProyecto(this.id, this.token)
        .then(response => {
          response.nota_prensas.forEach(difusion => {
            var difu = difusion;
            // obtener nota_archivos
            this._serviceNotaArchivos.getNotaArchivosByIdNotaPrensa(difusion.id_nota_prensa, this.token)
            .then(responseArch => {
              difu.archivos = responseArch.nota_archivos;
              this.difusiones.push(difu);
            }).catch(error => { console.log('Error al obtener Nota de presa Archivos', error); });
          });
        }).catch(error => { console.log('error al obtener nota prensas', error); });
        break;
      case 4:
        this.listado_difusion = 'Exposiciones y conferencias';
        this._serviceExposiciones.getExposicionesByIdProyecto(this.id, this.token)
        .then(response => {
          // this.difusiones.fecha = '';
          response.exposiciones.forEach(difusion => {
            var difu = difusion;
            // obtener expo_archivos
            this._serviceExpoArchivos.getExpoArchivosByIdExposicion(difusion.id_exposicion, this.token)
            .then(responseArch => {
              difu.archivos = responseArch.expo_archivos;
              this.difusiones.push(difu);
            }).catch(error => { console.log('Error al obtener Exposicion Archivos', error); });
          });
        }).catch(error => { console.log('error al obtener exposiciones', error); });
        break;

      case 5:
        this.listado_difusion = 'Todas las difusiones';
        this._serviceCursos.getCursosByIdProyecto(this.id, this.token)
        .then(responseCurso => {
          // this.difusiones = response.cursos;
          // console.log(response.cursos);
          responseCurso.cursos.forEach(difusion => {
            var difu = difusion;
            // obtener cursos_archivos
            this._serviceCursoArchivos.getCursoArchivosByIdCurso(difusion.id_curso, this.token)
            .then(responseArch => {
              difu.archivos = responseArch.curso_archivos;
              this.difusiones.push(difu);
            }).catch(error => { console.log('Error al obtener Curso Archivos', error); });
          });
          this._serviceEventos.getEventosByIdProyecto(this.id, this.token)
          .then(responseEvento => {
            responseEvento.eventos.forEach(difusion => {
              // obtener evento_archivos
              var difu = difusion;
              this._serviceEventoArchivos.getEventoArchivosByIdEvento(difusion.id_evento, this.token)
              .then(responseArch => {
                difu.archivos = responseArch.evento_archivos;
                this.difusiones.push(difu);
              }).catch(error => { console.log('Error al obtener Evento Archivos', error); });
            });
            this._serviceNotaPrensas.getNotaPrensasByIdProyecto(this.id, this.token)
            .then(responseNotaPrensa => {
              responseNotaPrensa.nota_prensas.forEach(difusion => {
                var difu = difusion;
                // obtener nota_archivos
                this._serviceNotaArchivos.getNotaArchivosByIdNotaPrensa(difusion.id_nota_prensa, this.token)
                .then(responseArch => {
                  difu.archivos = responseArch.nota_archivos;
                  this.difusiones.push(difu);
                }).catch(error => { console.log('Error al obtener Nota de presa Archivos', error); });
              });
              this._serviceExposiciones.getExposicionesByIdProyecto(this.id, this.token)
              .then(responseExposicion => {
                // this.difusiones.fecha = '';
                responseExposicion.exposiciones.forEach(difusion => {
                  var difu = difusion;
                  // obtener expo_archivos
                  this._serviceExpoArchivos.getExpoArchivosByIdExposicion(difusion.id_exposicion, this.token)
                  .then(responseArch => {
                    difu.archivos = responseArch.expo_archivos;
                    this.difusiones.push(difu);
                  }).catch(error => { console.log('Error al obtener Exposicion Archivos', error); });
                });
                // fin
              }).catch(error => { console.log('error al obtener exposiciones', error); });
            }).catch(error => { console.log('error al obtener nota prensas', error); });
          }).catch(error => { console.log('error al obtener eventos', error); });
        }).catch(error => { console.log('error al obtener cursos', error); });
        break;
      default:
        console.log('no se obtuvo difusiones');
        break;
    }
  }
  cargarDataConvenio(numero: number) {

  }

  fileChange() {
    this.lastFileAt = this.getDate();
    this.setName(this.files);
  }

  addUnidad() {
    this.unidades.push({
      nombre: ''
    });
  }
  removeUnidad(i: number) {
    this.unidades.splice(i, 1);
  }
  addExpositor() {
    this.expositores.push({
      nombres: '',
      apellidos: ''
    });
  }
  removeExpositor(i: number) {
    this.expositores.splice(i, 1);
  }
  eliminarPublicacion(id: number) {
  }
  eliminarBasicaTecnica(id: number) {
  }
  eliminarLugarDesarrollo(id: number) {
  }
  eliminarDifusion(difu: any) {
  }

  obtenerPublicaciones(id_proyecto: number) {
    this.publicaciones = [];
    this._servicePublicaciones.getPublicacionesByIdProyecto(id_proyecto, this.token)
    .then(response => {
      // console.log(response);
      // this.publicaciones = response.publicaciones;
      response.publicaciones.forEach(publicacion => {
        this._serviceAutores.getAutoresByIdPublicacion(publicacion.id_publicacion, this.token)
        .then(responseA => {
          publicacion.autores = responseA.autores;
          this._servicePubliArchivos.getPubliArchivosByIdPublicacion(publicacion.id_publicacion, this.token)
          .then(responseArchivo => {
            publicacion.archivos = responseArchivo.publi_archivos;
            this.publicaciones.push(publicacion);
          }).catch(error => { console.log('Error al obtener archivos', error); });
        }).catch(error => { console.log('Error al obtener autores por id_publicacion', error); });
      });
      // console.log(this.publicaciones);
    }).catch(error => { console.log('Error al obtener publicaciones por id_proyecto', error); });
  }

  editarArchivo() {
    this.modalService.dismissAll();
  }

  openModalNuevoComentario(content, size, publicacion: any) {
    this.modalService.open(content, { size: size });
    this.publicacion = publicacion;
  }
  guardarComentario() {
    this.comentario.id_persona = this.id_persona;
    this.comentario.id_publicacion = this.publicacion.id_publicacion;
    // console.log('comentario', this.comentario);
    if (this.publicacion.id_publicacion) {
      this._serviceComentarios.save(this.comentario, this.token)
      .then(response => {
        // console.log(response);
        this.modalService.dismissAll();
        this.toastr.success('Comentario guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      }).catch(error => {
        console.log('Error al guardar comentario', error);
        this.toastr.error('Error al guardar comentario', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
    }
  }

  openModalNuevoSeguimiento(content, size, id_seguimiento?: number) {
    this.files = [];
    this.datosArchivo = [];
    this.antFileTam = 0;
    if (id_seguimiento) {
      this._serviceSeguimientos.getSeguimientoById(id_seguimiento, this.token)
      .then(response => {
        this.seguimiento = response.seguimiento;
      }).catch(error => { console.log('Error al obtener el seguimiento por id', error); });
    } else {
      this.seguimiento = {
        tipo: '',
        proceso: this.proyecto.proceso,
        estado: true
      };
    }
    this.modalService.open(content, { size: size });
  }

  guardarSeguimiento() {
    // console.log(this.seguimiento);
    // console.log(this.datosArchivo);

    this.seguimiento.id_proyecto = this.proyecto.id_proyecto;
    this.seguimiento.id_director = this.id_persona;

    if (this.seguimiento.id_seguimiento) {
      // console.log('actualizar');
      this._serviceSeguimientos.update(this.seguimiento.id_seguimiento, this.seguimiento, this.token)
      .then(response => {
        // console.log(response.seguimiento);
        // añadir archivos
        this._serviceProyecto.updateProyecto(this.id, { proceso: response.seguimiento.proceso }, this.token)
        .then(responseProy => {
          this.getProyecto(this.id);
        }).catch(error => { console.log('Error al actualizar proyecto proceso', error); });
        if (this.files.length > 0) {
          this._uploadArchivo.getObserver().subscribe(progress => {
            this.progress = progress;
          });
          var contador = 0;
          for (let i = 0; i < this.files.length; i++) {
            var segui_archivo = {
              id_seguimiento: response.seguimiento.id_seguimiento,
              archivo: '',
              nombre: this.datosArchivo[i].nombre,
              descripcion: this.datosArchivo[i].descripcion,
              id_tipo: '15'
            };
            // console.log(segui_archivo);
            this._serviceSeguiArchivos.save(segui_archivo, this.token)
            .then(responseArchivo => {
              // console.log(responseArchivo);
              this._uploadArchivo.uploadArchivo(this.url + 'upload-segui-archivo/' + responseArchivo.segui_archivo.id_segui_archivo, this.files[i], this.token)
              .then(responseFile => {
                // console.log(responseFile);
                contador++;
                if (contador === this.files.length) {
                  this.toastr.success('Seguimiento actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                  this.obtenerSeguimientos();
                  this.progress = 0;
                  this.modalService.dismissAll();
                }
              }).catch(error => { console.log('error al subir el archivo', error); });
            }).catch(error => { console.log('error al crear evento archivo', error); });
          }
        } else {
          this.toastr.success('Seguimiento actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          this.obtenerSeguimientos();
          this.progress = 0;
          this.modalService.dismissAll();
        }
        // actualizar autores
      }).catch(error => {
        console.log('Error al actualizar seguimiento', error);
        this.toastr.error('Error al actualizar seguimiento', undefined, { closeButton: true, positionClass: 'toast-bottom-right' }); 
      });
    } else {
      this._serviceSeguimientos.save(this.seguimiento, this.token)
      .then(response => {
        // console.log(response);
        // guardar segui_archivo
        this._serviceProyecto.updateProyecto(this.id, { proceso: response.seguimiento.proceso }, this.token)
        .then(responseProy => {
          this.getProyecto(this.id);
        }).catch(error => { console.log('Error al actualizar proyecto proceso', error); });
        if (this.files.length > 0) {
          this._uploadArchivo.getObserver().subscribe(progress => {
            this.progress = progress;
          });
          var contador = 0;
          for (let i = 0; i < this.files.length; i++) {
            var segui_archivo = {
              id_seguimiento: response.seguimiento.id_seguimiento,
              archivo: '',
              nombre: this.datosArchivo[i].nombre,
              descripcion: this.datosArchivo[i].descripcion,
              id_tipo: '15'
            };
            // console.log(segui_archivo);
            this._serviceSeguiArchivos.save(segui_archivo, this.token)
            .then(responseArchivo => {
              // console.log(responseArchivo);
              this._uploadArchivo.uploadArchivo(this.url + 'upload-segui-archivo/' + responseArchivo.segui_archivo.id_segui_archivo, this.files[i], this.token)
              .then(responseFile => {
                // console.log(responseFile);
                contador++;
                if (contador === this.files.length) {
                  this.obtenerSeguimientos();
                  this.progress = 0;
                  this.modalService.dismissAll();
                  this.toastr.success('Seguimiento guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                }
              }).catch(error => { console.log('error al subir el archivo', error); });
            }).catch(error => { console.log('error al crear segui archivo', error); });
          }
        } else {
          this.obtenerSeguimientos();
          this.progress = 0;
          this.modalService.dismissAll();
          this.toastr.success('Seguimiento guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }
      }).catch(error => {
        console.log('Error al crear seguimiento', error);
        this.toastr.error('Error al guardar seguimiento', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
    }
  }

  public obtenerSeguimientos() {

    this._serviceSeguimientos.getSeguimientosByIdProyecto(this.id, this.token)
    .then(response => {
      // this.seguimientos = response.seguimientos;
      this.seguimientos = [];
      response.seguimientos.forEach(segui => {
        segui.archivos = [];
        this._serviceSeguiArchivos.getSeguiArchivosByIdSeguimiento(segui.id_seguimiento, this.token)
        .then(response => {
          segui.archivos = response.segui_archivos;
          this.seguimientos.push(segui);
        }).catch(error => { console.log('Error al obtener segui archivo', error); });
      });
      // console.log(this.seguimientos);
    }).catch(error => { console.log('Error al obtener seguimientos', error); });
  }

  public eliminarSeguimiento(idSeguimiento: number) {
    this._serviceSeguimientos.update(idSeguimiento, { estado: false }, this.token)
    .then(response => {
      this.seguimiento = {};
      this.obtenerSeguimientos();
    }).catch(error => { console.log('Error al eliminar seguimiento', error); });
  }

  openModal(content, size, idSeguimiento: number) {
    this.modalService.open(content, { size: size });
    this.id_seguimiento = idSeguimiento;
  }

  tipoArchivo(idTipo: number): string{
    let tipo = '';
    switch (idTipo) {
      case 1:
        tipo = 'Principal';
        break;
      case 2:
        tipo = 'DGB';
        break;
      case 3:
        tipo = 'SERNAP';
        break;
      case 4:
        tipo = 'CITES';
        break;
      case 5:
        tipo = 'BIOETICA';
        break;
      case 6:
        tipo = 'Cierre de proyecto';
        break;
      case 7:
        tipo = 'Otros';
        break;
      case 8:
        tipo = 'Convenios';
        break;
      case 9:
        tipo = 'Contratados';
        break;
      case 10:
        tipo = 'Cursos';
        break;
      case 11:
        tipo = 'Eventos';
        break;
      case 12:
        tipo = 'Notas de prensa';
        break;
      case 13:
        tipo = 'Exposiciones';
        break;
      case 14:
        tipo = 'Publicaciones';
        break;
      case 15:
        tipo = 'Seguimientos';
        break;
      case 16:
        tipo = 'Peticiones';
        break;
      case 17:
        tipo = 'Final';
        break;
      default:
        tipo = '';
        break;
    }
    return tipo;
  }

}
