import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Components
 */
import {
  BuyerMainComponent  , 
  CartComponent       ,  
  DashboardComponent  ,
  MyProfileComponent
} from './buyer-components';

const routes: Routes = [  
  {
    path: '',   
    component: BuyerMainComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'cart', component: CartComponent },
      { path: 'profile', component: MyProfileComponent}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],    
    exports: [RouterModule]
})
export class BuyerRoutingModule { }