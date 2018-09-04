import { ILinks } from './ILinks';
import { IPoLines } from './IPoLines';
import { IPoShippingInformation } from './IPoShippingInformation';
export interface IPo {
    vendorInvoiceNo?: string;
    docEntry: number;
    docNumber: number;
    cardCode: string;
    customerRef?: string;
    externalId?: string;
    orderDate?: string;
    shippingAddress?: string;
    shippingAddressCode?: string;
    billingAddress?: string;
    billingAddressCode?: string;
    comments?: string;
    subtotal?: number;
    orderDiscountPercent?: number;
    orderDiscountAmount?: number;
    shipping?: number;
    tax?: number;
    orderTotal?: number;
    orderStatus?: string;
    salesEmployee?: string;
    contactName?: string;
    contactEmail?: string;
    terms?: string;
    isCancelled?: true;
    shippingInformation?: IPoShippingInformation;
    orderDetails?: IPoLines[];
    links?: ILinks[];
    isModalShown?: boolean;
    isOnHover?: boolean;
  }

//   import { IPo } from './IPo';
//   export { IPo } from './IPo';