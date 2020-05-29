import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorComponent } from './director/director.component';
import { DataComponent } from './data/data.component';
import { LayoutModule } from '../layout/layout.module';
import { SettingsModule } from '../settings/settings.module';


@NgModule({
  declarations: [
    DirectorComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    DirectorRoutingModule,

    LayoutModule,
    SettingsModule
  ]
})
export class DirectorModule { }
