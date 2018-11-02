import { IComment, IInventory, IItemAttribute, ILink, IPrice } from '.';

export interface IItem {
  id: string;
  vendorItemId: string;
  itemCode: string;
  partNumber: string;
  manufacturer: string;
  manufacturerLogoUrl: string;
  description: string;
  mpn: string;
  moq: number;
  inventory: IInventory;
  prices: IPrice[];
  attributes: IItemAttribute[];
  links: ILink[];
  overwrittenPrice?: number;
  unitPrice?: number;
  qty?: number;
  previousQuantityAdded?: number;
  added?: boolean;
  beingEdited?: boolean;
  inCart?: boolean;
  comments?: IComment[];
  reservedQty: number;
  leadTimeDays: number;
}
