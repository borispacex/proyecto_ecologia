import { Routes, RouterModule } from '@angular/router';

import { InvestigadorComponent } from './investigador/investigador.component';
import { ProfileComponent } from './profile/profile.component';
import { ListProyectoInvComponent } from './list-proyecto-inv/list-proyecto-inv.component';
import { EditProyectoComponent } from './edit-proyecto/edit-proyecto.component';
import { ViewProyectoComponent } from './view-proyecto/view-proyecto.component';
import { InvestigadorGuard } from 'src/app/services/guards/investigador.guard';
import { SetProfileComponent } from '../settings/set-profile/set-profile.component';
import { CuentaHelpComponent } from '../help/cuenta-help/cuenta-help.component';
import { AdminHelpComponent } from '../help/admin-help/admin-help.component';
import { DirectorHelpComponent } from '../help/director-help/director-help.component';
import { InvestigadorHelpComponent } from '../help/investigador-help/investigador-help.component';


const routes: Routes = [
  {
      path: '', component: InvestigadorComponent,
      canActivate: [
        InvestigadorGuard
      ],
      children: [
          { path: '', redirectTo: 'dashboard' },
          {
              path: 'dashboard',
              children: [
                { path: '', redirectTo: 'profile', pathMatch: 'full' },
                { path: 'profile', component: ProfileComponent, data: { title: 'Perfil' } },
                { path: 'list-proyectos-inv/:tipo', component: ListProyectoInvComponent, data: { title: 'Lista proyectos de Investigador' } },
                { path: 'edit-proyecto/:id', component: EditProyectoComponent, data: { title: 'Editar el Proyecto' } },
                { path: 'view-proyecto/:id', component: ViewProyectoComponent, data: { title: 'Visualizar el Proyecto' } }

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

export const InvestigadorRoutingModule = RouterModule.forChild(routes);
