import { IPaginationResponse } from '../../shared/models';
import { IPo } from './IPo';

export interface IPoMain {
  values: IPo[];
  pagination: IPaginationResponse;
}
