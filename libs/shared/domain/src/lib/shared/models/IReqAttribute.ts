import { AttrDataType, AttrType } from '../enums';

export interface IReqAttribute {
  id?: string;
  name?: string;
  attrType?: AttrType;
  attrDataType?: AttrDataType;
  values?: string[];
}
