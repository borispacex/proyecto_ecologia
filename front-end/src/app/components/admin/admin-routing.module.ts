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
import { InvProfileComponent } from '../profiles/inv-profile/inv-profile.component';
import { InvProfilePostComponent } from '../profiles/inv-profile-post/inv-profile-post.component';

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
                  { path: 'index', component: IndexComponent, data: { title: 'Menu administrador :: Instituto de Ecología' } },
                  { path: 'list-fotografias', component: ListFotografiaComponent, data: { title: 'Lista fotografias :: Instituto de Ecología' } },
                  { path: 'list-usuarios/:tipo', component: ListUsuarioComponent, data: { title: 'Lista usuarios :: Instituto de Ecología' } },
                  { path: 'list-proyectos/:tipo', component: ListProyectoComponent, data: { title: 'Lista proyectos :: Instituto de Ecología' } },
                  { path: 'detail-proyecto/:id', component: DetailsProyectoComponent, data: { title: 'Detalles proyecto :: Instituto de Ecología' } }
              ],
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
          { path: '**', redirectTo: 'dashboard' },
      ]
  },

];

export const AdminRoutingModule = RouterModule.forChild(routes);
