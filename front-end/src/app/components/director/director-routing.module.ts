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
import { InvProfileComponent } from '../profiles/inv-profile/inv-profile.component';
import { InvProfilePostComponent } from '../profiles/inv-profile-post/inv-profile-post.component';


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
                  { path: 'data', component: DataComponent, data: { title: 'Menu director :: Instituto de Ecología' } },
                  { path: 'list-investigadores/:tipo', component: ListInvestigadoresComponent, data: { title: 'Lista investigadores :: Instituto de Ecología' } },
                  { path: 'list-proyectos/:tipo', component: ListProyectosComponent, data: { title: 'Lista proyectos :: Instituto de Ecología' } },
                  { path: 'show-proyecto/:id_proyecto', component: ShowProyectoComponent, data: { title: 'Detalles proyecto :: Instituto de Ecología' } },
                  { path: 'generate-reportes', component: GenerateReportesComponent, data: { title: 'Generar reportes :: Instituto de Ecología' } },

              ]
          },
          {
            path: 'settings',
              children: [
                  { path: '', redirectTo: 'account', pathMatch: 'full' },
                  { path: 'account', component: SetProfileComponent, data: { title: 'Configuración cuenta :: Instituto de Ecología' } },
              ]
          },
          {
            path: 'help',
              children: [
                  { path: '', redirectTo: 'cuenta', pathMatch: 'full' },
                  { path: 'cuenta/:tipo', component: CuentaHelpComponent, data: { title: 'Ayuda cuenta :: Instituto de Ecología' } },
                  { path: 'admin/:tipo', component: AdminHelpComponent, data: { title: 'Ayuda administrador :: Instituto de Ecología' } },
                  { path: 'director/:tipo', component: DirectorHelpComponent, data: { title: 'Ayuda director :: Instituto de Ecología' } },
                  { path: 'investigador/:tipo', component: InvestigadorHelpComponent, data: { title: 'Ayuda investigador :: Instituto de Ecología' } }
              ]
          },
          {
            path: 'profiles',
              children: [
                  { path: '', redirectTo: 'cuenta', pathMatch: 'full' },
                  { path: 'inv-profile/:id_persona', component: InvProfileComponent, data: { title: 'Investigador :: Instituto de Ecología' } },
                  { path: 'inv-profile-post/:id_persona/:id_publicacion', component: InvProfilePostComponent, data: { title: 'Publicación :: Instituto de Ecología' } }
              ]
          },
          { path: '**', redirectTo: 'dashboard' }

      ]
  },

];

export const DirectorRoutingModule = RouterModule.forChild(routes);
