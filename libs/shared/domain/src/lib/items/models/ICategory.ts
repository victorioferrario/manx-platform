import { ISubCategory } from '.';

export interface ICategory {
  id: number;
  name: string;
  count: number;
  subCategories: ISubCategory[];
  isOpen: boolean;
  isShown: boolean;
}
// export { ICategory } from './ICategory';
