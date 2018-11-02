import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration as Config } from './template.config';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from '../core';
import { ITemplateItem, ITemplateSearch, ITemplateUpdateItemRequest, ITemplateUpdateItemResponse} from './models';
export interface ITemplateDataContext {
  /**
   * @param id: number
   * @returns: Observable<IPo>;
   */
  getTemplateById(id: number): Observable<ITemplateItem>;
  /**
   * @param search
   * @returns: Observable<ITemplateItem[]>;
   */
  getTemplateItems(search: ITemplateSearch): Observable<ITemplateItem[]>;
  /**
   * @param templateItem: ITemplateUpdateItemRequest
   * @returns: Observable<boolean>;
   */
  updateTemplateItem(templateItem: ITemplateUpdateItemRequest): Observable<ITemplateUpdateItemResponse>;
}
@Injectable({
  providedIn: 'root'
})
export class TemplateDataContext implements ITemplateDataContext {
  public options: IHttpBaseOptions;
  constructor(private baseClient: HttpBaseClient) {
    this.options = new HttpBaseOptions();
  }
  public getTemplateById(id: number): Observable<ITemplateItem> {
    const self = this;
    self.options.url = Config.GetItemUrl + id;
    return self.baseClient.get<ITemplateItem>(self.options);
  }
  public getTemplateItems(search: ITemplateSearch): Observable<ITemplateItem[]> {
    const self = this;
    self.options.body = search;
    self.options.url = Config.GetAllItemsUrl;
    return self.baseClient.get<ITemplateItem[]>(self.options);
  }
  public updateTemplateItem(templateItem: ITemplateUpdateItemRequest): Observable<ITemplateUpdateItemResponse> {
    const self = this;
    self.options.url = Config.UpdateItemUrl;
    self.options.body = templateItem;
    return self.baseClient.post<ITemplateUpdateItemResponse>(self.options);
  }
}
