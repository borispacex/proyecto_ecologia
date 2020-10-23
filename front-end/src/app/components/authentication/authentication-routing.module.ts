import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordByEmailComponent } from './update-password-by-email/update-password-by-email.component';
import { PageTokenExpiredComponent } from './page-token-expired/page-token-expired.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageForbiddonErrorComponent } from './page-forbiddon-error/page-forbiddon-error.component';
import { PageIsErrorComponent } from './page-is-error/page-is-error.component';
import { PageTryLaterComponent } from './page-try-later/page-try-later.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
      path: '', component: AuthenticationComponent,
      children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent, data: { title: 'Iniciar Sesion' } },
          { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Olvido su contraseña' } },
          { path: 'update-password/:token', component: UpdatePasswordByEmailComponent, data: { title: 'Actualizar Contraseña' } },
          { path: 'page-401', component: PageTokenExpiredComponent, data: { title: 'Pagina 401' } },
          { path: 'page-403', component: PageForbiddonErrorComponent, data: { title: 'Pagina 403' } }, // error prohibido
          { path: 'page-404', component: PageNotFoundComponent, data: { title: 'Pagina 404' } },       // no encontrado
          { path: 'page-500', component: PageIsErrorComponent, data: { title: 'Pagina 500' } },        // error
          { path: 'page-503', component: PageTryLaterComponent, data: { title: 'Pagina 503' } },        // intentar mas tarde
          { path: '**', redirectTo: 'login' },
      ]
  }
];

export const AuthenticationRoutingModule = RouterModule.forChild(routes);
