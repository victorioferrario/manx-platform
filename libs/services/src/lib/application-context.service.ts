import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { IActionEmitter, ActionEmitter } from './core/emitters'
import { Actions_UI, MenuAction, LoadStateEnum, ModeEnum } from './models';
import { Layout, ILayoutProps, SizeEnum } from './models';
export interface IApplicationContext {
  ux: ILayoutProps; 
  dispatch: EventEmitter<IActionEmitter>;
  initializeListeners():void;  
  transformSideMenu(to: string,toSize: SizeEnum):void;  
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationContext implements IApplicationContext {
  ux: ILayoutProps;
  dispatch: EventEmitter<IActionEmitter>;  
  constructor() {
    const self = this;
    self.ux = new Layout(true);
    self.dispatch = new EventEmitter();
    self.initializeListeners();
  }
    /**
   * Initializes listeners
   */
  initializeListeners() {
    const self = this;
    self.dispatch.subscribe((event: IActionEmitter) => {
      switch (event.type) {
        case Actions_UI.Menu:
          //ToDo: lets see if this switch statement can be eliminated.
          switch (event.subType) {
            case MenuAction.State_Open:
              //ToDO: Remove log
              console.log(self.ux.props.opened,
                self.ux.props.opened ? false : true);
              self.ux.props.opened = true;
              break;
            case MenuAction.State_Close:
              //ToDO: Remove log
              console.log(self.ux.props.opened, self.ux.props.opened ? false : true);
              self.ux.props.opened = false;
              break;
            case MenuAction.State_Toggle:
              //ToDO: Remove log, is it always toggle?              
              console.log(self.ux.props.opened,
                self.ux.props.opened ? false : true);
              self.ux.props.opened = (self.ux.props.opened ? false : true);
              break;
          }
          break;
        case Actions_UI.Mode:
          self.ux.props.mode = self.ux.props.mode === ModeEnum.side ? ModeEnum.over : ModeEnum.side;
          break;
        case Actions_UI.Resize:          
          /**@description: sets up references, 
          then call transformSideMenu**/
          const toSize = (event.subType === MenuAction.Resize_Small
            ? SizeEnum.small : SizeEnum.large);
          const toCss = "sidenav-root-" + toSize;
          self.transformSideMenu(toCss, toSize);
          break;
      }
    });
  }  
  /**
   * Transforms side menu
   * @param to 
   * @param toSize 
   */
  transformSideMenu (
    to: string,
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