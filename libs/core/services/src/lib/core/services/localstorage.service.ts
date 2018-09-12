import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
export class GenericList<T> {
  items: T[];
  activeItem: T;
  constructor(t?: T) {
    const self = this;
    self.items = [];
    if (t) {
      self.activeItem = t;
    }
  }
  add(t: T) {
    const self = this;
    self.items.push(t);
    self.activeItem = t;
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
  }
}

const STORAGE_KEY = 'local_session';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService<T> {
  localGenericList: GenericList<T>;
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
    this.localGenericList = new GenericList<T>();
  }
  public storeOnLocalStorage(t: T): void {
    //get array of tasks from local storage
    const result = (this.storage.get(STORAGE_KEY) || []) as GenericList<T>;
    // push new task to array
    console.log(result);
    if (result) {
      this.localGenericList.addRange(t, result.items);
    } else {
      this.localGenericList.add(t);
    }
    this.storage.set(STORAGE_KEY, this.localGenericList);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
}
