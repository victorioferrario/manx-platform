import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LayoutService } from './core/layout.service';
@NgModule({
  imports: [
    CommonModule,
    StorageServiceModule],
  providers: [LayoutService]
})
export class ServicesModule {}
