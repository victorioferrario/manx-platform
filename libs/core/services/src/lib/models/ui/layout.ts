import { LoadProps, ILoadProps } from './load.props';
import { ISubHeaderProps, SubHeaderProps } from '../subheader';
import { ISideNavProps, SideNavProps, ModeEnum, SizeEnum } from '../sidenav';
import { SubHeaderConfiguration as ConfigSubHeader } from '../subheader';
import { MenuAction } from '../enums';
import { EventEmitter, Output } from '@angular/core';
import { ILayoutAction, LayoutAction} from './layout.actions';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { IViewState, ViewState, ViewStateEnum } from '../view';

export interface ILayoutProps {
  load: ILoadProps;
  props: ISideNavProps;
  childProps: ISubHeaderProps;
  viewState: IViewState;
  dispatch: EventEmitter<ILayoutAction>;
  transformMode() : void;
  transformSize(resizeTo:MenuAction): void;
}
export class Layout implements ILayoutProps {
  /**
   * @property: load
   * @type: ILoadProps
   */
  public load: ILoadProps;
  /**
   * @property: props
   * @type: ISideNavProps
   */
  public props: ISideNavProps;
  /**
   * @property: childProps
   * @type: ISubHeaderProps
   */
  public childProps: ISubHeaderProps;
  public viewState: IViewState;
  /**
   * Creates an instance of layout.
   * @param [autobind]
   */
  @Output()
  public dispatch: EventEmitter<ILayoutAction>;
  constructor(autobind: boolean = true) {
    this.load = new LoadProps();
    this.viewState = new ViewState();
    this.dispatch = new EventEmitter();
    this.props = new SideNavProps(autobind);
    this.childProps = new SubHeaderProps(autobind);           
  }  
  /**
   * Transforms mode
   * @param mode 
   */
  transformMode() {
    const self = this;    
    self.props.mode = (self.props.mode === ModeEnum.side 
      ? ModeEnum.over : ModeEnum.side);
    self.props.opened = self.props.mode === ModeEnum.side;
    self.childProps.cssClass = ConfigSubHeader.RootCssClass  + self.props.size + ' ' + self.props.mode;
  }
  /**
   * Transforms side menu
   * @param toCss
   * @param toCss2
   * @param toSize
   */
  transformSize(resizeTo:MenuAction) {
    const self = this;   
    const toSize = (resizeTo === MenuAction.Resize_Small
              ? SizeEnum.small
              : SizeEnum.large);
          const toCss = 'sidenav-root-' + toSize;
          const toCss2 = ConfigSubHeader.RootCssClass + toSize;
    self.props.opened = false;
    // 
    const _mode: ModeEnum = self.props.mode;
    const _size: SizeEnum = self.props.size;

    setTimeout(() => {
      self.props.cssClass = toCss;
      self.childProps.cssClass = toCss2 + ' ' + _mode;
    }, _size === SizeEnum.small ? 300 : 150);

    setTimeout(() => {
      self.props.opened = true;
      self.props.size = toSize;
    }, _size === SizeEnum.small ? 400 : 300);
  }
}
