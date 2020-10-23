import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Injectable,
} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { CdkTableExporterModule } from 'cdk-table-exporter';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {
  NgbModal,
  NgbDatepickerI18n,
  NgbDateStruct,
  NgbDate,
} from '@ng-bootstrap/ng-bootstrap';

// imprimir
import * as printJS from 'print-js';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { PublicacionesService } from 'src/app/services/proyecto/publicaciones.service';
import { PubliArchivosService } from 'src/app/services/proyecto/publi-archivos.service';
import { ProyArchivosService } from 'src/app/services/admin/proy-archivos.service';
import { InvestigadoresService } from 'src/app/services/admin/investigadores.service';
import { LugarDesarrollosService } from 'src/app/services/proyecto/lugar-desarrollos.service';
import { CursosService } from 'src/app/services/proyecto/cursos.service';
import { EventosService } from 'src/app/services/proyecto/eventos.service';
import { NotaPrensasService } from 'src/app/services/proyecto/nota-prensas.service';
import { ExposicionesService } from 'src/app/services/proyecto/exposiciones.service';
import { ExpoArchivosService } from 'src/app/services/proyecto/expo-archivos.service';
import { NotaArchivosService } from 'src/app/services/proyecto/nota-archivos.service';
import { EventoArchivosService } from 'src/app/services/proyecto/evento-archivos.service';
import { CursoArchivosService } from 'src/app/services/proyecto/curso-archivos.service';
import { PermisoArchivosService } from 'src/app/services/proyecto/permiso-archivos.service';
import { ConveniosService } from 'src/app/services/proyecto/convenios.service';
import { ConvArchivosService } from 'src/app/services/proyecto/conv-archivos.service';
import { ContratadosService } from 'src/app/services/proyecto/contratados.service';
import { ContraArchivosService } from 'src/app/services/proyecto/contra-archivos.service';
import { UnidadesService } from 'src/app/services/proyecto/unidades.service';
import { ExpositoresService } from 'src/app/services/proyecto/expositores.service';
import { GLOBAL } from 'src/app/services/global';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { InvProyectosService } from 'src/app/services/admin/inv-proyectos.service';
import { FinanciamientosService } from 'src/app/services/proyecto/financiamientos.service';
import { FormControl } from '@angular/forms';

// datapicker spanish
const I18N_VALUES = {
  es: {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    months: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    format: 'dd-mm-yyyy',
  },
};
@Injectable()
export class I18n {
  language = 'es';
}
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
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
  selector: 'app-generate-reportes',
  templateUrl: './generate-reportes.component.html',
  styleUrls: ['./generate-reportes.component.css'],
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
  ],
})
export class GenerateReportesComponent
  implements OnInit, CdkTableExporterModule {
  public sidebarVisible: boolean = true;

  title = 'angularmat';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  dataSource: MatTableDataSource<any>;

  //var init declaration
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 30, 50, 80, 100];
  currentPage = 0;


  // filtros
  public token: string;
  public proyectos: Array<any> = [];
  public url: string;
  public proyecto: any = {};

  // realizar filtros
  public filtro: any = {};

  // buscar por lugar
  public provincias: any = [];
  public departamentos: any = [
    {
      value: 'Beni',
      depa: 'Beni',
      capi: 'Trinidad',
      provincias: [
        { provi: 'Cercado', capi: 'San Javier' },
        { provi: 'Antonio Vaca Díez', capi: 'Riberalta' },
        { provi: 'General José Ballivián Segurola', capi: 'Santos Reyes' },
        { provi: 'Yacuma', capi: 'Santa Ana de Yacuma' },
        { provi: 'Moxos', capi: 'San Ignacio de Moxos' },
        { provi: 'Marbán', capi: 'Loreto' },
        { provi: 'Mamoré', capi: 'San Joaquín' },
        { provi: 'Iténez', capi: 'Magdalena' },
      ],
    },
    {
      value: 'Chuquisaca',
      depa: 'Chuquisaca',
      capi: 'Sucre',
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
        { provi: 'Luis Calvo', capi: 'Villa Vaca Guzmán' },
      ],
    },
    {
      value: 'Cochabamba',
      depa: 'Cochabamba',
      capi: 'Cochabamba',
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
        { provi: 'Tiraque', capi: 'Tiraque' },
      ],
    },
    {
      value: 'La Paz',
      depa: 'La Paz',
      capi: 'La Paz',
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
        { provi: 'Sud Yungas', capi: 'Chulumani' },
      ],
    },
    {
      value: 'Oruro',
      depa: 'Oruro',
      capi: 'Oruro',
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
        { provi: 'Tomas Barrón', capi: 'Eucaliptus' },
      ],
    },
    {
      value: 'Pando',
      depa: 'Pando',
      capi: 'Cobija',
      provincias: [
        { provi: 'Abuná', capi: 'Santa Rosa del Abuná' },
        { provi: 'Federico Román', capi: 'Nueva Esperanza' },
        { provi: 'Madre de Dios', capi: 'Puerto Gonzalo Moreno' },
        { provi: 'Manuripi', capi: 'Puerto Rico' },
        { provi: 'Nicolás Suárez', capi: 'Cobija' },
      ],
    },
    {
      value: 'Potosí',
      depa: 'Potosí',
      capi: 'Potosí',
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
        { provi: 'Tomás Frías', capi: 'Tinguipaya' },
      ],
    },
    {
      value: 'Santa Cruz',
      depa: 'Santa Cruz',
      capi: 'Santa Cruz de la Sierra',
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
        { provi: 'Guarayos', capi: 'Ascensión' },
      ],
    },
    {
      value: 'Tarija',
      depa: 'Tarija',
      capi: 'Tarija',
      provincias: [
        { provi: 'Aniceto Arce', capi: 'Padcaya' },
        { provi: 'Burdet OConnor', capi: 'Entre Ríos' },
        { provi: 'Cercado', capi: 'Tarija' },
        { provi: 'Eustaquio Méndez', capi: 'San Lorenzo' },
        { provi: 'Gran Chaco', capi: 'Yacuiba' },
        { provi: 'José María Avilés', capi: 'Uriondo' },
      ],
    },
  ];

  // basica tecnica
  public dropdownList: Array<any>;
  public dropdownSettings: any;

  // numero
  public dropdownList1: Array<any>;
  public dropdownSettings1: any;

  // difusiones
  public dropdownList2: Array<any>;
  public dropdownSettings2: any;

  // lugar_desarrollo
  public dropdownList3: Array<any>;
  public dropdownSettings3: any;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal,
    private _auth: AuthService,
    private _serviceProyectos: ProyectosService,
    private _servideProyArchivos: ProyArchivosService,
    private _servicePublicaciones: PublicacionesService,
    private _servicePubliArchivos: PubliArchivosService,
    private _serviceInvestigadores: InvestigadoresService,
    private _serviceFinanciamientos: FinanciamientosService,
    private _serviceLugarDesarrollo: LugarDesarrollosService,
    private _serviceCursos: CursosService,
    private _serviceCursoArchivos: CursoArchivosService,
    private _serviceEventos: EventosService,
    private _serviceEventoArchivos: EventoArchivosService,
    private _serviceNotaPrensas: NotaPrensasService,
    private _serviceNotaArchivos: NotaArchivosService,
    private _serviceExposiciones: ExposicionesService,
    private _serviceExpoArchivos: ExpoArchivosService,
    private _servicePermisoArchivos: PermisoArchivosService,
    private _serviceConvenios: ConveniosService,
    private _serviceConvArchivos: ConvArchivosService,
    private _serviceContratados: ContratadosService,
    private _serviceContraArchivos: ContraArchivosService,
    private _serviceUnidades: UnidadesService,
    private _serviceExpositores: ExpositoresService,
    private _serviceInvProyectos: InvProyectosService,
    private toastr: ToastrService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.dropdownList = [
      { item_id: 1, item_text: 'Carrera' },
      { item_id: 2, item_text: 'Nombre Instituto' },
      { item_id: 3, item_text: 'Tipo investigación' },
      { item_id: 4, item_text: 'Area investigación' },
      { item_id: 5, item_text: 'Tipo proyecto' },
      { item_id: 6, item_text: 'Carga horaria' },
      { item_id: 7, item_text: 'Unidades' },
      { item_id: 8, item_text: 'Financiamiento' },
      { item_id: 9, item_text: 'FInanciamientos' },
      { item_id: 10, item_text: 'FInanciamientos con Aporte' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todo',
      maxHeight: 100
    };
    this.dropdownList1 = [
      { num_id: 1, num_text: 'Número Publicaciones' },
      { num_id: 2, num_text: 'Número Lugares de desarrollo' },
      { num_id: 3, num_text: 'Número Convenios' },
      { num_id: 4, num_text: 'Número Contratados' },
      { num_id: 5, num_text: 'Número Cursos' },
      { num_id: 6, num_text: 'Número Eventos' },
      { num_id: 7, num_text: 'Número Unidades' },
      { num_id: 8, num_text: 'Número Notas de prensa' },
      { num_id: 9, num_text: 'Número Exposiciones' }
    ];
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'num_id',
      textField: 'num_text',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todo',
      maxHeight: 100
    };
    this.dropdownList2 = [
      { difu_id: 1, difu_text: 'Difusión Cursos' },
      { difu_id: 2, difu_text: 'Difusión Eventos' },
      { difu_id: 3, difu_text: 'Difusión Notas de prensa' },
      { difu_id: 4, difu_text: 'Difusión Exposiciones' },
    ];
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'difu_id',
      textField: 'difu_text',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todo',
      maxHeight: 100
    };
    this.dropdownList3 = [
      { luga_id: 1, luga_text: 'Departamentos' },
      { luga_id: 2, luga_text: 'Provincias' },
      { luga_id: 3, luga_text: 'Municipio' },
      { luga_id: 4, luga_text: 'Localidad' },
      { luga_id: 5, luga_text: 'Geolozalización' }
    ];
    this.dropdownSettings3 = {
      singleSelection: false,
      idField: 'luga_id',
      textField: 'luga_text',
      selectAllText: 'Seleccionar Todos',
      unSelectAllText: 'Deseleccionar Todo',
      maxHeight: 100
    };
  }

  ngOnInit(): void {
    this.filtroInicial();
    this.vaciarFiltro();
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addColumn(columna: string) {
    this.columnsToDisplay.push(columna);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  openModal(content, size) {
    this.modalService.open(content, { size: size });
  }

  imprimir(exporter) {
    const pageAnt = this.dataSource.paginator.pageSize;
    this.dataSource.paginator._changePageSize(this.length);

    // console.log('exporter', exporter._cdkTable._data);
    // console.log('dataSource', this.dataSource.data);
    let data: any = exporter._cdkTable._data;
    let propiedades: any = this.columnsToDisplay;

    printJS({ printable: data, properties: propiedades, type: 'json' });

    this.dataSource.paginator._changePageSize(pageAnt);
  }

  obtenerProyectos() { }

  filtroInicial() {
    this._serviceProyectos.getProyectos(this.token)
      .then((response) => {
        this.proyectos = [];
        response.proyectos.forEach((proyecto) => {
          // 2020-05-31 T04:00:00.000Z
          proyecto.fechaini = proyecto.fechaini.substring(0, 10);
          proyecto.fechafin = proyecto.fechafin.substring(0, 10);
          this.proyectos.push(proyecto);
        });

        this.displayedColumns = [
          'titulo',
          'fechaini',
          'fechafin',
          'proceso',
          'estado'
        ];
        this.columnsToDisplay = this.displayedColumns.slice();

        this.dataSource = new MatTableDataSource(this.proyectos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.length = this.dataSource.data.length;
        if (this.length > 100) {
          let ini = Math.ceil(this.length / 5);
          this.pageSize = ini;
          this.pageSizeOptions = [];
          for (let i = ini; i < this.length + ini; i = i + ini) {
            if (i >= this.length) {
              this.pageSizeOptions.push(this.length);
            } else {
              this.pageSizeOptions.push(i);
            }
          }
        }
        // console.log(this.proyectos);
      })
      .catch((error) => {
        console.log('Error al obtener proyectos', error);
      });
  }
  handlePage(event?: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.proyectos.slice(start, end);
    this.dataSource = new MatTableDataSource(part);
  }

  formatDate(d: NgbDate): string {
    if (d === null) {
      return null;
    }
    return [
      d.year,
      d.month < 10 ? '0' + d.month : d.month,
      d.day < 10 ? '0' + d.day : d.day,
    ].join('-');
  }

  formatDateString(d: string): NgbDate {
    if (d === null) {
      return null;
    }
    let anio = parseInt(d.substring(0, 4));
    let mes = d.substring(5, 6) === '0' ? parseInt(d.substring(6, 7)) : parseInt(d.substring(5, 7));
    let dia = d.substring(8, 9) === '0' ? parseInt(d.substring(9, 10)) : parseInt(d.substring(8, 10));
    let date = new NgbDate(anio, mes, dia);
    return date;
  }

  realizarFiltro() {
    console.log(this.filtro);
    this.columnaInicial();
    if ((this.filtro.tipoFecha === 'inicio' || this.filtro.tipoFecha === 'final') && !this.filtro.fechaini && !this.filtro.fechafin) {
      this.toastr.error('Seleccionó fechas, debe llenar los campos', undefined, { closeButton: true, positionClass: 'toast-top-right' }); //bottom
    } else if (this.filtro.tipoFecha === 'inicio' && this.filtro.estado && this.filtro.fechaini && this.filtro.fechafin && this.filtro.procesoini && this.filtro.procesofin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenProccessBetweenDatesIniAndStatus(
        this.filtro.procesoini,
        this.filtro.procesofin,
        fechaini,
        fechafin,
        this.filtro.estado,
        this.token
      ).then(response => {
        this.proyectos = response.proyectos;
        this.filtroRecorrido();
      }).catch(error => { console.log('Error al obtener proyectos', error); });
    } else if (this.filtro.tipoFecha === 'final' && this.filtro.estado && this.filtro.fechaini && this.filtro.fechafin && this.filtro.procesoini && this.filtro.procesofin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenProccessBetweenDatesFinAndStatus(
        this.filtro.procesoini,
        this.filtro.procesofin,
        fechaini,
        fechafin,
        this.filtro.estado,
        this.token
      ).then(response => {
        this.proyectos = response.proyectos;
        this.filtroRecorrido();
      }).catch(error => { console.log('Error al obtener proyectos', error); });
    } else if (this.filtro.tipoFecha === 'inicio' && this.filtro.fechaini && this.filtro.fechafin && this.filtro.procesoini && this.filtro.procesofin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenProccessAndBetweenDatesIni(
        this.filtro.procesoini,
        this.filtro.procesofin,
        fechaini,
        fechafin,
        this.token
      ).then(response => {
        this.proyectos = response.proyectos;
        this.filtroRecorrido();
      }).catch(error => { console.log('Error al obtener proyectos', error); });
    } else if (this.filtro.tipoFecha === 'final' && this.filtro.fechaini && this.filtro.fechafin && this.filtro.procesoini && this.filtro.procesofin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenProccessAndBetweenDatesFin(
        this.filtro.procesoini,
        this.filtro.procesofin,
        fechaini,
        fechafin,
        this.token
      ).then(response => {
        this.proyectos = response.proyectos;
        this.filtroRecorrido();
      }).catch(error => { console.log('Error al obtener proyectos', error); });
    } else if (this.filtro.estado && this.filtro.procesoini && this.filtro.procesofin) {
      this._serviceProyectos.getProyectosBetweenProccessAndStatus(this.filtro.procesoini, this.filtro.procesofin, this.filtro.estado, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos', error); });
    } else if (this.filtro.procesoini && this.filtro.procesofin) {
      this._serviceProyectos.getProyectosBetweenProccess(this.filtro.procesoini, this.filtro.procesofin, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos', error); });
    } else if (this.filtro.tipoFecha === 'inicio' && this.filtro.estado && this.filtro.fechaini && this.filtro.fechafin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenDatesIniAndStatus(fechaini, fechafin, this.filtro.estado, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos entre fechas y estado', error); });
    } else if (this.filtro.tipoFecha === 'inicio' && this.filtro.fechaini && this.filtro.fechafin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenDatesIni(fechaini, fechafin, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos entre fechas', error); });
    } else if (this.filtro.tipoFecha === 'final' && this.filtro.estado && this.filtro.fechaini && this.filtro.fechafin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenDatesFinAndStatus(fechaini, fechafin, this.filtro.estado, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos entre fechas y estado', error); });
    } else if (this.filtro.tipoFecha === 'final' && this.filtro.fechaini && this.filtro.fechafin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenDatesFin(fechaini, fechafin, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos entre fechas', error); });
    } else if (this.filtro.estado) {
      this._serviceProyectos.getProyectosByEstado(this.filtro.estado, this.token)
        .then(response => {
          this.proyectos = response.proyectos
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos por estado', error); });
    } else {
      this._serviceProyectos.getProyectos(this.token)
        .then(response => {
          this.proyectos = response.proyectos;
          this.filtroRecorrido();
        }).catch(error => { console.log('Error al obtener proyectos', error); });
    }
  }
  filtroRecorrido() {
    console.log(this.proyectos);
    let proys: any = [];
    this.proyectos.forEach(proyecto => {
      // buscando departamento o provincia
      if (this.filtro.departamento && this.filtro.provincia) {
        // tslint:disable-next-line:max-line-length
        this._serviceLugarDesarrollo.getLugarDesarrollosByIdProyectoDepartamentoAndProvincia(proyecto.id_proyecto, this.filtro.departamento, this.filtro.provincia, this.token)
          .then(response => {
            // console.log(response);
            let depa = '';
            response.lugar_desarrollos.forEach(lugar_desarrollo => {
              depa = depa + ' - ' + lugar_desarrollo.departamento + ', ' + lugar_desarrollo.provincia;
            });
            proyecto.departamento = depa;
          }).catch(error => { console.log('Error al obtener lugar de desarrollos', error); });
      } else if (this.filtro.departamento) {
        // tslint:disable-next-line:max-line-length
        this._serviceLugarDesarrollo.getLugarDesarrollosByIdProyectoAndDepartamento(proyecto.id_proyecto, this.filtro.departamento, this.token)
          .then(response => {
            // console.log(response);
            let depa = '';
            response.lugar_desarrollos.forEach(lugar_desarrollo => {
              depa = depa + ' - ' + lugar_desarrollo.departamento + ', ' + lugar_desarrollo.provincia;
            });
            proyecto.departamento = depa;
          }).catch(error => { console.log('Error al obtener lugar de desarrollos', error); });
      } else if (this.filtro.provincia) {
        this._serviceLugarDesarrollo.getLugarDesarrollosByIdProyectoAndProvincia(proyecto.id_proyecto, this.filtro.provincia, this.token)
          .then(response => {
            // console.log(response);
            let depa = '';
            response.lugar_desarrollos.forEach(lugar_desarrollo => {
              depa = depa + ' - ' + lugar_desarrollo.departamento + ', ' + lugar_desarrollo.provincia;
            });
            proyecto.departamento = depa;
          }).catch(error => { console.log('Error al obtener lugar de desarrollos', error); });
      }
      // buscando coordinador
      if (this.filtro.mostrarCoordinador) {
        proyecto.coordinador = `${proyecto.investigadore.persona.grado_academico} ${proyecto.investigadore.persona.nombres} ${proyecto.investigadore.persona.paterno} ${proyecto.investigadore.persona.materno}`;
      }
      // buscando investigadores
      if (this.filtro.mostrarInvestigador) {
        console.log(proyecto);
        proyecto.investigadores = '';
        this._serviceInvProyectos.getInv_proyectosByIdProyecto(proyecto.id_proyecto, this.token)
          .then(response => {
            // console.log(response.inv_proyectos);
            var contador = 0;
            response.inv_proyectos.forEach(inv_proyecto => {
              contador++;
              if (response.inv_proyectos.length === contador) {
                proyecto.investigadores = proyecto.investigadores + `${inv_proyecto.investigadore.persona.grado_academico} ${inv_proyecto.investigadore.persona.nombres} ${inv_proyecto.investigadore.persona.paterno} ${inv_proyecto.investigadore.persona.materno}`;
              } else {
                proyecto.investigadores = proyecto.investigadores + `${inv_proyecto.investigadore.persona.grado_academico} ${inv_proyecto.investigadore.persona.nombres} ${inv_proyecto.investigadore.persona.paterno} ${inv_proyecto.investigadore.persona.materno}, `;
              }
            });
          }).catch(error => { console.log('Error al obtener inv proyectos', error); });
      }
      // buscando basica tecnicas
      if (this.filtro.mostrarBasicaTecnica) {
        proyecto.basica_tecnicas = '';
        console.log('Basica tecnicas');
        this.filtro.mostrarBasicaTecnica.forEach(basica => {
          switch (basica.item_id) {
            case 2:
              proyecto.nombre_instituto = proyecto.n_instituto;
              break;
            case 3:
              proyecto.tipo_investigacion = proyecto.tipo;
              break;
            case 4:
              proyecto.area_investigacion = proyecto.area;
              break;
            case 5:
              proyecto.tipo_proyecto = proyecto.tipo_p;
              break;
            case 6:
              proyecto.carga_horaria = proyecto.carga_h;
              break;
            case 7:
              // unidades
              proyecto.unidades = '';
              this._serviceUnidades.getUnidadesByIdProyecto(proyecto.id_proyecto, this.token)
              .then(responseP => {
                var contador = 0;
                proyecto.unidades = '';
                responseP.unidades.forEach(unidad => {
                  contador++;
                  if (responseP.unidades.length === contador) {
                    proyecto.unidades = proyecto.unidades + `${unidad.nombre}`;
                  } else {
                    proyecto.unidades = proyecto.unidades + `${unidad.nombre}, `;
                  }
                });
              }).catch(error => { console.log('Error al obtener unidades por id_proyecto', error); });
              break;
            case 8:
              if (proyecto.financiamiento && proyecto.moneda) {
                proyecto.financiamiento = `${proyecto.financiamiento} ${proyecto.moneda}`;
              }
              break;
            case 9:
              proyecto.financiamientos = '';
              this._serviceFinanciamientos.getFinanciamientosByIdProyecto(proyecto.id_proyecto, this.token)
              .then(responseF => {
                var contador = 0;
                responseF.financiamientos.forEach(financiamiento => {
                  contador++;
                  if (responseF.financiamientos.length === contador) {
                    proyecto.financiamientos = proyecto.financiamientos + `${financiamiento.fuente}`;
                  } else {
                    proyecto.financiamientos = proyecto.financiamientos + `${financiamiento.fuente}, `;
                  }
                });
              }).catch(error => { console.log('Error al obtener financiamientos por id_proyecto', error); });
              break;
            case 10:
              proyecto.financiamientos_aporte = '';
              this._serviceFinanciamientos.getFinanciamientosByIdProyecto(proyecto.id_proyecto, this.token)
              .then(responseF => {
                var contador = 0;
                responseF.financiamientos.forEach(financiamiento => {
                  contador++;
                  if (responseF.financiamientos.length === contador) {
                    proyecto.financiamientos_aporte = proyecto.financiamientos_aporte + `${financiamiento.fuente}: ${ financiamiento.aporte }${ proyecto.moneda }`;
                  } else {
                    proyecto.financiamientos_aporte = proyecto.financiamientos_aporte + `${financiamiento.fuente}: ${ financiamiento.aporte }${ proyecto.moneda }, `;
                  }
                });
              }).catch(error => { console.log('Error al obtener financiamientos por id_proyecto', error); });
              break;

            default:
              break;
          }
        });
      }
      // buscando lugar_desarrollo
      if (this.filtro.mostrarLugarDesarrollo) {
        proyecto.lugar_desarrollos = '';
        this._serviceLugarDesarrollo.getLugarDesarrollosByIdProyecto(proyecto.id_proyecto, this.token)
          .then(response => {
            // console.log(response);
            response.lugar_desarrollos.forEach(lugar_desarrollo => {
              proyecto.lugar_desarrollos = proyecto.lugar_desarrollos + ' - ' + `${lugar_desarrollo.departamento}, ${lugar_desarrollo.provincia}`;
            });
          }).catch(error => { console.log('Error al obtener lugar de desarrollos', error); });
      }
      //  buscando publicacines
      if (this.filtro.mostrarPublicacion) {
        proyecto.publicaciones = '';
        this._servicePublicaciones.getPublicacionesByIdProyecto(proyecto.id_proyecto, this.token)
          .then(response => {
            // console.log(response);
            response.publicaciones.forEach(publicacion => {
              proyecto.publicaciones = proyecto.publicaciones + ' - ' + publicacion.titulo;
            });
          }).catch(error => { console.log('Error al obtener publicaciones', error); });
      }
      // buscando convenios
      if (this.filtro.mostrarConvenio) {
        proyecto.convenios = '';
        this._serviceConvenios.getConveniosByIdProyecto(proyecto.id_proyecto, this.token)
          .then(response => {
            // console.log(response);
            response.convenios.forEach(convenio => {
              proyecto.convenios = proyecto.convenios + ' - ' + convenio.titulo;
            });
          }).catch(error => { console.log('Error al obtener convenios', error); });
      }
      // buscando contratados
      if (this.filtro.mostrarContratado) {
        proyecto.contratados = '';
        this._serviceContratados.getContratadosByIdProyecto(proyecto.id_proyecto, this.token)
          .then(response => {
            // console.log(response);
            response.contratados.forEach(contratado => {
              proyecto.contratados = proyecto.contratados + ' - ' + contratado.nombrecompleto;
            });
          }).catch(error => { console.log('Error al obtener contratados', error); });
      }
      // difusion
      if (this.filtro.mostrarDifusion) {
        this.filtro.mostrarDifusion.forEach(difusion => {
          switch (difusion.difu_id) {
            case 1:
              proyecto.cursos = '';
              this._serviceCursos.getCursosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  // console.log(response);
                  response.cursos.forEach(curso => {
                    proyecto.cursos = proyecto.cursos + ' - ' + curso.titulo;
                  });
                }).catch(error => { console.log('Error al obtener cursos', error); });
              break;
            case 2:
              proyecto.eventos = '';
              this._serviceEventos.getEventosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  // console.log(response);
                  response.eventos.forEach(evento => {
                    proyecto.eventos = proyecto.eventos + ' - ' + evento.titulo;
                  });
                }).catch(error => { console.log('Error al obtener eventos', error); });
              break;
            case 3:
              proyecto.nota_prensas = '';
              this._serviceNotaPrensas.getNotaPrensasByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  // console.log(response);
                  response.nota_prensas.forEach(nota_prensa => {
                    proyecto.nota_prensas = proyecto.nota_prensas + ' - ' + nota_prensa.titulo;
                  });
                }).catch(error => { console.log('Error al obtener notas de prensas', error); });
              break;
            case 4:
              proyecto.exposiciones = '';
              this._serviceExposiciones.getExposicionesByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  // console.log(response);
                  response.exposiciones.forEach(exposicion => {
                    proyecto.exposiciones = proyecto.exposiciones + ' - ' + exposicion.titulo;
                  });
                }).catch(error => { console.log('Error al obtener exposiciones', error); });
              break;
            default:
              break;
          }
        });
      }
      // Numero 
      if (this.filtro.mostrarNumero) {
        console.log(this.filtro.mostrarNumero);

        this.filtro.mostrarNumero.forEach(numero => {
          switch (numero.num_id) {
            case 1:
              proyecto.nro_publicaciones = 0;
              this._servicePublicaciones.countPublicacionesByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_publicaciones = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 2:
              proyecto.nro_lugares_desarrollo = 0;
              this._serviceLugarDesarrollo.countLugarDesarrollosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_lugares_desarrollo = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 3:
              proyecto.nro_convenios = 0;
              this._serviceConvenios.countConveniosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_convenios = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 4:
              proyecto.nro_contratados = 0;
              this._serviceContratados.countContratadosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_contratados = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 5:
              proyecto.nro_curso = 0;
              this._serviceCursos.countCursosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_curso = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 6:
              proyecto.nro_eventos = 0;
              this._serviceEventos.countEventosByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_eventos = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 7:
              proyecto.nro_unidades = 0;
              // falta
              break;
            case 8:
              proyecto.nro_notas_prensa = 0;
              this._serviceNotaPrensas.countNotaPrensasByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_notas_prensa = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            case 9:
              proyecto.nro_exposiciones = 0;
              this._serviceExposiciones.countExposicionesByIdProyecto(proyecto.id_proyecto, this.token)
                .then(response => {
                  proyecto.nro_exposiciones = response.contador;
                }).catch(error => { console.log('Error al obtener contador publicaciones', error); });
              break;
            default:
              break;
          }
        });
      }


      proys.push(proyecto);
    });
    console.log(proys);
    this.proyectos = proys;
    let dataS = new MatTableDataSource(this.proyectos);
    this.dataSource = dataS;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.filtro.departamento || this.filtro.provincia) {
      this.displayedColumns.push('departamento');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarCoordinador) {
      this.displayedColumns.push('coordinador');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarInvestigador) {
      this.displayedColumns.push('investigadores');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarBasicaTecnica) {
      // this.displayedColumns.push('basica_tecnicas');
      // this.columnsToDisplay = this.displayedColumns.slice();
      this.filtro.mostrarBasicaTecnica.forEach(basica => {
        switch (basica.item_id) {
          case 1:
            this.displayedColumns.push('carrera');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 2:
            this.displayedColumns.push('nombre_instituto');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 3:
            this.displayedColumns.push('tipo_investigacion');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 4:
            this.displayedColumns.push('area_investigacion');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 5:
            this.displayedColumns.push('tipo_proyecto');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 6:
            this.displayedColumns.push('carga_horaria');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 7:
            this.displayedColumns.push('unidades');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 8:
            this.displayedColumns.push('financiamiento');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 9:
            this.displayedColumns.push('financiamientos');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 10:
            this.displayedColumns.push('financiamientos_aporte');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          default:
            break;
        }
      });
    }
    if (this.filtro.mostrarLugarDesarrollo) {
      this.displayedColumns.push('lugar_desarrollos');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarPublicacion) {
      this.displayedColumns.push('publicaciones');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarConvenio) {
      this.displayedColumns.push('convenios');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarContratado) {
      this.displayedColumns.push('contratados');
      this.columnsToDisplay = this.displayedColumns.slice();
    }
    if (this.filtro.mostrarDifusion) {
      this.filtro.mostrarDifusion.forEach(difusion => {
        switch (difusion.difu_id) {
          case 1:
            this.displayedColumns.push('cursos');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 2:
            this.displayedColumns.push('eventos');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 3:
            this.displayedColumns.push('nota_prensas');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 4:
            this.displayedColumns.push('exposiciones');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          default:
            break;
        }
      });
    }
    if (this.filtro.mostrarNumero) {
      this.filtro.mostrarNumero.forEach(numero => {
        switch (numero.num_id) {
          case 1:
            this.displayedColumns.push('nro_publicaciones');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 2:
            this.displayedColumns.push('nro_lugares_desarrollo');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 3:
            this.displayedColumns.push('nro_convenios');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 4:
            this.displayedColumns.push('nro_contratados');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 5:
            this.displayedColumns.push('nro_curso');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 6:
            this.displayedColumns.push('nro_eventos');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 7:
            this.displayedColumns.push('nro_unidades');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 8:
            this.displayedColumns.push('nro_notas_prensa');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          case 9:
            this.displayedColumns.push('nro_exposiciones');
            this.columnsToDisplay = this.displayedColumns.slice();
            break;
          default:
            break;
        }
      });
    }

    this.length = this.dataSource.data.length;
    let ini = Math.ceil(this.length / 3);
    for (let i = ini; i < this.length + ini; i = i + ini) {
      if (i >= this.length) {
        this.pageSizeOptions.push(this.length);
      } else {
        this.pageSizeOptions.push(i);
      }
    }
    console.log(this.proyectos);
  }

  columnaInicial() {
    this.displayedColumns = [
      'titulo',
      'fechaini',
      'fechafin',
      'proceso',
      'estado'
    ];
    this.columnsToDisplay = this.displayedColumns.slice();
  }

  obtenerProvincias() {
    this.filtro.provincia = '';
    this.departamentos.forEach((departamento) => {
      if (departamento.value === this.filtro.departamento) {
        this.provincias = departamento.provincias;
      }
    });
  }

  vaciarFiltro() {
    this.filtro = {
      fechaini: '',
      fechafin: '',
      departamento: '',
      provincia: '',
      estado: '',
      mostrarCoordinador: false,
      mostrarInvestigador: false,
      mostrarBasicaTecnica: null,
      mostrarLugarDesarrollo: false,
      mostrarPublicacion: false,
      mostrarNumeroPublicacion: false,
      mostrarConvenio: false,
      mostrarContratado: false,
      mostrarCurso: false,
      mostrarEvento: false,
      mostrarNotaPrensa: false,
      mostrarExposicion: false,
      procesoini: '',
      procesofin: '',
      tipoFecha: 'ninguna'
    };
  }
  comprobarDepartamento(depart: string) {
    let depa = '';
    switch (depart) {
      case 'CH':
        depa = 'Chuquisaca';
        break;
      case 'LP':
        depa = 'La Paz';
        break;
      case 'CB':
        depa = 'Cochabamba';
        break;
      case 'OR':
        depa = 'Oruro';
        break;
      case 'PT':
        depa = 'Potosí';
        break;
      case 'TJ':
        depa = 'Tarija';
        break;
      case 'SC':
        depa = 'Santa Cruz';
        break;
      case 'CH':
        depa = 'Chuquisaca';
        break;
      case 'BE':
        depa = 'Beni';
        break;
      case 'PD':
        depa = 'Pando';
        break;
      default:
        depa = 'error';
        break;
    }
    return depa;
  }
}
