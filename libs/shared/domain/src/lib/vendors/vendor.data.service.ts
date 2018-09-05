import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Configuration as Config } from './vendor.config';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from './../core/HttpBaseClient';

import {
  IPo,
  IPoFilter,
  IVendor,
  IVendorItem,
  IPoMain,
  IVendorSearch,
  IVendorItemRequest
} from './models';
export interface IVendorDataContext {
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
  updateVendorItems(vendorItems: IVendorItemRequest[]): Observable<null>;
}
@Injectable({
  providedIn: 'root'
})
export class VendorDataContext implements IVendorDataContext {
  public options: IHttpBaseOptions;
  constructor(private baseClient: HttpBaseClient) { }
  poFilters: IPoFilter = {
    status: { name: 'All' },
    vendor: {},
    searchString: ''
  };
  public getPoId(id: number): Observable<IPo> {
    const self = this;
    self.options.url = Config.GetPoUrl + id;
    return self.baseClient.get<IPo>(self.options);
  }
  public getPos(sellerId?: string): Observable<IPoMain> {
    const self = this;
    const params = sellerId ? '?sellerId=' + sellerId : '';    
    self.options.url = Config.GetPoUrl + params;
    return self.baseClient.get<IPoMain>(self.options);
  }
  public getPoPDF(docEntry: number): Observable<Blob> {
    const obs = new Observable<Blob>();
    return obs;
  }
  public getItems(search: IVendorSearch): Observable<IVendorItem> {
    const self = this;
    self.options.url = Config.GetPoUrl;
    self.options.body = search;
    return self.baseClient.post<IVendorItem>(self.options);
  }
  public getVendors(): Observable<IVendor[]> {
    const self = this;
    self.options.url = Config.GetAllVendorsUrl;
    return self.baseClient.get<IVendor[]>(self.options);
  }
  public updateVendorItems(vendorItems: IVendorItemRequest[]): Observable<null> {
    const obs = new Observable<null>();
    return obs;
  }
}



