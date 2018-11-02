


import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration as Config } from './menu.config';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from './../core';
import { IResult, INavChild, INavItem } from './models';
import { MenuDataContext } from './menu.data.service';
@Injectable({
  providedIn: 'root'
})
export class MenuService  {

  constructor(private service: MenuDataContext) {
  }
  public getMenu(): Observable<IResult> {
    const self = this;
    return self.service.getMenu();
  }
}
