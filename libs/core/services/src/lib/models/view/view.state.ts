import { ViewStateEnum } from './view.types';
export interface IViewState {
  active: ViewStateEnum;
}
export class ViewState implements IViewState {
  active: ViewStateEnum = ViewStateEnum.login;
  
}
