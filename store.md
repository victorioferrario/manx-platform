Some biolerplated

```ts
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { omit } from 'lodash';
// export const reducer = () =>
//   scan<any>((state, action) => {
//     let next;
//     switch (action.type) {
//       case 'SET':
//         next = action.payload;
//         break;
//       case 'UPDATE':
//         next = { ...state, ...action.payload };
//         break;
//       case 'DELETE':
//         next = omit(state, action.payload);
//         break;
//       default:
//         next = state;
//         break;
//     }
//     return next;
// }, {});


export interface IAction {
    type: string;
    payload?: any;
}
export interface IReducer<T> {
    name?: string;
    (state: T, action: IAction): T;
}

export class Store<T> {
    private _state$: BehaviorSubject<T>;
    private _state: T;
    constructor(private reducer: IReducer<T>, initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
        this._state = initialState;
    }
    get state$ (): Observable<T> {
        return this._state$.asObservable();
    }
    get state (): T {
        return this._state$.getValue();
    }
    setState ( nextState: T): void {
        this._state$.next(nextState);
    }
    dispatch(action: IAction) {
        this._state = this.reducer(this._state, action);
    }
}

```
Other Store.ts

```ts
import { Injectable } from '@angular/core';
import { Subject, Observable, pipe } from 'rxjs';
import { scan } from 'rxjs/operators';
import { omit } from 'lodash';
import { map, distinctUntilChanged, shareReplay } from 'rxjs/operators';

import { get, isEqual } from 'lodash';
import { Action} from './actions';

export const reducer = () =>
  scan<any>((state: any, action: any) => {
    let next;
    switch (action.type) {
      case 'SET':
        next = action.payload;
        break;
      case 'UPDATE':
        next = { ...state, ...action.payload };
        break;
      case 'DELETE':
        next = omit(state, action.payload);
        break;
      default:
        next = state;
        break;
    }
    return next;
}, {});

export const slice = path =>
  pipe(
      map(state => get(state, path, null)), distinctUntilChanged(isEqual));

@Injectable({
    providedIn: 'root'
  })
  export class Store {
    state: Observable<any>;
    actions: Subject<Action> = new Subject();
    constructor() {
        this.state = this.actions.pipe(
            reducer(),
            shareReplay(1)
        );
    }
    dispatch(action: Action) {
        this.actions.next(action);
    }
    select(path: string) {
        return this.state.pipe(slice(path));
    }
}


```
