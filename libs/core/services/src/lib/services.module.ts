import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StorageServiceModule } from 'angular-webstorage-service';

import { ApplicationContext } from './application-context.service';
import { ErrorInterceptor, TimingInterceptor } from './core';
import { LocalStorageService } from './core/services/local-storage.service';
import { AuthGuard, AuthService } from './security';

@NgModule({
  imports: [CommonModule, HttpClientModule, StorageServiceModule],
  providers: [
    AuthGuard,
    AuthService,
    LocalStorageService,
    ApplicationContext,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class ServicesModule {}
