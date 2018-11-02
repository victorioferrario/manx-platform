import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthDataContext } from './auth/auth.data.service';
import { HttpRequestTracker } from './core';

@NgModule({
  imports: [CommonModule],
  providers: [AuthDataContext, HttpRequestTracker],
  declarations: []
})
export class DomainModule {}
