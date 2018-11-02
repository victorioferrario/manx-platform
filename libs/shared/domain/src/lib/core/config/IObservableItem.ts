import { BehaviorSubject } from 'rxjs';
export interface IObservableItem<T> extends BehaviorSubject<T> {}
export class ObservableItem<T> extends BehaviorSubject<T> implements IObservableItem<T> {
  constructor(_value: T) {
    super(_value);
    this.asObservable();
  }
}

// { IObservableItem, ObservableItem} from './IObservableItem'
