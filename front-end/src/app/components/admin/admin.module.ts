import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { DetailsProyectoComponent } from './details-proyecto/details-proyecto.component';
import { ListFotografiaComponent } from './list-fotografia/list-fotografia.component';
import { ListProyectoComponent } from './list-proyecto/list-proyecto.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { LayoutModule } from '../layout/layout.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ngfModule } from 'angular-file';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SettingsModule } from '../settings/settings.module';
import { HttpClientModule } from '@angular/common/http';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    IndexComponent,
    DetailsProyectoComponent,
    ListFotografiaComponent,
    ListProyectoComponent,
    ListUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PipesModule,
    LayoutModule,
    SettingsModule,

    NgbModule,
    FormsModule,
    ngfModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,

    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule { }
