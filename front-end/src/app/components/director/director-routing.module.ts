import { Routes, RouterModule } from '@angular/router';

import { DirectorComponent } from './director/director.component';
import { DataComponent } from './data/data.component';
import { DirectorGuard } from 'src/app/services/guards/director.guard';
import { SetProfileComponent } from '../settings/set-profile/set-profile.component';
import { CuentaHelpComponent } from '../help/cuenta-help/cuenta-help.component';
import { DirectorHelpComponent } from '../help/director-help/director-help.component';
import { AdminHelpComponent } from '../help/admin-help/admin-help.component';
import { InvestigadorHelpComponent } from '../help/investigador-help/investigador-help.component';


const routes: Routes = [
  {
      path: '', component: DirectorComponent,
      canActivate: [
        DirectorGuard
      ],
      children: [
          { path: '', redirectTo: 'dashboard' },
          {
              path: 'dashboard',
              children: [
                  { path: '', redirectTo: 'data', pathMatch: 'full' },
                  { path: 'data', component: DataComponent, data: { title: ':: datos de director ::' } }
              ]
          },
          {
            path: 'settings',
              children: [
                  { path: '', redirectTo: 'account', pathMatch: 'full' },
                  { path: 'account', component: SetProfileComponent, data: { title: 'Configuracion Cuenta' } },
              ]
          },
          {
            path: 'help',
              children: [
                  { path: '', redirectTo: 'cuenta', pathMatch: 'full' },
                  { path: 'cuenta/:tipo', component: CuentaHelpComponent, data: { title: 'Ayuda Cuenta' } },
                  { path: 'admin/:tipo', component: AdminHelpComponent, data: { title: 'Ayuda Cuenta' } },
                  { path: 'director/:tipo', component: DirectorHelpComponent, data: { title: 'Ayuda Cuenta' } },
                  { path: 'investigador/:tipo', component: InvestigadorHelpComponent, data: { title: 'Ayuda Cuenta' } }
              ]
          }
      ]
  },

];

export const DirectorRoutingModule = RouterModule.forChild(routes);
