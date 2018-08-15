import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxModule } from '@nrwl/nx';
@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot()   
  ],
  providers: []
})
export class FiberModule {}
