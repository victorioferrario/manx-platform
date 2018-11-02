# Vendor Portal

> Directory: `libs/areas/vendor-portal/src/lib:`

## Project Structure

The components path is found under this namespace:

> `@manx/areas/vendor`

This library supports the `webportal`, and is wired-up to run under the application. It uses lazy loading, and is wired up here:

> `apps/webportal/src/app/areas/vendor-protal/vendor.routing.module.ts`

It is configured as following:

```ts
/**
 * Components
 */
import { DashboardComponent, OrdersComponent, ProductsComponent, ProfileComponent } from '@manx/areas/vendor';
/**
 * @description:  Local Hook
 */
import { VendorMainComponent } from './vendor-components';
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
```
