import { IVendorPOInventory } from './IVendorPOInventory';
import { IVendorCurrentInventory } from './IVendorCurrentInventory';
export interface IVendorInventoryInfo {
    poInventory?: IVendorPOInventory;
    currentInventory: IVendorCurrentInventory;
}