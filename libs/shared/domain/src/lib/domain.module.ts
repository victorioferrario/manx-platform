import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDataContext } from './auth/auth.data.service';
@NgModule({
  imports: [
    CommonModule
  ],   
  providers:[
    AuthDataContext,  ],
  declarations:[] 
})
export class DomainModule {}
