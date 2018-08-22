import {
  Actions_UI,
  MenuAction,
  LoadStateEnum,
  AuthAction
} from '../../models';
export interface ILayoutAction {
  type: Actions_UI;
  subType?: LoadStateEnum | MenuAction | AuthAction;
  payload?: any;
}
export class LayoutAction implements ILayoutAction {
  type: Actions_UI;
  subType: LoadStateEnum | MenuAction | AuthAction;
  payload: any;
  constructor(
    type?: Actions_UI,
    sub?: LoadStateEnum | MenuAction | AuthAction
  ) {
    const self = this;
    if (type && sub) {
      self.type = type;
      self.subType = sub;
    }
  }
}


