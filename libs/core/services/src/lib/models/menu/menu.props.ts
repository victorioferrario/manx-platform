import {
  BuyerViewSection,
  VendorViewSection
} from '../enums';
export interface IMenuItem {
  id:string;
  icon?:string;
  label: string;
  path: string;
  section?: BuyerViewSection | VendorViewSection;
}
export class MenuFactory {
  public static BuyerMenuItems: IMenuItem[] = [
    {
      id:"nav-item-01",
      icon:"home", 
      label: 'Dashboard',
      path: '/buyer',
      section: BuyerViewSection.Dashboard
    },    
    {
      id:"nav-item-02",
      icon:"shopping_cart",
      label: 'Shopping Cart',
      path: '/buyer/cart',
      section: BuyerViewSection.Cart
    },
    {
      id:"nav-item-03",
      icon:"assignment_ind",
      label: 'My Account',
      path: '/buyer/account',
      section: BuyerViewSection.Account
    },
    {
      id:"nav-item-04",
      icon:"account_box",
      label: 'My Profile',
      path: '/buyer/profile',
      section: BuyerViewSection.Profile
    },
    {
      id:"nav-item-05",
      icon:"description",
      label: 'My Orders',
      path: '/buyer/orders',
      section: BuyerViewSection.Orders
    },
    {
      id:"nav-item-06",
      icon:"dns",
      label: 'My Order Details',
      path: '/buyer/orderdetail',
      section: BuyerViewSection.OrderDetails
    },
    {
      id:"nav-item-07",
      icon:"reply",
      label: 'Logout',
      path: 'DIALOG',
      section: BuyerViewSection.Logout
    }
  ];
  public static VendorMenuItems: IMenuItem[] = [
    {
      id:"nav-item-01",
      icon:"home",
      label: 'Dashboard',
      path: '/vendor',
      section: VendorViewSection.Dashboard
    },
    {
      id:"nav-item-02",
      icon:"important_devices",
      label: 'Products',
      path: '/vendor/products',
      section: VendorViewSection.Products
    },
    {
      id:"nav-item-03",
      icon:"description",
      label: 'Orders',
      path: '/vendor/orders',
      section: VendorViewSection.Orders
    },
    {
      id:"nav-item-04",
      icon:"account_box",
      label: 'My Profile',
      path: '/vendor/profile',
      section: VendorViewSection.Profile
    },
    {
      id:"nav-item-05",
      icon:"reply",
      label: 'Logout',
      path: 'DIALOG',
      section: VendorViewSection.Logout
    }
  ];
}



