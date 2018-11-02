import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private route: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.dir('me-interceptor');
    console.log('me-interceptor');
    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.route.navigateByUrl('/login');
            }
          }
        }
      )
    );
  }
}

// @NgModule({
//     imports: [
//       BrowserModule,
//       BrowserAnimationsModule,
//       HttpClientModule,
//       AppRoutingModule,
//       ReactiveFormsModule,
//       FormsModule,
//       AppMaterialModule
//     ],
//     declarations: [
//       AppComponent,
//       SearchComponent,
//       LoginComponent
//     ],
//     providers: [
//       SpotifyService,
//       {
//         provide: HTTP_INTERCEPTORS,
//         useClass: TokenInterceptor,
//         multi: true
//       },
//       {
//         provide: HTTP_INTERCEPTORS,
//         useClass: AuthInterceptor,
//         multi: true
//       }
//     ],
//     bootstrap: [AppComponent]
//   })
//   export class AppModule { }
