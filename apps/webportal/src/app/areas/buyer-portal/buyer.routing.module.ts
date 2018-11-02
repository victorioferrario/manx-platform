import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent, DashboardComponent, MyaccountComponent, MyprofileComponent, OrderDetailComponent, OrdersComponent } from '@manx/areas/buyers';

import { BuyerMainComponent } from './components/main/main.component';

/**
 * @description:  Components
 */
/**
 * @description:  Local Hook
 */
const routes: Routes = [
  {
    path: '',
    component: BuyerMainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'profile', component: MyprofileComponent },
      { path: 'cart', component: CartComponent },
      { path: 'account', component: MyaccountComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orderdetail', component: OrderDetailComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule {}
