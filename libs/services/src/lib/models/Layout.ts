import { ILayout } from './ILayout';
import { factory } from '../util/Logger';
const log = factory.getLogger('model.Product');
export class Layout implements ILayout {
  loading = false;
  currentView: any;
  constructor() {
    log.debug(() => 'Casting lambda debug magic spell: ' + this.loading);
  }
}
