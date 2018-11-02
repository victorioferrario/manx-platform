import { IPaginationRequest, IReqAttribute } from '.';

export interface IRequest {
  attributes?: IReqAttribute[]; // need to recheck
  pagination?: IPaginationRequest;
  savedFilter?: string;
  searchQuery?: string;
  categoryId?: any;
  navId?: any;
}
