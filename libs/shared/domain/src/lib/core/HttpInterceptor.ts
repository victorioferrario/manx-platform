export const XPath =  1;
import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { AuthDataContext } from "../auth/auth.data.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
@Injectable()
export class HttpAuthTokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthDataContext) {}
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