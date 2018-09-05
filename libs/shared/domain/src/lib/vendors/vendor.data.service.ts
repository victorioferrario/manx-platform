import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import {
  IPo,
  IPoFilter,
  IVendor,
  IVendorItem,
  IPoMain,
  IVendorSearch,
  IVendorItemRequest
} from './models';
import { HttpClient } from '@angular/common/http';
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
  updateVendorItems(vendorItems: IVendorItemRequest[]): Observable<null>;
}
@Injectable({
  providedIn: 'root'
})
export class VendorDataService implements IVendorDataService {
  constructor() {}
  poFilters: IPoFilter = {
    status: { name: 'All' },
    vendor: {},
    searchString: ''
  };
  getPoId(id: number): Observable<IPo> {
    const obs = new Observable<IPo>();
    return obs;
  }
  getPos(sellerId?: string): Observable<IPoMain> {
    const obs = new Observable<IPoMain>();
    return obs;
  }
  getPoPDF(docEntry: number): Observable<Blob> {
    const obs = new Observable<Blob>();
    return obs;
  }
  getItems(search: IVendorSearch): Observable<IVendorItem> {
    const obs = new Observable<IVendorItem>();
    return obs;
  }
  getVendors(): Observable<IVendor[]> {
    const obs = new Observable<IVendor[]>();
    return obs;
  }
  updateVendorItems(vendorItems: IVendorItemRequest[]): Observable<null> {
    const obs = new Observable<null>();
    return obs;
  }
}
export interface HttpOptions {
  url: string;
  body?: any;
}
export class GenericHttpClient {
  constructor(private http: HttpClient) {}
  get<T>(options: HttpOptions): Observable<T> {
    return this.http.get<T>(options.url).pipe(share());
  }
  post<T>(options: HttpOptions): Observable<T> {
    return this.http.post<T>(options.url, options.body).pipe(share());
  }
  put<T>(options: HttpOptions): Observable<T> {
    return this.http.put<T>(options.url, options.body).pipe(share());
  }
  delete<T>(options: HttpOptions): Observable<T> {
    return this.http.delete<T>(options.url).pipe(share());
  }
}
