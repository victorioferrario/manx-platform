import { Injectable } from '@angular/core';
import { IDataPayload } from '@manx/services';
import { forkJoin } from 'rxjs';

import { BaseContext } from '../core/BaseContext';
import { HttpRequestItem } from '../core/config';
import { HttpRequestTracker } from '../core/HttpRequestTracker';
import { IPaginationResponse, IRequest } from '../shared/models';
import { DataEmitter } from './emitters';
import { DataEvent } from './enums';
import { ItemsDataContext } from './items.data.service';
import { GetItemsResponse, IAttribute, IRequestPaginationItems } from './models';

@Injectable({
  providedIn: 'root'
})
export class ItemsContext extends BaseContext<DataEmitter> {
  data: GetItemsResponse;
  previousRequest: IRequest;
  pagination: IPaginationResponse;
  constructor(private itemDataContext: ItemsDataContext, private requestTracker: HttpRequestTracker) {
    super();
    const self = this;
    self.data = new GetItemsResponse();
    self.dispatch.subscribe((result: DataEmitter) => {
      switch (result.action) {
        case DataEvent.GetItemsLoaded:
          self.dispatch.emit(
            new DataEmitter(DataEvent.ResultForDashboard, {
              results: result.payload,
              pagination: self.pagination
            })
          );
          break;
        case DataEvent.Loading:
          break;
        default:
          break;
      }
    });
  }
  public getPayload(state?: IDataPayload) {
    const self = this;
    let page = null;
    const item = new HttpRequestItem('getPayload');
    item.status.isLoading.next(true);
    item.status.hasReceivedData.next(false);
    self.requestTracker.list.add(item);
    // self.requestTracker.list
    if (state !== undefined) {
      page = {
        pageSize: state.pagination !== undefined ? state.pagination.pageSize : 50,
        pageNumber: state.pagination !== undefined ? state.pagination.pageNumber : 1
      };
    }
    const request: IRequest = {
      savedFilter: state !== undefined ? state.filter : '',
      attributes: [],
      pagination: page
    };
    self.getMatchNav(request);
    self.previousRequest = request;
    const items = this.itemDataContext.getItems(request),
      attributes = this.itemDataContext.getItemsFilterAttributes(request),
      categories = this.itemDataContext.getItemsFilterCategories(request),
      visualOrder = this.itemDataContext.getItemsFilterVisualOrder(request),
      manufacturers = this.itemDataContext.getItemsFilterManufacturers(request);
    forkJoin([items, attributes, categories, manufacturers, visualOrder]).subscribe((response: any) => {
      if (self.data.populate(response[0]['values'], response[1], response[2], response[4], self.processManufactores(response[3]), request)) {
        self.pagination = response[0]['pagination'];
        self.requestTracker.list.items.forEach(element => {
          if (element.guid === item.guid) {
            element.status.isLoading.next(false);
            element.status.hasReceivedData.next(true);
          }
        });
        self.dispatch.emit(
          new DataEmitter(DataEvent.GetItemsLoaded, {
            loaded: true,
            data: self.data
          })
        );
      }
    });
  }
  /**
   * @param {IDataPayload} [state]
   * @memberof ItemsContext
   */
  public getPayloadPaged(state?: IDataPayload) {
    const self = this;
    let page = null;
    if (state !== undefined) {
      page = {
        pageSize: state.pagination !== undefined ? state.pagination.pageSize : 50,
        pageNumber: state.pagination !== undefined ? state.pagination.pageNumber : 1
      };
    }
    const request: IRequest = {
      savedFilter: state !== undefined ? state.filter : '',
      attributes: [],
      pagination: page
    };
    // self.getMatchNav(request);
    self.previousRequest = request;
    this.itemDataContext.getItemsPaged(request).subscribe((dataResponse: IRequestPaginationItems) => {
      if (self.data.populateItems(dataResponse.values, request)) {
        self.pagination = dataResponse.pagination;
        self.dispatch.emit(
          new DataEmitter(DataEvent.GetItemsLoaded, {
            loaded: true,
            data: self.data
          })
        );
      }
    });
  }

  getMatchNav(request: IRequest) {
    const self = this;
    const matchNav = self.itemDataContext.getItemsMatchNav(request).subscribe((data: any) => {
      // console.warn(data);
    });
  }
  /**
   * @private
   * @param {Array<IAttribute>} data
   * @returns
   * @memberof ItemsContext
   */
  private processManufactores(data: Array<IAttribute>) {
    const self = this;
    const list = data;
    const newTopElement = {
      count: 0,
      logoUrl: '',
      selected: false,
      id: '',
      name: 'All Manufacturers'
    };
    list.unshift(newTopElement);
    if (self.getTotalManufacturerSelected() === 0) {
      list[0].selected = true;
    }
    return list;
  }
  private getTotalManufacturerSelected(): number {
    const self = this;
    if (!self.data.manufacturers || self.data.manufacturers.length === 0) {
      return 0;
    }
    const selectedManufacturers = self.data.manufacturers.filter(m => m.selected && m.id);
    return selectedManufacturers ? selectedManufacturers.length : 0;
  }
}
