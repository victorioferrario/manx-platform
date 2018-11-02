import { ObservableItem } from './IObservableItem';

export interface IGenericList<T> {
  items: T[];
  itemsObs: ObservableItem<T[]>;
  activeItem: T;
  findItem: T;
  filterItem: T;
  add(t: T): void;
  get(id: any, value: any);
  addRange(t: T, tl: T[]): void;
}
export class GenericList<T> implements IGenericList<T> {
  items: T[];
  itemsObs: ObservableItem<T[]>;
  activeItem: T;
  findItem: T;
  filterItem: T;
  constructor(t?: T) {
    const self = this;
    self.items = [];
    self.itemsObs = new ObservableItem<T[]>([]);
    if (t) {
      self.activeItem = t;
    }
  }

  get(id: any, value: any) {
    const self = this;
    const index = self.items.filter(item => item[id] === value).findIndex(value);
    this.filterItem = self.items[index];
    this.findItem = self.items.find(function(obj) {
      return obj[id] === value;
    });
  }

  //  var obj = objArray.find(function (obj) { return obj.id === 3; });

  add(t: T) {
    const self = this;
    self.items.push(t);
    self.activeItem = t;
    self.itemsObs.next(self.items);
  }
  addRange(t: T, tl: T[]) {
    const self = this;
    if (tl !== undefined && tl.length > 0) {
      tl.forEach((a: T) => {
        self.items.push(a);
      });
    }
    self.items.push(t);
    self.activeItem = t;
    self.itemsObs.next(self.items);
  }
  remove(value: T): this {
    let index = -1;
    while (this.items && this.items.length > 0 && (index = this.items.indexOf(value)) > -1) {
      this.items.splice(index, 1);
    }
    return this;
  }
  find(valueString: string) {}
}

// export  { GenericList, IGenericList } from './IGenericList'
