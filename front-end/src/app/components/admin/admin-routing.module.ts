import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { ListFotografiaComponent } from './list-fotografia/list-fotografia.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { ListProyectoComponent } from './list-proyecto/list-proyecto.component';
import { DetailsProyectoComponent } from './details-proyecto/details-proyecto.component';
import { AdminGuard } from 'src/app/services/guards/admin.guard';
import { SetProfileComponent } from '../settings/set-profile/set-profile.component';
import { CuentaHelpComponent } from '../help/cuenta-help/cuenta-help.component';
import { DirectorHelpComponent } from '../help/director-help/director-help.component';
import { InvestigadorHelpComponent } from '../help/investigador-help/investigador-help.component';
import { AdminHelpComponent } from '../help/admin-help/admin-help.component';

const routes: Routes = [
  {
      path: '', component: AdminComponent,
      canActivate: [
        AdminGuard
      ],
      children: [
          { path: '', redirectTo: 'dashboard' },
          {
              path: 'dashboard',
              children: [
                  { path: '', redirectTo: 'index', pathMatch: 'full' },
                  { path: 'index', component: IndexComponent, data: { title: 'Index admin' } },
                  { path: 'list-fotografias', component: ListFotografiaComponent, data: { title: 'Fotografias' } },
                  { path: 'list-usuarios/:tipo', component: ListUsuarioComponent, data: { title: 'Usuarios' } },
                  { path: 'list-proyectos/:tipo', component: ListProyectoComponent, data: { title: 'Proyectos' } },
                  { path: 'detail-proyecto/:id', component: DetailsProyectoComponent, data: { title: 'Detalles del Proyecto' } }
              ],
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
          },
          { path: '**', redirectTo: 'dashboard' },
      ]
  },

];

export const AdminRoutingModule = RouterModule.forChild(routes);
