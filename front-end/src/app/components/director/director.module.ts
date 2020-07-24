import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorComponent } from './director/director.component';
import { DataComponent } from './data/data.component';
import { LayoutModule } from '../layout/layout.module';
import { SettingsModule } from '../settings/settings.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterModule } from '@angular/router';
import * as echarts from 'echarts';
import { ListProyectosComponent } from './list-proyectos/list-proyectos.component';
import { ListInvestigadoresComponent } from './list-investigadores/list-investigadores.component';
import { ShowProyectoComponent } from './show-proyecto/show-proyecto.component';
import { GenerateReportesComponent } from './generate-reportes/generate-reportes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { MatTableExporterModule } from 'mat-table-exporter';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DirectorComponent,
    DataComponent,
    ListProyectosComponent,
    ListInvestigadoresComponent,
    ShowProyectoComponent,
    GenerateReportesComponent
  ],
  imports: [
    CommonModule,
    DirectorRoutingModule,
    NgbModule,
    PipesModule,

    LayoutModule,
    SettingsModule,
    RouterModule,
    NgxEchartsModule.forRoot({ echarts }),
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),

    // Material Modules
    MatTableExporterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ]
})
export class DirectorModule { }
