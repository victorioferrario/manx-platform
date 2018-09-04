export interface IInventoryRequest  {
    itemCode?: string;
    newInventory?: number;
    onHand?: number;
    onRoute?: number;
    leadTimeDays?: number;
  }
// import { IInventoryRequest} from './IInventoryRequest';
// export { IInventoryRequest} from './IInventoryRequest';