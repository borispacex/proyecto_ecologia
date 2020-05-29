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
                  { path: 'stories', component: StoriesComponent, data: { title: ':: Stories Home ::' } }
              ]
          }
      ]
  },

];

export const HomeRoutingModule = RouterModule.forChild(routes);
