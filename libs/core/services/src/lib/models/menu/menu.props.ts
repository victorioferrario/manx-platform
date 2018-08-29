import {
  BuyerViewSection,
  VendorViewSection
} from '../enums';
export interface IMenuItem {
  label: string;
  path: string;
  section?: BuyerViewSection | VendorViewSection;
}
export class MenuFactory {
  public static BuyerMenuItems: IMenuItem[] = [
    {
      label: 'Dashboard',
      path: '/buyer',
      section: BuyerViewSection.Dashboard
    },
    {
      label: 'Shopping Cart',
      path: '/buyer/cart',
      section: BuyerViewSection.Cart
    },
    {
      label: 'My Account',
      path: '/buyer/account',
      section: BuyerViewSection.Account
    },
    {
      label: 'My Profile',
      path: '/buyer/profile',
      section: BuyerViewSection.Profile
    },
    {
      label: 'My Orders',
      path: '/buyer/orders',
      section: BuyerViewSection.Orders
    },
    {
      label: 'My Order Details',
      path: '/buyer/orderdetail',
      section: BuyerViewSection.OrderDetails
    },
    {
      label: 'Logout',
      path: 'DIALOG'
    }
  ];
  public static VendorMenuItems: IMenuItem[] = [
    {
      label: 'Dashboard',
      path: '/vendor',
      section: VendorViewSection.Dashboard
    },
    {
      label: 'Products',
      path: '/vendor/products',
      section: VendorViewSection.Products
    },
    {
      label: 'Orders',
      path: '/vendor/orders',
      section: VendorViewSection.Orders
    },
    {
      label: 'My Profile',
      path: '/vendor/profile',
      section: VendorViewSection.Profile
    },
    {
      label: 'Logout',
      path: 'DIALOG'
    }
  ];
}



