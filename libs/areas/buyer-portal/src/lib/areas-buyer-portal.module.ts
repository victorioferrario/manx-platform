import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [
    CartComponent,
    DashboardComponent,
    MyaccountComponent,
    OrdersComponent,
    OrderDetailComponent,
    MyprofileComponent
  ],
  exports: [
    CartComponent,
    DashboardComponent,
    MyaccountComponent,
    OrdersComponent,
    OrderDetailComponent,
    MyprofileComponent
  ]
})
export class AreasBuyerPortalModule {}
