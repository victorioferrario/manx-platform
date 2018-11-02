import { Injectable } from '@angular/core';

import { GenericList, HttpRequestItem, IGenericList, IHttpRequestItem } from './config';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestTracker {
  list: IGenericList<IHttpRequestItem>;
  constructor() {
    const self = this;
    self.list = new GenericList<HttpRequestItem>();
  }
}
