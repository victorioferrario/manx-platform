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

