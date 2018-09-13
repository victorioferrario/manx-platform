import { HttpHeaders } from '@angular/common/http';
import { IHttpBaseOptions } from './IHttpBaseOptions';
export class HttpBaseOptions implements IHttpBaseOptions {
  url: string;
  headers?: HttpHeaders | {};
  body?: any;
}
