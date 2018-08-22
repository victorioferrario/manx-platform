import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * Components
 */
import {
          DashboardComponent    ,   
          OrdersComponent       ,   
          ProductsComponent     ,   
          ProfileComponent      } from '@hubx/areas/vendor';
/**
 * @description:  Local Hook
 */
import { VendorMainComponent    } from './vendor-components';
const routes: Routes = [  
  {
    path: '',   
    component: VendorMainComponent,
    children: [
      { path: '', component: DashboardComponent         },
      { path: 'products', component: ProductsComponent  },
      { path: 'orders', component: OrdersComponent      },
      { path: 'profile' , component: ProfileComponent   }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendorRoutingModule { }