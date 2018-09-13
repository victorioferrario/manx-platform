import { Observable } from 'rxjs';
import { IHttpBaseOptions } from './IHttpBaseOptions';
export interface IHttpBaseClient {
  get<T>(options: IHttpBaseOptions): Observable<T>;
  post<T>(options: IHttpBaseOptions): Observable<T>;
  put<T>(options: IHttpBaseOptions): Observable<T>;
  delete<T>(options: IHttpBaseOptions): Observable<T>;
}
