import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDataContext } from './authentication/authentication.data.service'
@NgModule({
  imports: [
    CommonModule
  ],
  providers:[AuthenticationDataContext],
  declarations:[] 
})
export class DomainModule {}
