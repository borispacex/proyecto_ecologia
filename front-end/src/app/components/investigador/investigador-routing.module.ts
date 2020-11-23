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
import { ProfilePostComponent } from './profile-post/profile-post.component';
import { MenuComponent } from './menu/menu.component';
import { InvProfileComponent } from '../profiles/inv-profile/inv-profile.component';
import { InvProfilePostComponent } from '../profiles/inv-profile-post/inv-profile-post.component';


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
                { path: '', redirectTo: 'menu', pathMatch: 'full' },
                { path: 'menu', component: MenuComponent, data: { title: 'Menu principal' } },
                { path: 'profile', component: ProfileComponent, data: { title: 'Perfil' } },
                { path: 'profile-post/:id_publicacion', component: ProfilePostComponent, data: { title: 'Detalles publicacion' } },
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
                  { path: 'admin/:tipo', component: AdminHelpComponent, data: { title: 'Ayuda Administrador' } },
                  { path: 'director/:tipo', component: DirectorHelpComponent, data: { title: 'Ayuda Director' } },
                  { path: 'investigador/:tipo', component: InvestigadorHelpComponent, data: { title: 'Ayuda Investigador' } }
              ]
          },
          {
            path: 'profiles',
              children: [
                  { path: '', redirectTo: 'cuenta', pathMatch: 'full' },
                  { path: 'inv-profile/:id_persona', component: InvProfileComponent, data: { title: 'Investigador' } },
                  { path: 'inv-profile-post/:id_persona/:id_publicacion', component: InvProfilePostComponent, data: { title: 'Publicación' } }
              ]
          },
          { path: '**', redirectTo: 'dashboard' }
      ]
  },

];

export const InvestigadorRoutingModule = RouterModule.forChild(routes);
