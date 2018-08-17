import { MediaMatcher } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ApplicationContext, MenuAction, ActionEmitter, Actions_UI, SizeEnum } from '@hubx/services';
@Component({
  selector: 'app-fab-material',
  templateUrl: './layout-fabric-mat.component.html',
  styleUrls: ['./layout-fabric-mat.component.css']
})
export class LayoutHybridComponent implements OnDestroy {  
  constructor(
    public ctx: ApplicationContext, private breakpointObserver: BreakpointObserver) {
    const self = this;
    breakpointObserver.observe(
      [ Breakpoints.Web,
        Breakpoints.Medium
      ]).subscribe(result => {
        if (result.matches) {
          self.activateWebLayout();
        } else {
          self.activateMobileLayout();
        }
      });
  }
  /**
   * @method: Automatic on breakpoints
   * Activates mobile layout
   */
  activateMobileLayout() {
    const self = this;
    const event = new ActionEmitter(
      Actions_UI.Resize,
      MenuAction.Resize_Small);
    self.ctx.dispatch.emit(event);
  }
  activateWebLayout() {
    const self = this;
    const event = new ActionEmitter(
      Actions_UI.Resize,
      MenuAction.Resize_Large);
    self.ctx.dispatch.emit(event);
  }
  /**
   * @method: user input required
   * Determines whether toggle on
   */
  onToggle() {
    const self = this;
    const event = new ActionEmitter(
      Actions_UI.Menu,
      MenuAction.State_Toggle);
    self.ctx.dispatch.emit(event);
  }
  onSwitchMode() {
    const self = this;
    const event = new ActionEmitter(
      Actions_UI.Mode,
      MenuAction.SwitchMode);
    self.ctx.dispatch.emit(event);
  }
  ngOnDestroy(): void {}
}