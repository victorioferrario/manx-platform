import { HttpHeaders } from '@angular/common/http';
export interface IHttpBaseOptions {
  url: string;
  headers?: HttpHeaders | {};
  body?: any;
}
// import { IHttpBaseOptions } from './IHttpBaseOptions'
