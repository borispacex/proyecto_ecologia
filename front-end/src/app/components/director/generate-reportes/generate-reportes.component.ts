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
import { MatPaginator } from '@angular/material/paginator';
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
import { BasicaTecnicasService } from 'src/app/services/proyecto/basica-tecnicas.service';
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
  pageSize = 5;
  pageSizeOptions: number[] = [5];

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
      value: 'BE',
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
      value: 'CH',
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
      value: 'CB',
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
      value: 'LP',
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
      value: 'OR',
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
      value: 'PD',
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
      value: 'PT',
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
      value: 'SC',
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
      value: 'TJ',
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
    private _serviceBasicaTecnicas: BasicaTecnicasService,
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
    private _serviceExpositores: ExpositoresService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
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

  addColumn() {
    const randomColumn = Math.floor(
      Math.random() * this.displayedColumns.length
    );
    // console.log(randomColumn);
    // console.log(this.displayedColumns);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    // console.log(this.columnsToDisplay);
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

  obtenerProyectos() {}

  filtroInicial() {
    this._serviceProyectos
      .getProyectos(this.token)
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
          'fechafin',
          'fechaini',
          'proceso',
          'estado',
        ];
        this.columnsToDisplay = this.displayedColumns.slice();

        this.dataSource = new MatTableDataSource(this.proyectos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.length = this.dataSource.data.length;
        let ini = Math.ceil(this.length / 3);
        for (let i = ini; i < this.length + ini; i = i + ini) {
          if (i >= this.length) {
            this.pageSizeOptions.push(this.length);
          } else {
            this.pageSizeOptions.push(i);
          }
        }
        // console.log(this.proyectos);
      })
      .catch((error) => {
        console.log('Error al obtener proyectos', error);
      });
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
    let sw = false;
    if (this.filtro.estado && this.filtro.fechaini && this.filtro.fechafin) {
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenDatesAndStatus(fechaini, fechafin, this.filtro.estado, this.token)
      .then(response => {
        console.log(response);
        this.proyectos = response.proyectos;
        sw = true;
      }).catch(error => { console.log('Error al obtener proyectos entre fechas y estado', error); });
    } else if (this.filtro.fechaini && this.filtro.fechafin){
      let fechaini = this.formatDate(this.filtro.fechaini) + 'T00:00:00.000';
      let fechafin = this.formatDate(this.filtro.fechafin) + 'T00:00:00.000';
      this._serviceProyectos.getProyectosBetweenDates(fechaini, fechafin, this.token)
      .then(response => {
        console.log(response);
        this.proyectos = response.proyectos;
        sw = true;
      }).catch(error => { console.log('Error al obtener proyectos entre fechas', error); });
    } else if (this.filtro.estado) {
      this._serviceProyectos.getProyectosByEstado(this.filtro.estado, this.token)
      .then(response => {
        console.log(response);
        this.proyectos = response.proyectos;
        sw = true;
      }).catch(error => { console.log('Error al obtener proyectos por estado', error); });
    } else {
      sw = true;
    }

    if (sw) { console.log(this.proyectos); }
    
    // this.columnsToDisplay = this.displayedColumns.slice();

    // this.dataSource = new MatTableDataSource(this.proyectos);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }

  obtenerProvincias() {
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
      mostrarBasicaTecnica: false,
      mostrarLugarDesarrollo: false,
      mostrarPublicacion: false,
      mostrarNumeroPublicacion: false,
      mostrarConvenio: false,
      mostrarContratado: false,
      mostrarCurso: false,
      mostrarEvento: false,
      mostrarNotaPrensa: false,
      mostrarExposicion: false,
      procesoini: -1,
      procesofin: -1
    };
  }
}
