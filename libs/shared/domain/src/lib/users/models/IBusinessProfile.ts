import { IContact } from './IContact';
import { IAddress } from './IAddress';
export interface IBusinessProfile {
    companyName: string;
    bpCode: string;
    contact:IContact;
    billilngAddresses: IAddress[];
    shippingAddresses: IAddress[];
    discount: number;
    hasOpenOrders: false;
    terms: string;
}