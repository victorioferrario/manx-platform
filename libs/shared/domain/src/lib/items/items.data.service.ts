import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from '../core';
import { IRequest } from '../shared/models';
import { ItemsConfiguration as Config } from './items.config';
import { IAttribute, ICategory, IItem, IMatchNav, IRequestPaginationItems, IVisualFilter } from './models';

export interface IItemsDataContext {
  getItems(request: IRequest): Observable<IItem[]>;
  getItemsPaged(request: IRequest): Observable<IRequestPaginationItems>;
  getItemsFilterAttributes(request: IRequest): Observable<IAttribute[]>;
  getItemsFilterCategories(request: IRequest): Observable<ICategory[]>;
  getItemsFilterManufacturers(request: IRequest): Observable<IAttribute[]>;
  getItemsFilterVisualOrder(request: IRequest): Observable<IVisualFilter[]>;
  getItemsPriceList(): Observable<Blob>;
  getItemDetail(id: string): Observable<IItem>;
  getItemsMatchNav(request: IRequest): Observable<IMatchNav>;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsDataContext implements IItemsDataContext {
  public options: IHttpBaseOptions;
  constructor(private baseClient: HttpBaseClient) {
    this.options = new HttpBaseOptions();
  }
  public getItems(request: IRequest): Observable<IItem[]> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsUrl;
    return self.baseClient.post<IItem[]>(self.options);
  }
  public getItemsPaged(request: IRequest): Observable<IRequestPaginationItems> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsUrl;
    return self.baseClient.post<IRequestPaginationItems>(self.options);
  }
  public getItemsFilterAttributes(request: IRequest): Observable<IAttribute[]> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsAttributes;
    return self.baseClient.post<IAttribute[]>(self.options);
  }
  public getItemsFilterCategories(request: IRequest): Observable<ICategory[]> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsCategories;
    return self.baseClient.post<ICategory[]>(self.options);
  }
  public getItemsFilterManufacturers(request: IRequest): Observable<IAttribute[]> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsManufactures;
    return self.baseClient.post<IAttribute[]>(self.options);
  }
  public getItemsFilterVisualOrder(request: IRequest): Observable<IVisualFilter[]> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsVisualOrder;
    return self.baseClient.post<IAttribute[]>(self.options);
  }
  public getItemsMatchNav(request: IRequest): Observable<IMatchNav> {
    const self = this;
    self.options.body = request;
    self.options.url = Config.GetItemsMatchNav;
    return self.baseClient.post<IMatchNav>(self.options);
  }
  public getItemDetail(id: string): Observable<IItem> {
    const self = this;
    self.options.url = Config.GetItemDetailUrl + id;
    return self.baseClient.get<IItem>(self.options);
  }
  public getItemsPriceList(): Observable<Blob> {
    const self = this;
    self.options.url = Config.GetItemsPriceListUrl;
    return self.baseClient.get<Blob>(self.options);
  }
}
