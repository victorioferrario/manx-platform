import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { HostListenerDirective } from './components/dashboard/directives/click.directive';
import { AlertComponent } from './components/dashboard/alert.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [
    AlertComponent,
    CartComponent,
    DashboardComponent,
    MyaccountComponent,
    OrdersComponent,
    OrderDetailComponent,
    MyprofileComponent,
    HostListenerDirective
  ],
  exports: [
    AlertComponent,
    CartComponent,
    DashboardComponent,
    MyaccountComponent,
    OrdersComponent,
    OrderDetailComponent,
    MyprofileComponent,
    HostListenerDirective
  ]
})
export class AreasBuyerPortalModule {}
