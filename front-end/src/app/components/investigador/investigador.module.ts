import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestigadorRoutingModule } from './investigador-routing.module';
import { InvestigadorComponent } from './investigador/investigador.component';
import { EditProyectoComponent } from './edit-proyecto/edit-proyecto.component';
import { ListProyectoInvComponent } from './list-proyecto-inv/list-proyecto-inv.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProyectoComponent } from './view-proyecto/view-proyecto.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SettingsModule } from '../settings/settings.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ngfModule } from 'angular-file';
import { LayoutModule } from '../layout/layout.module';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    InvestigadorComponent,
    EditProyectoComponent,
    ListProyectoInvComponent,
    ProfileComponent,
    ViewProyectoComponent
  ],
  imports: [
    CommonModule,
    InvestigadorRoutingModule,
    PipesModule,
    LayoutModule,
    SettingsModule,

    NgbModule,
    FormsModule,
    ngfModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ]
})
export class InvestigadorModule { }
