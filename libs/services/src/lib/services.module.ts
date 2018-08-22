import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TimingInterceptor } from './core'
import { LoggerService } from './util/logger.service';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ApplicationContext } from './application-context.service';
import { AuthService, AuthGuard } from './security/index';
// import { NotificationService } from './core/notification.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,    
    StorageServiceModule],
  providers: [
    LoggerService,    
    AuthService,
    AuthGuard,
    ApplicationContext,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ]
})
export class ServicesModule { }
