import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from './core/layout.service';
@NgModule({
  imports: [CommonModule],
  providers: [LayoutService]
})
export class ServicesModule {}
