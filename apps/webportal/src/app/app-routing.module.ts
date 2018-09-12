import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent        ,
        LogoutComponent       ,
        RouteErrorComponent   ,
        RouteNotFoundComponent } from '@hubx/system';

import { AuthGuard } from '@hubx/services';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'buyer', loadChildren: './areas/buyer-portal/buyer.module#BuyerModule', canActivate: [AuthGuard] },
  { path: 'vendor', loadChildren: './areas/vendor-portal/vendor.module#VendorModule', canActivate: [AuthGuard] },
  { path: '?error', component: RouteErrorComponent },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
