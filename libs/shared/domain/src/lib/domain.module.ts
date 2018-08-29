import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDataContext } from './authentication/authentication.data.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[AuthenticationDataContext] 
})
export class DomainModule {}
