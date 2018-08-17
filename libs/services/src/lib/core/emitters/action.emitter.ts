

import { Output, EventEmitter } from '@angular/core';
import { Actions_UI, MenuAction, LoadStateEnum, ModeEnum } from '../../models';
import { Layout, ILayoutProps, SizeEnum } from '../../models';
export interface IActionEmitter{
    type: Actions_UI;    
    subType?: LoadStateEnum | MenuAction;
    payload?: any;
    subPayload?: any;  
}
export class ActionEmitter  implements IActionEmitter {
    type: Actions_UI;    
    subType?: LoadStateEnum | MenuAction;
    payload?: any;
    subPayload?: any;  
    constructor(type?: Actions_UI, sub?: LoadStateEnum | MenuAction) {
        const self = this;
      if (type && sub) {
        self.type = type;
        self.subType = sub;
      }
    }
  }
  // { IActionEmitter , ActionEmitter}