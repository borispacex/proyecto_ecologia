import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHelpComponent } from './admin-help/admin-help.component';
import { DirectorHelpComponent } from './director-help/director-help.component';
import { InvestigadorHelpComponent } from './investigador-help/investigador-help.component';
import { CuentaHelpComponent } from './cuenta-help/cuenta-help.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminHelpComponent,
    DirectorHelpComponent,
    InvestigadorHelpComponent,
    CuentaHelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    NgbModule
  ],
  exports: [
    AdminHelpComponent,
    DirectorHelpComponent,
    InvestigadorHelpComponent,
    CuentaHelpComponent
  ]
})
export class HelpModule { }
