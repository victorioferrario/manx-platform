import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionEmitter, Actions_UI, ApplicationContext, AuthAction } from '@manx/services';

@Component({
  selector: 'manxsystem-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private ctx: ApplicationContext) {}
  ngOnInit() {
    const self = this;
    self.ctx.session.logout();
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Auth, AuthAction.Logout));
    self.router.navigate(['/login']);
  }
}
