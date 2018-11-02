import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthDataContext } from '../auth/auth.data.service';
import { HttpRequestItem } from './config';
import { HttpRequestTracker } from './HttpRequestTracker';

export const XPath = 1;
@Injectable()
export class HttpAuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthDataContext) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const self = this;
    if (self.authService.isAuthenticated()) {
     // self.requestTracker.list.add(new HttpRequestItem(request.url));
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + self.authService.getAccessToken(),
          'Access-Control-Allow-Origin': '*',
          'X-Generation': XPath.toString()
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.warn('HttpResponse');
            ///  self.requestTracker.list.get('route', request.url);
            // do stuff with response if you want
          }
          if (event instanceof HttpRequest) {
            console.info('HttpRequest');
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log(request);
            }
          }
        }
      )
    );
  }
}
