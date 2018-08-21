import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  Input
} from '@angular/core';

import { Router } from '@angular/router';
import {
  ApplicationContext,
  Actions_UI,
  MenuAction,
  ActionEmitter,
  SizeEnum
} from '@hubx/services';
@Component({
  selector: 'fabric-dev-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class DevToolbarComponent implements OnDestroy, OnInit {
  @Input() SubHeaderTitle: string;
  constructor(private router: Router, public ctx: ApplicationContext) {
    
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  onChangeMode(value: any) {
    this.onSwitchMode();
  }
  onChangeSize(value: any) {
    this.onSwitchSize();
  }
  onToggleMenu() {
    const self = this;  
    self.ctx.dispatch.emit(
      new ActionEmitter(Actions_UI.Menu, MenuAction.State_Toggle));
  }
  onLogout(){    
    this.router.navigate(["/logout"]);   
  }
  onSwitchMode() {
    const self = this;  
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Mode, MenuAction.SwitchMode));
  }
  onSwitchSize() {
    const self = this;
    const event = new ActionEmitter(
      Actions_UI.Resize,
      self.ctx.ux.props.size === SizeEnum.large
        ? MenuAction.Resize_Small
        : MenuAction.Resize_Large
    );
    self.ctx.dispatch.emit(event);
  }
}
