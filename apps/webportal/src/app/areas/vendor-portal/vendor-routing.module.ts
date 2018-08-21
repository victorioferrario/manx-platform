import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Components
 */
import {
  VendorMainComponent   ,  
  DashboardComponent    ,
  ProductsComponent     ,
} from './vendor-components';
const routes: Routes = [  
  {
    path: '',   
    component: VendorMainComponent,
    children: [
      { path: '', component: DashboardComponent},
      { path: 'products', component: ProductsComponent}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule { }