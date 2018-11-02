export interface IInventory {
  onHand: number;
  enRoute: number;
  committed?: number;
  availableToSell?: number;
}
