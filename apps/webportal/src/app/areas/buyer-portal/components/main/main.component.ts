import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ApplicationContext,ApplicationViewContext,
  AuthAction,
  Actions_UI,
  ActionEmitter
} from '@hubx/services';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
@Component({
  selector: 'app-buyer-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyerMainComponent implements OnInit {
  constructor(private ctx: ApplicationContext,
    public vtx: ApplicationViewContext) {
    const self = this;
  }
  ngOnInit() {
    const self = this;
    self.vtx.loading(false);
    self.ctx.dispatch.emit(
      new ActionEmitter(
        Actions_UI.Auth,
        AuthAction.LoggingInComplete)
    );
  }
}
