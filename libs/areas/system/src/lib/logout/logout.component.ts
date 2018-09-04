import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApplicationContext,
  Actions_UI,
  AuthAction,
  ActionEmitter
} from '@hubx/services';
@Component({
  selector: 'hubxsystem-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private ctx: ApplicationContext) {}
  ngOnInit() {    
    const self = this;
    self.ctx.dispatch.emit(
      new ActionEmitter(Actions_UI.Auth, AuthAction.Logout)
    );
    self.router.navigate(['/login']);
  }
}
