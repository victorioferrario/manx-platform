import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import {
  ApplicationContext, Actions_UI,
  AuthAction,
  ActionEmitter,
} from "@hubx/services";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  isLoggingIn: boolean;
  constructor(private router: Router, public ctx: ApplicationContext) {
    this.isLoggingIn = true;
  }
  ngOnInit() { }

  login(username: string, password: string) {
    const self = this;
    self.ctx.session.isLoading = true;
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Auth, AuthAction.Login));
    self.router.navigate(["/buyer"]);
  }
  loginVendor(username: string, password: string) {
    console.log(username, password);
    const self = this;
    self.isLoggingIn = true;
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Auth, AuthAction.Login));
    self.router.navigate(["/vendor"]);
  }
}
