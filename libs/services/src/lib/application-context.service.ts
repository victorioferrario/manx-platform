import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { IActionEmitter, ActionEmitter } from './core/emitters'
import { Actions_UI, MenuAction, LoadStateEnum, ModeEnum } from './models';
import { Layout, ILayoutProps, SizeEnum } from './models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SubHeaderConfiguration as Config } from './models';
export interface IApplicationContext {
  ux: ILayoutProps;
  dispatch: EventEmitter<IActionEmitter>;
  breakObserver: BreakpointObserver;
  initializeListeners(): void;
  initializeBreakPointObserver(): void;
  transformSideMenu(to: string, to2: string, toSize: SizeEnum): void;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationContext implements IApplicationContext {
  ux: ILayoutProps;
  dispatch: EventEmitter<IActionEmitter>;
  breakObserver: BreakpointObserver;
  constructor(breakpointObserver: BreakpointObserver) {
    const self = this;
    self.ux = new Layout(true);
    self.dispatch = new EventEmitter();
    self.breakObserver = breakpointObserver;
    self.initializeListeners();
    self.initializeBreakPointObserver();
  }
  initializeListeners() {
    const self = this;
    self.dispatch.subscribe((event: IActionEmitter) => {
      switch (event.type) {
        case Actions_UI.Menu:
          const temp = event.subType as MenuAction;
          switch (event.subType) {
            case MenuAction.State_Toggle:
              self.ux.props.opened = !self.ux.props.opened;
              break;
            default:
              self.ux.props.opened = (temp === MenuAction.State_Open);
              break;
          }
          break;
        case Actions_UI.Mode:
          self.ux.props.opened = false;
          self.ux.props.mode = self.ux.props.mode === ModeEnum.side ? ModeEnum.push : ModeEnum.side;
          self.ux.props.opened = self.ux.props.mode === ModeEnum.side;          
          self.ux.childProps.cssClass = Config.RootCssClass
           + self.ux.props.size  + " " + self.ux.props.mode;
          break;
        case Actions_UI.Resize:
          const toSize = (event.subType === MenuAction.Resize_Small ? SizeEnum.small : SizeEnum.large);
          const toCss = "sidenav-root-" + toSize;
          const toCss2 = Config.RootCssClass + toSize;
          self.transformSideMenu(toCss, toCss2, toSize);
          break;
      }
    });
  }
  /**
   * Transforms side menu
   * @param to 
   * @param toSize 
   */
  transformSideMenu(
    to: string,
    to2: string,
    toSize: SizeEnum) {

    const self = this;
    self.ux.props.opened = false;
    const _size: SizeEnum = self.ux.props.size;
    const _mode: ModeEnum = self.ux.props.mode;

    setTimeout(() => {
      self.ux.props.cssClass = to;
      self.ux.childProps.cssClass = to2 + " " + _mode;
    }, _size === SizeEnum.small ? 300 : 150);

    setTimeout(() => {
      self.ux.props.opened = true;
      self.ux.props.size = toSize;
    }, _size === SizeEnum.small ? 400 : 300);

  }
  /**
   * Initializes break point observer
   */
  initializeBreakPointObserver() {
    const self = this;
    self.breakObserver.observe([
      Breakpoints.Web,
      Breakpoints.Medium
    ]).subscribe(result => {
      let event: IActionEmitter;
      if (result.matches) {
        event = new ActionEmitter(
          Actions_UI.Resize,
          MenuAction.Resize_Large);
      } else {
        event = new ActionEmitter(
          Actions_UI.Resize,
          MenuAction.Resize_Small);
      }
      self.dispatch.emit(event);
    });
  }
}