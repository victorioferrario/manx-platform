import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface IHttpBaseOptions {
  url: string;
  headers?: HttpHeaders | {};
  body?: any;
}
export class HttpBaseOptions implements IHttpBaseOptions {
  url: string;
  headers?: HttpHeaders | {};
  body?: any;
}
export interface IHttpBaseClient {
  get<T>(options: HttpBaseOptions): Observable<T>;
  post<T>(options: HttpBaseOptions): Observable<T>;
  put<T>(options: HttpBaseOptions): Observable<T>;
  delete<T>(options: HttpBaseOptions): Observable<T>;
}
@Injectable({
  providedIn: 'root'
})
export class HttpBaseClient implements IHttpBaseClient{
  constructor(private http: HttpClient) { }
  get<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.get<T>(options.url).pipe(share());
  }
  post<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.post<T>(options.url, options.body).pipe(share());
  }
  put<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.put<T>(options.url, options.body).pipe(share());
  }
  delete<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.delete<T>(options.url).pipe(share());
  }
}