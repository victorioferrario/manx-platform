import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { AuthenticationService} from "./auth/auth.service";
import { AuthenticationTokenInterceptor} from "./auth/auth.token-interceptor.service";
@NgModule({
  imports: [CommonModule],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationTokenInterceptor      
    },
    AuthenticationService]
})
export class InfrastructureModule {}
