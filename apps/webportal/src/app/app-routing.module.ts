import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './app-routing-strategy';
import {
  LoginComponent,
  LogoutComponent,
  RouteErrorComponent,
  RouteNotFoundComponent
} from '@manx/system';

import { AuthGuard } from '@manx/services';

const routes: Routes = [
  { path: '', component: LoginComponent , data: { reuse: false }},
  { path: 'login', component: LoginComponent, data: { reuse: false } },
  { path: 'logout', component: LogoutComponent, data: { reuse: false } },
  {
    path: 'buyer',
    loadChildren: './areas/buyer-portal/buyer.module#BuyerModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'vendor',
    loadChildren: './areas/vendor-portal/vendor.module#VendorModule',
    canActivate: [AuthGuard]
  },
  { path: '?error', component: RouteErrorComponent },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
