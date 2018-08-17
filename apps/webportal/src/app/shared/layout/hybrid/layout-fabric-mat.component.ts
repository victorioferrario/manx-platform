import { MediaMatcher } from '@angular/cdk/layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ApplicationContext, MenuAction, ActionEmitter, Actions_UI, SizeEnum } from '@hubx/services';

export const log = console.log ;

@Component({
  selector: 'app-fab-material',
  templateUrl: './layout-fabric-mat.component.html',
  styleUrls: ['./layout-fabric-mat.component.css']
})
export class LayoutHybridComponent implements OnDestroy {  
  constructor(
    public ctx: ApplicationContext) {
    const self = this;   
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