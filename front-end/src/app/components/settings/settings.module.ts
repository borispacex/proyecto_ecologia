import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetProfileComponent } from './set-profile/set-profile.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    SetProfileComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  exports: [
    SetProfileComponent
  ]
})
export class SettingsModule { }
