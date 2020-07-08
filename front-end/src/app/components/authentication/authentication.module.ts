import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PageForbiddonErrorComponent } from './page-forbiddon-error/page-forbiddon-error.component';
import { PageIsErrorComponent } from './page-is-error/page-is-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageTokenExpiredComponent } from './page-token-expired/page-token-expired.component';
import { PageTryLaterComponent } from './page-try-later/page-try-later.component';
import { UpdatePasswordByEmailComponent } from './update-password-by-email/update-password-by-email.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    LoginComponent,
    PageForbiddonErrorComponent,
    PageIsErrorComponent,
    PageNotFoundComponent,
    PageTokenExpiredComponent,
    PageTryLaterComponent,
    UpdatePasswordByEmailComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,

    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
  ]
})
export class AuthenticationModule { }
