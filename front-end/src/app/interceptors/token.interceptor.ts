
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      });
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log('ERROR', err);
        if (err.status === 401) {
          this.router.navigate(['/authentication/page-401']);
        }
        if (err.status === 403) {
          this.router.navigate(['/authentication/page-403']);
        }
        if (err.status === 404) {
          this.router.navigate(['/authentication/page-404']);
        }
        if (err.status === 500) {
          this.router.navigate(['/authentication/page-500']);
        }
        if (err.status === 503) {
          this.router.navigate(['/authentication/page-503']);
        }
        return;
      }
    }));
  }
}
