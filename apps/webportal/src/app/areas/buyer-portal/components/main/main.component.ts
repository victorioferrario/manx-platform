import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ApplicationContext,
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
  constructor(private ctx: ApplicationContext, private _router: Router) {
    const self = this;
    // self._router.events.subscribe((event: Event) => {
    //   self.navigationInterceptor(event);
    // });
  }
  ngOnInit() {
    const self = this;
    self.ctx.dispatch.emit(
      new ActionEmitter(Actions_UI.Auth, AuthAction.LoggingInComplete)
    );
  }
  // navigationInterceptor(event: Event) {
  //   console.log(event);
  // }
}
