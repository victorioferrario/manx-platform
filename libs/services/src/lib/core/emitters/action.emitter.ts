

import { Output, EventEmitter } from '@angular/core';
import { Actions_UI, MenuAction, LoadStateEnum , AuthAction} from '../../models';
// import { Layout, ILayoutProps, SizeEnum, AuthAction } from '../../models';
export interface IActionEmitter{
    type: Actions_UI;    
    subType?: LoadStateEnum | MenuAction | AuthAction;
    payload?: any;
    subPayload?: any;  
}
export class ActionEmitter  implements IActionEmitter {
    type: Actions_UI;    
    subType?: LoadStateEnum | MenuAction | AuthAction;
    payload?: any;
    subPayload?: any;  
    constructor(type?: Actions_UI, sub?: LoadStateEnum | MenuAction | AuthAction) {
        const self = this;
      if (type && sub) {
        self.type = type;
        self.subType = sub;
      }
    }
  }
  // { IActionEmitter , ActionEmitter}