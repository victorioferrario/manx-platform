import { IDiscountQty } from './IDiscountQty';
export interface IPriceRequest {
    itemCode?: string;
    cost?: number;
    moq?: number;
    discountQtys?: IDiscountQty[];
    unitPrice?: number;
  }