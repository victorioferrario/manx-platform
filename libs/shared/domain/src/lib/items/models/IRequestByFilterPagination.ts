import { IPaginationRequest } from '../../shared/models';
import { IItem } from './IITem';

export interface IRequestByFilterPagination {
  filter: string;
  pagination: IPaginationRequest;
}

export interface IRequestPaginationItems {
  values: IItem[];
  filter: string;
  pagination: IPaginationRequest;
}
