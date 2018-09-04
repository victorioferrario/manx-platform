import { Injectable, Output, EventEmitter } from '@angular/core';
import { IPo, IPoFilter,IVendor, IVendorItem,IPoMain, IVendorSearch, IVendorItemRequest } from './models';
import { Observable } from 'rxjs';

export interface IVendorDataService {   
    /**
    * @param id: number 
     * @returns: Observable<IPo>;
     */   
    getPoId(id: number): Observable<IPo>;
    /**
     * 
     * @param docEntry 
     * @returns: Observable<Blob>;
     */
    getPOPDF(docEntry: number): Observable<Blob>;
    /**   
     * @param sellerId 
     * @returns: Observable<IPoMain>;   
     */
    getPOs(sellerId?: string): Observable<IPoMain>;    
    /**
     * @param search 
     * @returns: Observable<IVendorItem>;
     */
    getItems(search: IVendorSearch): Observable<IVendorItem>;
    /**
     * @returns: Observable<IVendor[]>
     */
    getVendors(): Observable<IVendor[]>;
    /**
     * 
     * @param vendorItems 
     * @returns: Observable<null>;
     */
    updateVendorItems(vendorItems: IVendorItemRequest[]): Observable<null>
}
@Injectable({
    providedIn: 'root'
})
export class VendorDataService {
    poFilters: IPoFilter = {
        status: { name: 'All' },
        vendor: {},
        searchString: ''
    };    
}