import { UUID } from '../models';
import { HttpRequestStatus, IHttpRequestStatus } from './IHttpRequestStatus';

export interface IHttpRequestItem {
  guid: string;
  route: string;
  status: IHttpRequestStatus;
}
export class HttpRequestItem implements IHttpRequestItem {
  guid: string;
  route: string;
  status: HttpRequestStatus;
  constructor(route: string) {
    this.route = route;
    this.guid = UUID.generate();
    this.status = new HttpRequestStatus();
  }
}
// { IHttpRequestItem, HttpRequestItem} from './IHttpRequestItem';
