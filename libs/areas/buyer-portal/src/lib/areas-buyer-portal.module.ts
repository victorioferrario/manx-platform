import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { UserStateModule } from '@manx/domain';

import { CartComponent } from './components/cart/cart.component';
import { DescriptionComponent } from './components/dashboard/children/description.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaginationComponent } from './components/dashboard/pagination.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemsModule } from './views/items/items.module';

@NgModule({
  imports: [CommonModule, ItemsModule, UserStateModule, RouterModule.forChild([]), FlexLayoutModule],
  declarations: [
    DescriptionComponent,
    PaginationComponent,
    CartComponent,
    DashboardComponent,
    MyaccountComponent,
    OrdersComponent,
    OrderDetailComponent,
    MyprofileComponent
  ],
  exports: [CartComponent, DescriptionComponent, DashboardComponent, MyaccountComponent, OrdersComponent, OrderDetailComponent, MyprofileComponent]
})
export class AreasBuyerPortalModule {}
