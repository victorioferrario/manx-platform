import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
export interface HttpBaseOptions {
    url: string;
    body?: any;
  }
  export class HttpBaseClient {
    constructor(private http: HttpClient) {}
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