import { Component, OnInit, ChangeDetectorRef, Injectable, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgbModal, NgbDatepickerI18n, NgbDateStruct, NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProyArchivosService } from 'src/app/services/admin/proy-archivos.service';
import { GLOBAL } from 'src/app/services/global';
import { Subscription, Subject } from 'rxjs';
import { HttpEvent } from '@angular/common/http';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
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
import { Proyecto } from 'src/app/interfaces/proyecto';
import { ExpositoresService } from 'src/app/services/proyecto/expositores.service';
import { UnidadesService } from 'src/app/services/proyecto/unidades.service';
import { ToastrService } from 'ngx-toastr';
import { PublicacionesService } from 'src/app/services/proyecto/publicaciones.service';
import { AutoresService } from 'src/app/services/proyecto/autores.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { SeguimientosService } from 'src/app/services/proyecto/seguimientos.service';
import { SeguiArchivosService } from 'src/app/services/proyecto/segui-archivos.service';
import { PeticionesService } from 'src/app/services/proyecto/peticiones.service';
import { PetiArchivosService } from 'src/app/services/proyecto/peti-archivos.service';
import { FinanciamientosService } from 'src/app/services/proyecto/financiamientos.service';
import { MouseEvent } from '@agm/core';

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
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})
export class EditProyectoComponent implements OnInit, OnDestroy {

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
  public filesToUpload: Array<File> = [];
  public sidebarVisible = true;
  public tituloFormulario = '';
  public tipoDifusion = 0;

  // difusion
  public difusion: any = {};

  // MANEJO DE ARCHIVOS
  accept = 'pdf'; // *
  files: File[] = [];
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

  // manejo de archivos
  public proy_archivos: any[];
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

  public provincias: any = [];
  public departamentos: any = [
    {
      value: 'Beni', depa: 'Beni', capi: 'Trinidad',
      provincias: [
        { provi: 'Cercado', capi: 'San Javier' },
        { provi: 'Antonio Vaca Díez', capi: 'Riberalta' },
        { provi: 'General José Ballivián Segurola', capi: 'Santos Reyes' },
        { provi: 'Yacuma', capi: 'Santa Ana de Yacuma' },
        { provi: 'Moxos', capi: 'San Ignacio de Moxos' },
        { provi: 'Marbán', capi: 'Loreto' },
        { provi: 'Mamoré', capi: 'San Joaquín' },
        { provi: 'Iténez', capi: 'Magdalena' }
      ]
    },
    {
      value: 'Chuquisaca', depa: 'Chuquisaca', capi: 'Sucre',
      provincias: [
        { provi: 'Oropeza', capi: 'Sucre' },
        { provi: 'Juana Azurduy de Padilla', capi: 'Azurduy' },
        { provi: 'Jaime Zudáñez', capi: 'Villa Zudáñez' },
        { provi: 'Tomina', capi: 'Padilla' },
        { provi: 'Hernando Siles', capi: 'Monteagudo' },
        { provi: 'Yamparáez', capi: 'Tarabuco' },
        { provi: 'Nor Cinti', capi: 'Camargo' },
        { provi: 'Sud Cinti', capi: 'Camataqui' },
        { provi: 'Belisario Boeto', capi: 'Villa Serrano' },
        { provi: 'Luis Calvo', capi: 'Villa Vaca Guzmán' }
      ]
    },
    {
      value: 'Cochabamba', depa: 'Cochabamba', capi: 'Cochabamba',
      provincias: [
        { provi: 'Arani', capi: 'Arani' },
        { provi: 'Esteban Arce', capi: 'Tarata' },
        { provi: 'Arque', capi: 'Arque' },
        { provi: 'Ayopaya', capi: 'Villa Independencia' },
        { provi: 'Campero', capi: 'Aiquile' },
        { provi: 'Capinota', capi: 'Villa Capinota' },
        { provi: 'Cercado', capi: 'Cochabamba' },
        { provi: 'Carrasco', capi: 'Totora' },
        { provi: 'Chapare', capi: 'Sacaba' },
        { provi: 'Germán Jordán', capi: 'Villa Cliza' },
        { provi: 'Mizque', capi: 'Mizque' },
        { provi: 'Punata', capi: 'Punata' },
        { provi: 'Quillacollo', capi: 'Quillacollo' },
        { provi: 'Tapacarí', capi: 'Tapacarí' },
        { provi: 'Bolívar', capi: 'Bolívar' },
        { provi: 'Tiraque', capi: 'Tiraque' }
      ]
    },
    {
      value: 'La Paz', depa: 'La Paz', capi: 'La Paz',
      provincias: [
        { provi: 'Aroma', capi: 'Sica Sica' },
        { provi: 'Bautista Saavedra', capi: 'Charazani' },
        { provi: 'Abel Iturralde', capi: 'Ixiamas' },
        { provi: 'Caranavi', capi: 'Caranavi' },
        { provi: 'Eliodoro Camacho', capi: 'Puerto Acosta' },
        { provi: 'Franz Tamayo', capi: 'Apolo' },
        { provi: 'Gualberto Villaroel', capi: 'San Pedro de Curahuara' },
        { provi: 'Ingavi', capi: 'Viacha' },
        { provi: 'Inquisivi', capi: 'Inquisivi' },
        { provi: 'General José Manuel Pando', capi: 'Santiago de Machaca' },
        { provi: 'Larecaja', capi: 'Sorata' },
        { provi: 'Loayza', capi: 'Luribay' },
        { provi: 'Los Andes', capi: 'Pucarani' },
        { provi: 'Manco Kapac', capi: 'Copacabana' },
        { provi: 'Muñecas', capi: 'Chuma' },
        { provi: 'Nor Yungas', capi: 'Coroico' },
        { provi: 'Omasuyos', capi: 'Achacachi' },
        { provi: 'Pacajes', capi: 'Coro coro' },
        { provi: 'Pedro Domingo Murillo', capi: 'La Paz' },
        { provi: 'Sud Yungas', capi: 'Chulumani' }
      ]
    },
    {
      value: 'Oruro', depa: 'Oruro', capi: 'Oruro',
      provincias: [
        { provi: 'Sabaya', capi: 'Sabaya' },
        { provi: 'Carangas', capi: 'Corque' },
        { provi: 'Cercado', capi: 'Oruro' },
        { provi: 'Eduardo Abaroa', capi: 'Challapata' },
        { provi: 'Ladislao Cabrera', capi: 'Salinas de Garcí Mendoza' },
        { provi: 'Litoral', capi: 'Huachacalla' },
        { provi: 'Mejillones', capi: 'La Rivera' },
        { provi: 'Nor Carangas', capi: 'Huayllamarca' },
        { provi: 'Pantaleón Dalence', capi: 'Huanuni' },
        { provi: 'Poopó', capi: 'Poopó' },
        { provi: 'Sajama', capi: 'Curahuara de Carangas' },
        { provi: 'San Pedro de Totora', capi: 'Totora' },
        { provi: 'Saucarí', capi: 'Toledo' },
        { provi: 'Sebastián Pagador', capi: 'Santiago de Huari' },
        { provi: 'Sud Carangas', capi: 'Santiago de Andamarca' },
        { provi: 'Tomas Barrón', capi: 'Eucaliptus' }
      ]
    },
    {
      value: 'Pando', depa: 'Pando', capi: 'Cobija',
      provincias: [
        { provi: 'Abuná', capi: 'Santa Rosa del Abuná' },
        { provi: 'Federico Román', capi: 'Nueva Esperanza' },
        { provi: 'Madre de Dios', capi: 'Puerto Gonzalo Moreno' },
        { provi: 'Manuripi', capi: 'Puerto Rico' },
        { provi: 'Nicolás Suárez', capi: 'Cobija' }
      ]
    },
    {
      value: 'Potosí', depa: 'Potosí', capi: 'Potosí',
      provincias: [
        { provi: 'Alonzo de Ibáñez', capi: 'Villa de Sacaca' },
        { provi: 'Antonio Quijarro', capi: 'Uyuni' },
        { provi: 'Bernardino Bilbao', capi: 'Arampampa' },
        { provi: 'Charcas', capi: 'San Pedro de Buena Vista' },
        { provi: 'Chayanta', capi: 'Colquechaca' },
        { provi: 'Cornelio Saavedra', capi: '	Betanzos' },
        { provi: 'Daniel Saavedra', capi: 'Llica' },
        { provi: 'Enrique Baldivieso', capi: 'San Agustín' },
        { provi: 'José María Linares', capi: 'Puna' },
        { provi: 'Modesto Omiste', capi: 'Villazón' },
        { provi: 'Nor Chichas', capi: 'Cotagaita' },
        { provi: 'Nor Lípez', capi: 'Colcha K' },
        { provi: 'Rafael Bustillo', capi: 'Uncía' },
        { provi: 'Sud Chichas', capi: 'Tupiza' },
        { provi: 'Sud Lipez', capi: 'San Pablo de Lipez' },
        { provi: 'Tomás Frías', capi: 'Tinguipaya' }
      ]
    },
    {
      value: 'Santa Cruz', depa: 'Santa Cruz', capi: 'Santa Cruz de la Sierra',
      provincias: [
        { provi: 'Andrés Ibáñez', capi: 'Ciudad de Santa Cruz' },
        { provi: 'Ignacio Warnes', capi: 'Warnes' },
        { provi: 'José Miguel de Velasco', capi: 'San Ignacio' },
        { provi: 'Ichilo', capi: 'Buena Vista' },
        { provi: 'Chiquitos', capi: 'San José' },
        { provi: 'Sara', capi: 'Portachuelo' },
        { provi: 'Cordillera', capi: 'Lagunillas' },
        { provi: 'Vallegrande', capi: 'Vallegrande' },
        { provi: 'Florida', capi: 'Samaipata' },
        { provi: 'Santistevan', capi: 'Montero' },
        { provi: 'Ñuflo de Chávez', capi: 'Concepción' },
        { provi: 'Ángel Sandoval', capi: 'San Matías' },
        { provi: 'Caballero', capi: 'Comarapa' },
        { provi: 'Germán Busch', capi: 'Puerto Suárez' },
        { provi: 'Guarayos', capi: 'Ascensión' }
      ]
    },
    {
      value: 'Tarija', depa: 'Tarija', capi: 'Tarija',
      provincias: [
        { provi: 'Aniceto Arce', capi: 'Padcaya' },
        { provi: 'Burdet OConnor', capi: 'Entre Ríos' },
        { provi: 'Cercado', capi: 'Tarija' },
        { provi: 'Eustaquio Méndez', capi: 'San Lorenzo' },
        { provi: 'Gran Chaco', capi: 'Yacuiba' },
        { provi: 'José María Avilés', capi: 'Uriondo' }
      ]
    }
  ];

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
  public financiamientos: any[] = [{
    fuente: 'UMSA',
    aporte: 0,
    observacion: ''
  },
  {
    fuente: '',
    aporte: 0,
    observacion: ''
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
  // seguimiento
  seguimiento: any = {
    tipo: '',
    estado: true
  };
  seguimientos: any = [];
  peticiones: any = [];
  peticion: any = {};

  auxiEliminar: any = {};
  tipoEliminar = 0;
  tituloEliminar = '';

  // google maps zoom level
  zoom: number = 19;
  lat: number = -16.537887;
  lng: number = -68.067610;
  markers: marker[] = [
    {
      lat: -16.537897,
      lng: -68.067660,
      label: 'Maximo',
      draggable: true
    },
    {
      lat: -16.537896,
      lng: -68.067665,
      label: 'Minimo',
      draggable: false
    }
  ];
  pos: number = 0;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _router: Router,
    private _auth: AuthService,
    private modalService: NgbModal,
    private _serviceProyArch: ProyArchivosService,
    private _serviceProyecto: ProyectosService,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceInvProyectos: InvProyectosService,
    public calendar: NgbCalendar,
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
    private _serviceSeguimientos: SeguimientosService,
    private _serviceSeguiArchivos: SeguiArchivosService,
    private _servicePeticiones: PeticionesService,
    private _servicePetiArchivos: PetiArchivosService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.who = GLOBAL.who;

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

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.id = params.id;
    });
    this.getProArchivosByIdProyecto(this.id);
    this.getArchivosByTipo(8);
    this.getProyecto(this.id);

    // buscador archivos
    this.search.valueChanges.pipe(debounceTime(300)).subscribe(value => this.valorBusqueda = value);
    // buscador difusiones
    this.searchDifusion.valueChanges.pipe(debounceTime(300)).subscribe(value => this.valorBusquedaDifusion = value);
    this.getInvestigadoresByProyecto(); // investigadores del proyecto

    // this.obtenerBasicaTecnicas();
    this.obtenerLugarDesarrollos();
    this.obtenerDifusion(5);
    this.listado_difusion = 'Todas las difusiones';
    this.obtenerPublicaciones(this.id);
    this.obtenerSeguimientos();
    this.obtenerPeticiones();
  }
  getInvestigadoresByProyecto() {
    this._serviceProyecto.getProyecto(this.id, this.token)
      .then(response => {
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
        response.inv_proyectos.forEach(inv_proyecto => {
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
        this.proyecto.financiamintos = [];
        this.proyecto.unidades = [];
        this._serviceInvProyectos.getInv_proyectosByIdProyecto(this.proyecto.id_proyecto, this.token)
          .then(responseInvProy => {
            this.proyecto.investigadores = responseInvProy.inv_proyectos;
            // obtenemos unidades
            this._serviceUnidades.getUnidadesByIdProyecto(this.proyecto.id_proyecto, this.token)
              .then(responseU => {
                this.proyecto.unidades = responseU.unidades;
                // obtenemos financiamientos
                this._serviceFinanciamientos.getFinanciamientosByIdProyecto(this.proyecto.id_proyecto, this.token)
                  .then(responseF => {
                    this.proyecto.financiamientos = responseF.financiamientos;
                  }).catch(error => { console.log('Error al obtener financiamientos', error); });
              }).catch(error => { console.log('Error al obtener unidades', error); });
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
  getArchivosByTipo(tipo: number) {
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
                archivo: convenio.archivo,
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
                archivo: contratado.archivo,
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
                        archivo: convenio.archivo,
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
                            archivo: contratado.archivo,
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

  openModalBaseTecnica(content, size) {
    this.unidades = [{
      nombre: ''
    }];
    this.basica_tecnica = {
      moneda: '',
      financiamiento: 0,
      tipo: '',
      estado: true
    };
    this.financiamientos = [{
      fuente: '',
      aporte: 0,
      observaciones: ''
    }];

    this._serviceProyecto.getProyecto(this.id, this.token)
      .then(responseP => {
        // this.basica_tecnica = responseP.proyecto;
        this.basica_tecnica = {
          id_proyecto: responseP.proyecto.id_proyecto,
          carrera: responseP.proyecto.carrera,
          n_instituto: responseP.proyecto.n_instituto,
          objetivo: responseP.proyecto.objetivo,
          resumen: responseP.proyecto.resumen,
          tipo: responseP.proyecto.tipo,
          area: responseP.proyecto.area,
          tipo_p: responseP.proyecto.tipo_p,
          carga_h: responseP.proyecto.carga_h,
          financiamiento: responseP.proyecto.financiamiento,
          moneda: responseP.proyecto.moneda
        };
        // obtenemos unidades
        this._serviceUnidades.getUnidadesByIdProyecto(this.basica_tecnica.id_proyecto, this.token)
          .then(responseU => {
            // console.log(responseU);
            if (responseU.unidades.length > 0) {
              this.unidades = responseU.unidades;
            }
            // console.log(this.unidades);
            // obtenemos financiamientos
            this._serviceFinanciamientos.getFinanciamientosByIdProyecto(this.basica_tecnica.id_proyecto, this.token)
              .then(responseF => {
                // console.log(responseF);
                if (responseF.financiamientos.length > 0) {
                  this.financiamientos = responseF.financiamientos;
                }
                // console.log(this.financiamientos);
              }).catch(error => { console.log('Error al obtener financiamientos', error); });
          }).catch(error => { console.log('Error al obtener unidades', error); });
      }).catch(error => { console.log('Error al obtener proyecto por id', error); });

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
          // console.log(responseLugar.lugar_desarrollo);
          this.lat = parseFloat(responseLugar.lugar_desarrollo.latmax);
          this.lng = parseFloat(responseLugar.lugar_desarrollo.lonmax);
          this.markers[0].lat = parseFloat(responseLugar.lugar_desarrollo.latmax);
          this.markers[0].lng = parseFloat(responseLugar.lugar_desarrollo.lonmax);
          this.markers[1].lat = parseFloat(responseLugar.lugar_desarrollo.latmin);
          this.markers[1].lng = parseFloat(responseLugar.lugar_desarrollo.lonmin);
        }).catch(error => { console.log('Error al obtener lugar desarrollo', error); });
    } else {
      this.lugar_desarrollo = {
        departamento: '',
        provincia: '',
        estado: true
      };
      // this.provincias.length = 0;
    }
    this.modalService.open(content, { size: size });
  }
  openModalDifusion(content, size, difusion?) {
    this.difusion = {};
    this.expositores = [{
      nombres: ''
    }];
    this.files.length = 0;
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
          this.fechainicio = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
          date = new Date(this.difusion.fechafin);
          this.fechafinal = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
          this._serviceExpositores.getExpositoresByIdCurso(this.difusion.id_curso, this.token)
            .then(responseExpos => {
              // console.log(responseExpos);
              this.expositores = responseExpos.expositores;
            }).catch(error => { console.log('Error al obtener expositores', error); });
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
          this.fechainicio = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
          date = new Date(this.difusion.fechafin);
          this.fechafinal = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
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
          this.difusion.fecha = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
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
          this.fechainicio = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
          date = new Date(this.difusion.fechafin);
          this.fechafinal = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
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
    this.files.length = 0;
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
          this.publicacion.fecha = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
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
    this.modalService.open(content, { size: size });
    if (archivo.id_convenio) {
      this.archivo = archivo;
    } else if (archivo.id_contratado) {
      this.archivo = archivo;
    } else if (archivo.id_permiso_archivo) {
      this._servicePermisoArchivos.getPermisoArchivoById(this.token, archivo.id_permiso_archivo)
        .then(response => {
          this.archivo = response.permiso_archivo;
        }).catch(error => { console.log('Error al obtener permi archivo', error); });
    } else if (archivo.id_proy_archivo) {
      this._serviceProyArch.getProyArchivoById(archivo.id_proy_archivo, this.token)
        .then(response => {
          this.archivo = response.proy_archivo;
        }).catch(error => { console.log('Error al obtener proy archivo', error); });
    } else if (archivo.id_peti_archivo) {
      this._servicePetiArchivos.getPetiArchivoById(archivo.id_peti_archivo, this.token)
        .then(response => {
          this.archivo = response.peti_archivo;
        }).catch(error => { console.log('Error al obtener peti archivo', error); });
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
    } else if (archivo.id_segui_archivo) {
      this._serviceSeguiArchivos.getSeguiArchivoById(archivo.id_segui_archivo, this.token)
        .then(response => {
          this.archivo = response.segui_archivo;
        }).catch(error => { console.log('Error al obtener segui archivo', error); });
    } else if (archivo.id_contra_archivo) {
      this._serviceContraArchivos.getContraArchivoById(this.token, archivo.id_contra_archivo)
        .then(response => {
          this.archivo = response.contra_archivo;
        }).catch(error => { console.log('Error al obtener contra archivo', error); });
    } else if (archivo.id_conv_archivo) {
      this._serviceConvArchivos.getConvArchivoById(this.token, archivo.id_conv_archivo)
        .then(response => {
          this.archivo = response.conv_archivo;
        }).catch(error => { console.log('Error al obtener conv archivos', error); });
    }
  }

  guardarBasicaTecnica() {
    // console.log(this.basica_tecnica);
    // console.log('unidades', this.unidades);
    // console.log('financiamientos', this.financiamientos);

    this._serviceProyecto.updateProyecto(this.basica_tecnica.id_proyecto, this.basica_tecnica, this.token)
      .then(responseP => {
        this.basica_tecnica = {
          id_proyecto: responseP.proyecto.id_proyecto,
          carrera: responseP.proyecto.carrera,
          n_instituto: responseP.proyecto.n_instituto,
          tipo: responseP.proyecto.tipo,
          area: responseP.proyecto.area,
          tipo_p: responseP.proyecto.tipo_p,
          carga_h: responseP.proyecto.carga_h,
          financiamiento: responseP.proyecto.financiamiento,
          moneda: responseP.proyecto.moneda
        };
        // actualizar unidades
        var contadorF = 0;
        var contadorU = 0;
        if (this.unidades.length > 0) {
          this._serviceUnidades.deleteUnidadesByIdProyecto(this.basica_tecnica.id_proyecto, this.token)
            .then(responseE => {
              // creamos unidades
              this.unidades.forEach(unidad => {
                unidad.id_proyecto = this.basica_tecnica.id_proyecto;
                this._serviceUnidades.save(unidad, this.token)
                  .then(responseU => {
                    contadorU++;
                    if (contadorU === this.unidades.length) {
                      this.getProyecto(this.id);
                    }
                  }).catch(error => { console.log('Error al guardar unidad', error); });
              });
            }).catch(error => { console.log('Error al eliminar', error); });
        }
        // actualizar financiamientos
        if (this.financiamientos.length > 0) {
          this._serviceFinanciamientos.deleteFinanciamientosByIdProyecto(this.basica_tecnica.id_proyecto, this.token)
            .then(responseEF => {
              // creamos financiamientos
              this.financiamientos.forEach(financiamiento => {
                financiamiento.id_proyecto = this.basica_tecnica.id_proyecto;
                this._serviceFinanciamientos.save(financiamiento, this.token)
                  .then(responseF => {
                    contadorF++;
                    if (contadorF === this.financiamientos.length) {
                      this.getProyecto(this.id);
                    }
                  }).catch(error => { console.log('Error al guardar financiamiento', error); });
              });
            }).catch(error => { console.log('Error al eliminar', error); });
        }
        // obtenemos proyecto
        this.getProyecto(this.id);
        this.modalService.dismissAll();
      }).catch(error => { console.log('Error al actualizar basica tecnica', error); });
  }

  guardarLugarDesarrollo() {
    this.lugar_desarrollo.id_proyecto = this.id;
    this.lugar_desarrollo.latmax = parseFloat(this.lugar_desarrollo.latmax);
    this.lugar_desarrollo.lonmax = parseFloat(this.lugar_desarrollo.lonmax);
    this.lugar_desarrollo.latmin = parseFloat(this.lugar_desarrollo.latmin);
    this.lugar_desarrollo.lonmin = parseFloat(this.lugar_desarrollo.lonmin);
    // console.log(this.lugar_desarrollo);
    if (this.lugar_desarrollo.id_lugar_desarrollo) {
      // console.log('Actualizar');
      this._serviceLugarDesarrollos.update(this.lugar_desarrollo.id_lugar_desarrollo, this.lugar_desarrollo, this.token)
        .then(responseLugar => {
          // console.log(responseLugar.lugar_desarrollo);
          this.toastr.success('Lugar de desarrollo actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          this.obtenerLugarDesarrollos();
        }).catch(error => {
          console.log('Error al actualizar lugar desarrollo', error);
          this.toastr.error('Error al actualizar Lugar Desarrollo ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else {
      // console.log('Guardar');
      this._serviceLugarDesarrollos.save(this.lugar_desarrollo, this.token)
        .then(response => {
          // console.log(response);
          this.obtenerLugarDesarrollos();
          this.toastr.success('Lugar de desarrollo guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('error al crear lugar de desarrollo', error);
          this.toastr.error('Error al guardar Lugar de Desarrollo ', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    }

    this.modalService.dismissAll();
  }
  guardarDifusion() {
    this.difusion.id_proyecto = this.id;
    // console.log(this.difusion);
    // console.log(this.files);
    // console.log(this.datosArchivo);
    // console.log(this.expositores);
    if (this.difusion.id_curso) {
      // actualizar curso
      this.difusion.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
      this.difusion.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
      this._serviceCursos.update(this.difusion.id_curso, this.difusion, this.token)
        .then(response => {
          // actualizar expositores
          if (this.expositores.length > 0 || this.files.length > 0) {
            this._serviceExpositores.deleteExpositorByIdCurso(response.curso.id_curso, this.token)
              .then(responseCur => {
                // console.log(responseCur);
                this.expositores.forEach(expositor => {
                  var expo = {
                    id_curso: response.curso.id_curso,
                    nombres: expositor.nombres
                  };
                  this._serviceExpositores.save(expo, this.token)
                    .then(responseE => { })
                    .catch(error => {
                      console.log('Error al crear expositor', error);
                      // this.toastr.error('Error al guardar expositor', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                    });
                });
                // guardar archivos cursos
                if (this.files.length > 0) {
                  var contador = 0;
                  for (let i = 0; i < this.files.length; i++) {
                    const file = this.files[i];
                    var curso_archivo = {
                      id_curso: response.curso.id_curso,
                      archivo: '',
                      nombre: this.datosArchivo[i].nombre,
                      descripcion: this.datosArchivo[i].descripcion,
                      id_tipo: '10'
                    };
                    // console.log(curso_archivo);
                    this._serviceCursoArchivos.save(curso_archivo, this.token)
                      .then(responseArchivo => {
                        // console.log(responseArchivo);
                        this._uploadArchivo.uploadArchivo(this.url + 'upload-curso-archivo/' + responseArchivo.curso_archivos.id_curso_archivo, this.files[i], this.token)
                          .then(responseFile => {
                            contador++;
                            if (contador === this.files.length) {
                              this.toastr.success('Curso, Seminario o Taller actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                              this.obtenerDifusion(1);
                            }
                          }).catch(error => { console.log('error al subir el archivo', error); });
                      }).catch(error => { console.log('error al crear curso archivo', error); });
                  }
                } else {
                  this.toastr.success('Curso, Seminario o Taller actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                  this.obtenerDifusion(1);
                }
              }).catch(error => { console.log('Error al eliminar expositores por id_curso', error); });
          } else {
            this.obtenerDifusion(1);
            this.toastr.success('Curso, Seminario o Taller actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }
        }).catch(error => {
          console.log('Error al actualizar curso', error);
          this.toastr.error('Error al actualizar curso, Seminario o Taller', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });

    } else if (this.difusion.id_evento) {
      // actualizar evento
      this.difusion.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
      this.difusion.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
      this._serviceEventos.update(this.difusion.id_evento, this.difusion, this.token)
        .then(response => {
          // console.log(response);
          // guardar archivo eventos
          if (this.files.length > 0) {
            var contador = 0;
            for (let i = 0; i < this.files.length; i++) {
              var evento_archivo = {
                id_evento: response.evento.id_evento,
                archivo: '',
                nombre: this.datosArchivo[i].nombre,
                descripcion: this.datosArchivo[i].descripcion,
                id_tipo: '11'
              };
              // console.log(evento_archivo);
              this._serviceEventoArchivos.save(evento_archivo, this.token)
                .then(responseArchivo => {
                  // console.log(responseArchivo);
                  this._uploadArchivo.uploadArchivo(this.url + 'upload-evento-archivo/' + responseArchivo.evento_archivos.id_evento_archivo, this.files[i], this.token)
                    .then(responseFile => {
                      // console.log(responseFile);
                      contador++;
                      if (contador === this.files.length) {
                        this.obtenerDifusion(2);
                        this.toastr.success('Evento cientifico actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                      }
                    }).catch(error => { console.log('error al subir el archivo', error); });
                }).catch(error => { console.log('error al crear evento archivo', error); });
            }
          } else {
            this.obtenerDifusion(2);
            this.toastr.success('Evento cientifico actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }
        }).catch(error => {
          console.log('Error al actualizar evento', error);
          this.toastr.error('Error al actualizar Evento cientifico', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else if (this.difusion.id_nota_prensa) {
      // actualizar nota prensa
      this.difusion.fecha = this.formatDate(this.difusion.fecha) + 'T00:00:00.000';
      this._serviceNotaPrensas.update(this.difusion.id_nota_prensa, this.difusion, this.token)
        .then(response => {
          // console.log(response);
          // guardar archivos nota_prensas
          if (this.files.length > 0) {
            var contador = 0;
            for (let i = 0; i < this.files.length; i++) {
              var nota_archivo = {
                id_nota_prensa: response.nota_prensa.id_nota_prensa,
                archivo: '',
                nombre: this.datosArchivo[i].nombre,
                descripcion: this.datosArchivo[i].descripcion,
                id_tipo: '12'
              };
              // console.log(nota_archivo);
              this._serviceNotaArchivos.save(nota_archivo, this.token)
                .then(responseArchivo => {
                  // console.log(responseArchivo);
                  this._uploadArchivo.uploadArchivo(this.url + 'upload-nota-archivo/' + responseArchivo.nota_archivos.id_nota_archivo, this.files[i], this.token)
                    .then(responseFile => {
                      // console.log(responseFile);
                      contador++;
                      if (contador === this.files.length) {
                        this.obtenerDifusion(3);
                        this.toastr.success('Nota de prensa actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                      }
                    }).catch(error => { console.log('error al subir el archivo', error); });
                }).catch(error => { console.log('error al crear nota archivo', error); });
            }
          } else {
            this.obtenerDifusion(3);
            this.toastr.success('Nota de prensa actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }
        }).catch(error => {
          console.log('Error al actualizar nota de prensa', error);
          this.toastr.error('Error al actualizar Nota de prensa', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else if (this.difusion.id_exposicion) {
      // actualizar exposicion
      this.difusion.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
      this.difusion.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
      this._serviceExposiciones.update(this.difusion.id_exposicion, this.difusion, this.token)
        .then(response => {
          // console.log(response);
          // guardar exposicion_archivos
          if (this.files.length > 0) {
            var contador = 0;
            for (let i = 0; i < this.files.length; i++) {
              var expo_archivo = {
                id_exposicion: response.exposicion.id_exposicion,
                archivo: '',
                nombre: this.datosArchivo[i].nombre,
                descripcion: this.datosArchivo[i].descripcion,
                id_tipo: '13'
              };
              // console.log(expo_archivo);
              this._serviceExpoArchivos.save(expo_archivo, this.token)
                .then(responseArchivo => {
                  // console.log(responseArchivo);
                  this._uploadArchivo.uploadArchivo(this.url + 'upload-expo-archivo/' + responseArchivo.expo_archivos.id_expo_archivo, this.files[i], this.token)
                    .then(responseFile => {
                      // console.log(responseFile);
                      contador++;
                      if (contador === this.files.length) {
                        this.obtenerDifusion(4);
                        this.toastr.success('Exposición o Conferencia actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                      }
                    }).catch(error => { console.log('error al subir el archivo', error); });
                }).catch(error => { console.log('error al crear expo archivo', error); });
            }
          } else {
            this.obtenerDifusion(4);
            this.toastr.success('Exposición o Conferencia actualizado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }
        }).catch(error => {
          console.log('Error al actualizar Exposicion', error);
          this.toastr.error('Error al actualizar de Exposición o Conferencia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else {
      switch (this.tipoDifusion) {
        case 1:
          // cursos
          this.difusion.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
          this.difusion.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
          this._serviceCursos.save(this.difusion, this.token)
            .then(response => {
              // console.log(response.cursos);
              // guardar expositores
              if (this.expositores.length > 0) {
                this.expositores.forEach(expositor => {
                  expositor.id_curso = response.cursos.id_curso;
                  // console.log(expositor);
                  this._serviceExpositores.save(expositor, this.token)
                    .then(responseExposi => {
                    }).catch(error => { console.log('Error al guardar expositor', error); });
                });
              }
              // guardar archivos cursos
              if (this.files.length > 0) {
                var contador = 0;
                for (let i = 0; i < this.files.length; i++) {
                  const file = this.files[i];
                  var curso_archivo = {
                    id_curso: response.cursos.id_curso,
                    archivo: '',
                    nombre: this.datosArchivo[i].nombre,
                    descripcion: this.datosArchivo[i].descripcion,
                    id_tipo: '10'
                  };
                  // console.log(curso_archivo);
                  this._serviceCursoArchivos.save(curso_archivo, this.token)
                    .then(responseArchivo => {
                      // console.log(responseArchivo);
                      this._uploadArchivo.uploadArchivo(this.url + 'upload-curso-archivo/' + responseArchivo.curso_archivos.id_curso_archivo, this.files[i], this.token)
                        .then(responseFile => {
                          // console.log(responseFile);
                          contador++;
                          if (contador === this.files.length) {
                            this.obtenerDifusion(1);
                            this.modalService.dismissAll();
                            this.toastr.success('Curso, Seminario o Taller guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          }
                        }).catch(error => { console.log('error al subir el archivo', error); });
                    }).catch(error => { console.log('error al crear curso archivo', error); });
                }
              } else {
                this.obtenerDifusion(1);
                this.modalService.dismissAll();
                this.toastr.success('Curso, Seminario o Taller guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              }
            }).catch(error => {
              console.log('error al crear difusion curso', error);
              this.toastr.error('Error al guardar Curso, Seminario o Taller', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          break;
        case 2:
          // evento
          this.difusion.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
          this.difusion.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
          // console.log(this.difusion);
          this._serviceEventos.save(this.difusion, this.token)
            .then(response => {
              // console.log(response.eventos);
              if (this.files.length > 0) {
                var contador = 0;
                for (let i = 0; i < this.files.length; i++) {
                  var evento_archivo = {
                    id_evento: response.eventos.id_evento,
                    archivo: '',
                    nombre: this.datosArchivo[i].nombre,
                    descripcion: this.datosArchivo[i].descripcion,
                    id_tipo: '11'
                  };
                  // console.log(evento_archivo);
                  this._serviceEventoArchivos.save(evento_archivo, this.token)
                    .then(responseArchivo => {
                      // console.log(responseArchivo);
                      this._uploadArchivo.uploadArchivo(this.url + 'upload-evento-archivo/' + responseArchivo.evento_archivos.id_evento_archivo, this.files[i], this.token)
                        .then(responseFile => {
                          contador++;
                          if (contador === this.files.length) {
                            this.obtenerDifusion(2);
                            this.toastr.success('Evento cientifico guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          }
                        }).catch(error => { console.log('error al subir el archivo', error); });
                    }).catch(error => { console.log('error al crear evento archivo', error); });
                }
              } else {
                this.obtenerDifusion(2);
                this.toastr.success('Evento cientifico guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              }
            }).catch(error => {
              console.log('error al crear evento', error);
              this.toastr.error('Error al guardar Evento cientifico', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          this.modalService.dismissAll();
          break;
        case 3:
          // nota_prensas
          this.difusion.fecha = this.formatDate(this.difusion.fecha) + 'T00:00:00.000';
          // console.log(this.difusion);
          this._serviceNotaPrensas.save(this.difusion, this.token)
            .then(response => {
              // console.log(response.nota_archivos);
              if (this.files.length > 0) {
                var contador = 0;
                for (let i = 0; i < this.files.length; i++) {
                  var nota_archivo = {
                    id_nota_prensa: response.nota_prensas.id_nota_prensa,
                    archivo: '',
                    nombre: this.datosArchivo[i].nombre,
                    descripcion: this.datosArchivo[i].descripcion,
                    id_tipo: '12'
                  };
                  // console.log(nota_archivo);
                  this._serviceNotaArchivos.save(nota_archivo, this.token)
                    .then(responseArchivo => {
                      // console.log(responseArchivo);
                      this._uploadArchivo.uploadArchivo(this.url + 'upload-nota-archivo/' + responseArchivo.nota_archivos.id_nota_archivo, this.files[i], this.token)
                        .then(responseFile => {
                          // console.log(responseFile);
                          contador++;
                          if (this.files.length === contador) {
                            this.obtenerDifusion(3);
                            this.toastr.success('Nota de prensa guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          }
                        }).catch(error => { console.log('error al subir el archivo', error); });
                    }).catch(error => { console.log('error al crear nota archivo', error); });
                }
              } else {
                this.obtenerDifusion(3);
                this.toastr.success('Nota de prensa guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              }
            }).catch(error => {
              console.log('error al crear nota de presa', error);
              this.toastr.error('Error al guardar Nota de prensa', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          this.modalService.dismissAll();
          break;
        case 4:
          // exposiciones
          this.difusion.fechaini = this.formatDate(this.fechainicio) + 'T00:00:00.000';
          this.difusion.fechafin = this.formatDate(this.fechafinal) + 'T00:00:00.000';
          // console.log(this.difusion);
          this._serviceExposiciones.save(this.difusion, this.token)
            .then(response => {
              // console.log(response.exposiciones);
              if (this.files.length > 0) {
                var contador = 0;
                for (let i = 0; i < this.files.length; i++) {
                  var expo_archivo = {
                    id_exposicion: response.exposiciones.id_exposicion,
                    archivo: '',
                    nombre: this.datosArchivo[i].nombre,
                    descripcion: this.datosArchivo[i].descripcion,
                    id_tipo: '13'
                  };
                  // console.log(expo_archivo);
                  this._serviceExpoArchivos.save(expo_archivo, this.token)
                    .then(responseArchivo => {
                      // console.log(responseArchivo);
                      this._uploadArchivo.uploadArchivo(this.url + 'upload-expo-archivo/' + responseArchivo.expo_archivos.id_expo_archivo, this.files[i], this.token)
                        .then(responseFile => {
                          contador++;
                          if (contador === this.files.length) {
                            this.obtenerDifusion(4);
                            this.toastr.success('Exposicion y conferencia guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                          }
                        }).catch(error => { console.log('error al subir el archivo', error); });
                      this.obtenerDifusion(4);
                    }).catch(error => { console.log('error al crear expo archivo', error); });
                }
              } else {
                this.obtenerDifusion(4);
                this.toastr.success('Exposicion y conferencia guardado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
              }
            }).catch(error => {
              console.log('error al crear exposicion', error);
              this.toastr.error('Error al guardar Exposicion o Conferencia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            });
          this.modalService.dismissAll();
          break;
        default:
          console.log('error');
          break;
      }
    }
    this.modalService.dismissAll();
  }
  guardarPublicacion() {
    // console.log(this.publicacion);
    // console.log(this.files);
    // console.log(this.datosArchivo);
    // console.log(this.seleccionados);
    this.publicacion.fecha = this.formatDate(this.publicacion.fecha) + 'T00:00:00.000';
    this.publicacion.id_proyecto = this.proyecto.id_proyecto;
    this.publicacion.id_coordinador = this.proyecto.investigadore.id_investigador;
    // console.log(this.publicacion);

    if (this.publicacion.id_publicacion) {
      // console.log('actualizar');
      this._servicePublicaciones.update(this.publicacion.id_publicacion, this.publicacion, this.token)
        .then(response => {
          // console.log(response.publicacion);
          // añadir archivos
          if (this.files.length > 0) {
            var contador = 0;
            for (let i = 0; i < this.files.length; i++) {
              var publi_archivo = {
                id_publicacion: response.publicacion.id_publicacion,
                archivo: '',
                nombre: this.datosArchivo[i].nombre,
                descripcion: this.datosArchivo[i].descripcion,
                id_tipo: '14'
              };
              // console.log(publi_archivo);
              this._servicePubliArchivos.save(publi_archivo, this.token)
                .then(responseArchivo => {
                  // console.log(responseArchivo);
                  this._uploadArchivo.uploadArchivo(this.url + 'upload-publi-archivo/' + responseArchivo.publi_archivo.id_publi_archivo, this.files[i], this.token)
                    .then(responseFile => {
                      contador++;
                      if (contador === this.files.length) {
                        this.toastr.success('Publicación actualizada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                        this.obtenerPublicaciones(this.id);
                      }
                    }).catch(error => { console.log('error al subir el archivo', error); });
                }).catch(error => { console.log('error al crear evento archivo', error); });
            }
          } else {
            this.toastr.success('Publicación actualizada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
            this.obtenerPublicaciones(this.id);
          }
          // actualizar autores
        }).catch(error => {
          console.log('Error al actualizar publicacion', error);
          this.toastr.error('Error al actualizar publicación', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else {
      this._servicePublicaciones.save(this.publicacion, this.token)
        .then(response => {
          // console.log(response);
          // guardar publi_archivo
          // guardar autores
          this.seleccionados.forEach(autor => {
            autor.id_publicacion = response.publicacion.id_publicacion;
            this._serviceAutores.save(autor, this.token)
              .then(responseA => { })
              .catch(error => { console.log('Error guardar autor', error); });
          });
          if (this.files.length > 0) {
            var contador = 0;
            for (let i = 0; i < this.files.length; i++) {
              var publi_archivo = {
                id_publicacion: response.publicacion.id_publicacion,
                archivo: '',
                nombre: this.datosArchivo[i].nombre,
                descripcion: this.datosArchivo[i].descripcion,
                id_tipo: '14'
              };
              // console.log(publi_archivo);
              this._servicePubliArchivos.save(publi_archivo, this.token)
                .then(responseArchivo => {
                  // console.log(responseArchivo);
                  this._uploadArchivo.uploadArchivo(this.url + 'upload-publi-archivo/' + responseArchivo.publi_archivo.id_publi_archivo, this.files[i], this.token)
                    .then(responseFile => {
                      contador++;
                      if (contador === this.files.length) {
                        this.obtenerPublicaciones(this.id);
                        this.toastr.success('Publicación guardada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
                      }
                    }).catch(error => { console.log('error al subir el archivo', error); });
                }).catch(error => { console.log('error al crear publi archivo', error); });
            }
          } else {
            this.obtenerPublicaciones(this.id);
            this.toastr.success('Publicación guardada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          }
        }).catch(error => {
          console.log('Error al crear publicacion', error);
          this.toastr.error('Error al guardar publicación', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    }
    this.modalService.dismissAll();
  }
  borrarTodoDifusion() {
    this.difusion = {};
    this.unidades = [{
      nombre: ''
    }];
    this.files.length = 0;
    this.datosArchivo.length = 0;
    this.antFileTam = 0;
  }
  borrarTodoPublicacion() {
    this.files.length = 0;
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
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  cancel() {
    this.progress = 0;
    if (this.httpEmitter) {
      // console.log('Cancelado');
      this.httpEmitter.unsubscribe();
    }
  }
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

  fileChange(files: any) {
    this.lastFileAt = this.getDate();
    this.setName(files);
  }

  addUnidad() {
    this.unidades.push({
      nombre: ''
    });
  }
  addFinanciamiento() {
    this.financiamientos.push({
      fuente: '',
      aporte: 0,
      observacion: ''
    });
  }
  removeUnidad(i: number) {
    this.unidades.splice(i, 1);
  }
  removeFinanciamiento(i: number) {
    this.financiamientos.splice(i, 1);
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
    this._servicePublicaciones.update(id, { estado: false }, this.token)
      .then(response => {
        this.obtenerPublicaciones(this.id);
      }).catch(error => { console.log('Error al eliminar publicacion', error); });

  }
  eliminarLugarDesarrollo(id: number) {
    this._serviceLugarDesarrollos.update(id, { estado: false }, this.token)
      .then(response => {
        this.obtenerLugarDesarrollos();
        this.toastr.success('Lugar de Desarrollo eliminada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      }).catch(error => {
        console.log('Error al actualizar Lugar Desarollo', error);
        this.toastr.error('Error al eliminar Lugar de Desarrollo', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
  }
  eliminarDifusion(difu: any) {
    if (difu.id_curso) {
      this._serviceCursos.update(difu.id_curso, { estado: false }, this.token)
        .then(response => {
          this.obtenerDifusion(1);
          this.toastr.success('Curso, Seminario o Taller eliminado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar curso', error);
          this.toastr.error('Error al eliminar Curso, Seminario o Taller', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else if (difu.id_evento) {
      this._serviceEventos.update(difu.id_evento, { estado: false }, this.token)
        .then(response => {
          this.obtenerDifusion(2);
          this.toastr.success('Evento Cientifico eliminado', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar evento', error);
          this.toastr.error('Error al eliminar Evento Cientifico', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else if (difu.id_nota_prensa) {
      this._serviceNotaPrensas.update(difu.id_nota_prensa, { estado: false }, this.token)
        .then(response => {
          this.obtenerDifusion(3);
          this.toastr.success('Nota de prensa eliminada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar nota prensa', error);
          this.toastr.error('Error al eliminar Nota de Prensa', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else if (difu.id_exposicion) {
      this._serviceExposiciones.update(difu.id_exposicion, { estado: false }, this.token)
        .then(response => {
          this.obtenerDifusion(4);
          this.toastr.success('Exposicion eliminada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        }).catch(error => {
          console.log('Error al actualizar exposicion', error);
          this.toastr.error('Error al eliminar Exposicion o Conferencia', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else {
      console.log('Error');
    }
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
    // console.log(this.archivo);
    if (this.archivo.id_publi_archivo) {
      this._servicePubliArchivos.update(this.archivo.id_publi_archivo, this.archivo, this.token)
        .then(response => {
          this.archivo = response.publi_archivo;
          this.obtenerPublicaciones(this.id);
        }).catch(error => { console.log('Error al actualizar publi archivo', error); });
    } else if (this.archivo.id_curso_archivo) {
      this._serviceCursoArchivos.update(this.archivo.id_curso_archivo, this.archivo, this.token)
        .then(response => {
          this.archivo = response.curso_archivo;
          this.obtenerDifusion(1);
        }).catch(error => { console.log('Error al actualizar curso archivo', error); });
    } else if (this.archivo.id_evento_archivo) {
      this._serviceEventoArchivos.update(this.archivo.id_evento_archivo, this.archivo, this.token)
        .then(response => {
          this.archivo = response.evento_archivo;
          this.obtenerDifusion(2);
        }).catch(error => { console.log('Error al actualizar evento archivo', error); });
    } else if (this.archivo.id_nota_archivo) {
      this._serviceNotaArchivos.update(this.archivo.id_nota_archivo, this.archivo, this.token)
        .then(response => {
          this.archivo = response.nota_archivo;
          this.obtenerDifusion(3);
        }).catch(error => { console.log('Error al actualizar nota archivo', error); });
    } else if (this.archivo.id_expo_archivo) {
      this._serviceExpoArchivos.update(this.archivo.id_expo_archivo, this.archivo, this.token)
        .then(response => {
          this.archivo = response.expo_archivo;
          this.obtenerDifusion(4);
        }).catch(error => { console.log('Error al actualizar expo archivo', error); });
    }
    this.modalService.dismissAll();
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

  openModalNuevoSeguimiento(content, size, id_seguimiento?: number) {
    this.modalService.open(content, { size: size });
    if (id_seguimiento) {
      this._serviceSeguimientos.getSeguimientoById(id_seguimiento, this.token)
        .then(response => {
          this.seguimiento = response.seguimiento;
        }).catch(error => { console.log('Error al obtener seguimiento por id', error); });
    } else {
      this.seguimiento = {};
    }
  }

  tipoArchivo(idTipo: number): string {
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

  obtenerPeticiones() {
    this.peticiones = [];
    this._servicePeticiones.getPeticionesByIdProyecto(this.id, this.token)
      .then(response => {
        // this.peticiones = response.peticiones;
        response.peticiones.forEach(peti => {
          peti.archivos = [];
          this._servicePetiArchivos.getPetiArchivosByIdPeticion(peti.id_peticion, this.token)
            .then(responsePetiArch => {
              peti.archivos = responsePetiArch.peti_archivos;
              this._serviceInvestigadores.getInvestigador(peti.id_investigador, this.token)
                .then(responseInv => {
                  peti.investigador = `${responseInv.investigador.persona.nombres} ${responseInv.investigador.persona.paterno} ${responseInv.investigador.persona.materno}`;
                  this.peticiones.push(peti);
                }).catch(error => { console.log('Error al obtener investigador', error); });
            }).catch(error => { console.log('Error al obtener peti Archivo', error); });
        });
      }).catch(error => { console.log('Error al obtener peticiones por id_proyecto', error); });
  }

  openModalPeticion(content, size, idPeticion: number) {
    this.modalService.open(content, { size: size });
    this._servicePeticiones.getPeticionById(idPeticion, this.token)
      .then(response => {
        this.peticion = response.peticion;
      }).catch(error => { console.log('Error al obtener peticion by id', error); });
  }
  openModalEliminar(content, size, auxi: any) {
    this.modalService.open(content, { size: size });
    this.auxiEliminar = auxi;
    if (auxi.id_publicacion) {
      this.tituloEliminar = 'Publicación';
    } else if (auxi.id_basica_tecnica) {
      this.tituloEliminar = 'Basica Tecnica';
      // borrar
    } else if (auxi.id_lugar_desarrollo) {
      this.tituloEliminar = 'Lugar de desarrollo';

    } else if (auxi.id_curso) {
      this.tituloEliminar = 'Curso, Seminario';

    } else if (auxi.id_evento) {
      this.tituloEliminar = 'Evento';

    } else if (auxi.id_nota_prensa) {
      this.tituloEliminar = 'Nota de prensa';

    } else if (auxi.id_exposicion) {
      this.tituloEliminar = 'Exposición';

    }
  }
  eliminar() {
    if (this.auxiEliminar.id_publicacion) {
      this.eliminarPublicacion(this.auxiEliminar.id_publicacion);
    } else if (this.auxiEliminar.id_lugar_desarrollo) {
      this.eliminarLugarDesarrollo(this.auxiEliminar.id_lugar_desarrollo);
    } else if (this.auxiEliminar.id_curso) {
      this.eliminarDifusion(this.auxiEliminar);
    } else if (this.auxiEliminar.id_evento) {
      this.eliminarDifusion(this.auxiEliminar);
    } else if (this.auxiEliminar.id_nota_prensa) {
      this.eliminarDifusion(this.auxiEliminar);
    } else if (this.auxiEliminar.id_exposicion) {
      this.eliminarDifusion(this.auxiEliminar);
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    // console.log($event.coords.lat, $event.coords.lng);
    this.pos = 1 - this.pos;
    this.markers[this.pos].lat = $event.coords.lat;
    this.markers[this.pos].lng = $event.coords.lng;
    if (this.pos === 0) {
      this.lugar_desarrollo.latmax = $event.coords.lat;
      this.lugar_desarrollo.lonmax = $event.coords.lng;
    } else {
      this.lugar_desarrollo.latmin = $event.coords.lat;
      this.lugar_desarrollo.lonmin = $event.coords.lng;
    }
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
