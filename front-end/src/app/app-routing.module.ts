import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'home', loadChildren: () =>
    import('./components/home/home.module').then(m => m.HomeModule)
  },
  { path: 'admin', loadChildren: () =>
    import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  { path: 'director', loadChildren: () =>
    import('./components/director/director.module').then(m => m.DirectorModule) 
  },
  { path: 'investigador', loadChildren: () =>
    import('./components/investigador/investigador.module').then(m => m.InvestigadorModule) 
  },
  { path: 'authentication', loadChildren: () =>
    import('./components/authentication/authentication.module').then(m => m.AuthenticationModule) 
  },
  { path: 'settings', loadChildren: () =>
    import('./components/settings/settings.module').then(m => m.SettingsModule)
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
