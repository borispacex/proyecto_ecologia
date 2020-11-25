import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
          { path: '', redirectTo: 'dashboard' },
          {
              path: 'dashboard',
              children: [
                  { path: '', redirectTo: 'stories', pathMatch: 'full' },
                  { path: 'stories', component: StoriesComponent, data: { title: 'Todas publicaciones :: Instituto de Ecología' } }
              ]
          },
          { path: '**', redirectTo: 'dashboard' } // final

      ]
  },

];

export const HomeRoutingModule = RouterModule.forChild(routes);
