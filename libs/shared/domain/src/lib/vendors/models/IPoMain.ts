import { IPo } from './IPo';
import { IPaginationResponse } from './IPaginationResponse';
export interface IPoMain {
    values: IPo[];
    pagination: IPaginationResponse;    
  }