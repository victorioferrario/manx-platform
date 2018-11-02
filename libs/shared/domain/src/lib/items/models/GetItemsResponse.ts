import { IAttribute, ICategory, IItem, IVisualFilter } from '.';
import { IRequest } from '../../shared/models';

export interface IGetItems {
  items: Array<IItem>;
  attributes: Array<IAttribute>;
  categories: Array<ICategory>;
  manufacturers: Array<IAttribute>;
  visualorders: Array<IVisualFilter>;
  requestHistory?: IRequest;
  populate(items: any, attributes: any, categories: any, visualorders: any, manufacturers: any, request: IRequest): boolean;
  populateItems(items: any, request: IRequest): boolean;
}
export class GetItemsResponse implements IGetItems {
  items: Array<IItem>;
  attributes: Array<IAttribute>;
  categories: Array<ICategory>;
  manufacturers: Array<IAttribute>;
  visualorders: Array<IVisualFilter>;
  requestHistory?: IRequest;
  constructor() {
    const self = this;
    self.items = [];
    self.attributes = [];
    self.categories = [];
    self.visualorders = [];
    self.manufacturers = [];
  }
  public populate(items: any, attributes: any, categories: any, visualorders: any, manufacturers: any, request: IRequest) {
    const self = this;
    self.items = items;
    self.attributes = attributes;
    self.categories = categories;
    self.visualorders = visualorders;
    self.manufacturers = manufacturers;
    self.requestHistory = request;
    return true;
  }
  public populateItems(items: any, request: IRequest) {
    const self = this;
    self.items = items;
    self.requestHistory = request;
    return true;
  }
}

// export { IGetItems, GetItemsResponse} from './GetItemsResponse';
