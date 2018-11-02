import { IAttributeValue } from '.';
import { AttrDataType, AttrType } from '../../shared/enums';

export interface IAttribute {
  id?: string;
  name?: string;
  count?: number;
  attrType?: AttrType;
  attrDataType?: AttrDataType;
  attributeValues?: IAttributeValue[];
  logoUrl?: string;
  selected?: boolean;
}
// export { IAttribute } from './IAttribute';
