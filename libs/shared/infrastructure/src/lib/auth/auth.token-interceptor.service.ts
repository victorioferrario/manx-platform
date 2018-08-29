import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "./auth.service";
export const XPath =  1;
@Injectable()
export class AuthenticationTokenInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private authService: AuthenticationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const self = this;
        if (self.authService.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + self.authService.getAccessToken(),
                    "Access-Control-Allow-Origin": "*",
                    "X-Generation": XPath.toString()
                }
            });
        }
        return next.handle(request);
    }
}

// { AuthenticationTokenInterceptor } from 
