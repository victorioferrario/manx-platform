# Buyer Portal

> Directory: `libs/areas/buyer-portal/src/lib:`

## Project Structure

The components path is found under this namespace:

> `@manx/areas/buyer`

This library supports the `webportal`, and is wired-up to run under the application. It uses lazy loading, and is wired up here:

> `apps/webportal/src/app/areas/buyer-protal/buyer.routing.module.ts`

It is configured as following:

```ts
/**
 * @description:  Components
 */
import { CartComponent, DashboardComponent, MyaccountComponent, MyprofileComponent, OrdersComponent, OrderDetailComponent } from '@manx/areas/buyers';
/**
 * @description:  Local Hook
 */
import { BuyerMainComponent } from './components/main/main.component';
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
```
