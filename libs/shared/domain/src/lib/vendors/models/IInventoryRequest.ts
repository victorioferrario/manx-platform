export interface IInventoryRequest  {
    itemCode?: string;
    newInventory?: number;
    onHand?: number;
    onRoute?: number;
    leadTimeDays?: number;
  }