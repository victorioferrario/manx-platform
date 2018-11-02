import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, OrdersComponent, ProductsComponent, ProfileComponent } from '@manx/areas/vendor';

import { VendorMainComponent } from './vendor-components';

/**
 * Components
 */
/**
 * @description:  Local Hook
 */
const routes: Routes = [
  {
    path: '',
    component: VendorMainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}
