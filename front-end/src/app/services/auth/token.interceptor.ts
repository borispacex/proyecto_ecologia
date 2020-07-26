import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this._auth.getToken();
    // const accessToken = this.localStorageService.getItem('token');
    console.log('usando');
    return next.handle(this.addAuthorizationHeader(req, accessToken)).pipe(
      catchError(err => {
        // in case of 401 http error
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // otherwise logout and redirect to login page
          return this.logoutAndRedirect(err);
        }

        // in case of 403 http error (refresh token failed)
        if (err instanceof HttpErrorResponse && err.status === 403) {
          // logout and redirect to login page
          return this.logoutAndRedirect(err);
        }
        // if error has status neither 401 nor 403 then just return this error
        return throwError(err);
      })
    );
  }

  private addAuthorizationHeader(request: HttpRequest<any>, token: string): HttpRequest<any> {
    if (token) {
      return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return request;
  }

  private logoutAndRedirect(err): Observable<HttpEvent<any>> {
    this._auth.logOut();
    // this.router.navigateByUrl('/login');
    this.router.navigate(['/authentication/login']);

    return throwError(err);
  }
}
