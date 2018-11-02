import { Injectable } from '@angular/core';
import { ItemsContext } from '@manx/domain';

@Injectable({
  providedIn: 'root'
})
export class DataContextService {
  constructor(public items: ItemsContext) {}
}
