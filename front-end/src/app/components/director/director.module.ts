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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DirectorComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    DirectorRoutingModule,

    LayoutModule,
    SettingsModule,
    RouterModule,
    NgxEchartsModule.forRoot({ echarts }),
    FormsModule
  ]
})
export class DirectorModule { }
