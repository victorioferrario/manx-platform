import { IDiscountQty } from './IDiscountQty';
export interface IPriceRequest {
    itemCode?: string;
    cost?: number;
    moq?: number;
    discountQtys?: IDiscountQty[];
    unitPrice?: number;
  }

//   import { IPriceRequest } from './IPriceRequest';
//   export { IPriceRequest } from './IPriceRequest';