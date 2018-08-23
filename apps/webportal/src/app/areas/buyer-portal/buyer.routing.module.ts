import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * @description:  Components
 */
import {
          CartComponent         ,
          DashboardComponent    ,
          MyaccountComponent    ,
          MyprofileComponent    ,
          OrdersComponent       ,
          OrderDetailComponent  } from '@hubx/areas/buyers';
/**
 * @description:  Local Hook
 */
import { 
  BuyerMainComponent 
} from './components/main/main.component';
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
