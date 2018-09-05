import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IPo, IPoFilter,IVendor, IVendorItem,IPoMain, IVendorSearch, IVendorItemRequest } from './models';

export interface IVendorDataService {   
    poFilters: IPoFilter;
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
    getPoPDF(docEntry: number): Observable<Blob>;
    /**   
     * @param sellerId 
     * @returns: Observable<IPoMain>;   
     */
    getPos(sellerId?: string): Observable<IPoMain>;    
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
export class VendorDataService implements IVendorDataService {
    constructor(){}
    poFilters: IPoFilter = {
        status: { name: 'All' },
        vendor: {},
        searchString: ''
    };      
    getPoId(id: number): Observable<IPo>{
        const obs = new Observable<IPo>();
        return obs;
    }
    getPos(sellerId?: string): Observable<IPoMain>{
        const obs = new Observable<IPoMain>();
        return obs;
    }
    getPoPDF(docEntry: number): Observable<Blob>{
        const obs = new Observable<Blob>();
        return obs;
    }
    getItems(search: IVendorSearch): Observable<IVendorItem>{
        const obs = new Observable<IVendorItem>();
        return obs;
    }
    getVendors(): Observable<IVendor[]>{
        const obs = new Observable<IVendor[]>();
        return obs;
    }
    updateVendorItems(vendorItems: IVendorItemRequest[]): Observable<null>{
        const obs = new Observable<null>();
        return obs;
    }
}