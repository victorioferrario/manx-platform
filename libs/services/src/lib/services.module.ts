import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ApplicationContext } from './application-context.service';
@NgModule({
  imports: [
    CommonModule,
    StorageServiceModule],
  providers: [ApplicationContext]
})
export class ServicesModule {}
