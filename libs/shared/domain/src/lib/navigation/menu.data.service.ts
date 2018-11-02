
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration as Config } from './menu.config';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from './../core';
import { IResult, INavChild, INavItem } from './models';
export interface IMenuDataContext {
  options: IHttpBaseOptions;
    getMenu(): Observable<IResult> ;
}
@Injectable({
  providedIn: 'root'
})
export class MenuDataContext implements IMenuDataContext {
  public options: IHttpBaseOptions;
  constructor(private baseClient: HttpBaseClient) {
    this.options = new HttpBaseOptions();
  }
  public getMenu(): Observable<IResult> {
    const self = this;
    self.options.url = Config.GetMenuUrl;
    return self.baseClient.get<IResult>(self.options);
  }
}
