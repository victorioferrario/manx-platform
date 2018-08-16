import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LayoutService } from './core/layout.service';
import { ApplicationContext } from './application-context.service';
@NgModule({
  imports: [
    CommonModule,
    StorageServiceModule],
  providers: [LayoutService, ApplicationContext]
})
export class ServicesModule {}
