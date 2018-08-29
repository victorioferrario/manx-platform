import {
  BuyerViewSection,
  VendorViewSection
} from '../enums';
export interface IMenuItem {
  id:string;
  label: string;
  path: string;
  section?: BuyerViewSection | VendorViewSection;
}
export class MenuFactory {
  public static BuyerMenuItems: IMenuItem[] = [
    {
      id:"nav-item-01",
      label: 'Dashboard',
      path: '/buyer',
      section: BuyerViewSection.Dashboard
    },    
    {
      id:"nav-item-02",
      label: 'Shopping Cart',
      path: '/buyer/cart',
      section: BuyerViewSection.Cart
    },
    {
      id:"nav-item-03",
      label: 'My Account',
      path: '/buyer/account',
      section: BuyerViewSection.Account
    },
    {
      id:"nav-item-04",
      label: 'My Profile',
      path: '/buyer/profile',
      section: BuyerViewSection.Profile
    },
    {
      id:"nav-item-05",
      label: 'My Orders',
      path: '/buyer/orders',
      section: BuyerViewSection.Orders
    },
    {
      id:"nav-item-06",
      label: 'My Order Details',
      path: '/buyer/orderdetail',
      section: BuyerViewSection.OrderDetails
    },
    {
      id:"nav-item-07",
      label: 'Logout',
      path: 'DIALOG',
      section: BuyerViewSection.Logout
    }
  ];
  public static VendorMenuItems: IMenuItem[] = [
    {
      id:"nav-item-01",
      label: 'Dashboard',
      path: '/vendor',
      section: VendorViewSection.Dashboard
    },
    {
      id:"nav-item-02",
      label: 'Products',
      path: '/vendor/products',
      section: VendorViewSection.Products
    },
    {
      id:"nav-item-03",
      label: 'Orders',
      path: '/vendor/orders',
      section: VendorViewSection.Orders
    },
    {
      id:"nav-item-04",
      label: 'My Profile',
      path: '/vendor/profile',
      section: VendorViewSection.Profile
    },
    {
      id:"nav-item-05",
      label: 'Logout',
      path: 'DIALOG',
      section: VendorViewSection.Logout
    }
  ];
}



