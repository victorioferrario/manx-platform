import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './areas/system/login/login.component';
import { LogoutComponent} from './areas/system/logout/logout.component';
import { NoRouteComponent} from './areas/system/no-route/noroute.component';

const routes: Routes = [  
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'buyer', loadChildren: './areas/buyer-portal/buyer.module#BuyerModule'},
  { path: 'vendor', loadChildren: './areas/vendor-portal/vendor.module#VendorModule'},
  { path: '**', component: NoRouteComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//apps\webportal\src\app\areas\buyer\buyer.module.ts