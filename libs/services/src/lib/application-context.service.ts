import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { Actions_UI, MenuAction, LoadStateEnum, ModeEnum } from './models';
import { Layout, ILayoutProps, SizeEnum } from './models';
export class ActionEmitter {
  type: Actions_UI;
  payload?: any;
  subType?: LoadStateEnum | MenuAction;
  subPayload?: any;
  constructor(type?: Actions_UI, sub?: LoadStateEnum | MenuAction) {
    if (type && sub) {
      this.type = type;
      this.subType = sub;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationContext {
  ux: ILayoutProps;
  dispatch: EventEmitter<ActionEmitter> = new EventEmitter();  
  constructor() {
    const self = this;
    self.ux = new Layout(true);   
    self.initializeListeners();
  }
  /*
  **
    @method: initializeListeners
    @description: This method handles ui commands.
  **
  **/
  initializeListeners() {
    //this.dispatch.
    const self = this;
    self.dispatch.subscribe((event: ActionEmitter) => {
      switch (event.type) {
        case Actions_UI.Menu:
          switch (event.subType) {
            case MenuAction.State_Open:
              self.ux.props.opened = true;
              break;
            case MenuAction.State_Close:
              self.ux.props.opened = false;
              break;
            case MenuAction.State_Toggle:
              self.ux.props.opened = (self.ux.props.opened ? false : true);
              break;
          }
          break;
        case Actions_UI.Mode:
          self.ux.props.mode = self.ux.props.mode === ModeEnum.side ? ModeEnum.over : ModeEnum.side;
          // switch (event.subType) {
          //   case MenuAction.State_Open:
          //     self.ux.props.opened = true;
          //     break;
          //   case MenuAction.State_Close:
          //     self.ux.props.opened = false;
          //     break;
          //   case MenuAction.State_Toggle:
          //     self.ux.props.opened = (self.ux.props.opened ? false : true);
          //     break;
          // }
          break;
        case Actions_UI.Resize:
          switch (event.subType) {
            case MenuAction.Resize_Small:
              const fromCss = self.ux.props.cssClass;
              const toCss = "sidenav-root-" + SizeEnum.small;
              self.transformSideMenu(
                toCss,
                fromCss,
                SizeEnum.small);

              break;
            case MenuAction.Resize_Large:
              const fromCss2 = self.ux.props.cssClass;
              const toCss2 = "sidenav-root-" + SizeEnum.large;
              self.transformSideMenu(
                toCss2,
                fromCss2,
                SizeEnum.large);
              break;
          }
          break;
      }
    });
  }
  /*
    @method: transformSideMenu
    @description:This handles resizing the sidebar.
  */
  private transformSideMenu(to: string,
    from: string,
    toSize: SizeEnum) {
    const self = this;
    self.ux.props.opened = false;
    const _size: SizeEnum = self.ux.props.size;
    setTimeout(() => {
      self.ux.props.cssClass = to;      
    }, _size === SizeEnum.small ? 300 : 150);
    setTimeout(() => {
      self.ux.props.opened = true;
      self.ux.props.size = toSize;    
    }, _size === SizeEnum.small ? 400 : 300);
  }
}