import { IPaginationRequest } from '@manx/domain';

export enum DataAction {
  LoadItems = 'LoadItems',
  PageItems = 'LoadItems-Page',
  LoadItemsByFilter = 'LoadItemsByFilter'
}
export interface IDataPayload {
  filter?: string;
  pagination?: IPaginationRequest;
}
export class DataPayload implements IDataPayload {
  filter?: string;
  pagination?: IPaginationRequest;
  constructor(filter?: string, page?: IPaginationRequest) {
    if (filter !== undefined) {
      this.filter = filter;
    }
    if (page !== undefined) {
      this.pagination = page;
    }
  }
}
