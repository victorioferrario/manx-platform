import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
@NgModule({
  imports: [
    CommonModule    
  ],  
  declarations: [
    DashboardComponent, 
    ProductsComponent, 
    ProfileComponent, 
    OrdersComponent
  ]
})
export class AreasVendorPortalModule {}
