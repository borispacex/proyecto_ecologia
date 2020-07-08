import { Routes, RouterModule } from '@angular/router';

import { DirectorComponent } from './director/director.component';
import { DataComponent } from './data/data.component';
import { DirectorGuard } from 'src/app/services/guards/director.guard';
import { SetProfileComponent } from '../settings/set-profile/set-profile.component';
import { CuentaHelpComponent } from '../help/cuenta-help/cuenta-help.component';
import { DirectorHelpComponent } from '../help/director-help/director-help.component';
import { AdminHelpComponent } from '../help/admin-help/admin-help.component';
import { InvestigadorHelpComponent } from '../help/investigador-help/investigador-help.component';
import { ListInvestigadoresComponent } from './list-investigadores/list-investigadores.component';
import { ListProyectosComponent } from './list-proyectos/list-proyectos.component';
import { ShowProyectoComponent } from './show-proyecto/show-proyecto.component';
import { GenerateReportesComponent } from './generate-reportes/generate-reportes.component';


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
                  { path: 'data', component: DataComponent, data: { title: 'datos de director' } },
                  { path: 'list-investigadores/:tipo', component: ListInvestigadoresComponent, data: { title: 'Lista de investigadores' } },
                  { path: 'list-proyectos/:tipo', component: ListProyectosComponent, data: { title: 'Lista de proyectos' } },
                  { path: 'show-proyecto/:id_proyecto', component: ShowProyectoComponent, data: { title: 'Detalles de proyecto' } },
                  { path: 'generate-reportes', component: GenerateReportesComponent, data: { title: 'Generar reportes' } },

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
                  { path: 'admin/:tipo', component: AdminHelpComponent, data: { title: 'Ayuda administrador' } },
                  { path: 'director/:tipo', component: DirectorHelpComponent, data: { title: 'Ayuda director' } },
                  { path: 'investigador/:tipo', component: InvestigadorHelpComponent, data: { title: 'Ayuda investigador' } }
              ]
          }
      ]
  },

];

export const DirectorRoutingModule = RouterModule.forChild(routes);
