import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService , IUserIdentity, UserIdentity, UserIdentityRole } from '@hubx/services';
import {
  ApplicationContext, Actions_UI,
  AuthAction,
  ActionEmitter
} from "@hubx/services";
@Component({
  selector: "hubxsystem-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  isLoggingIn: boolean;
  constructor(private router: Router, 
    public ctx: ApplicationContext, 
    private auth:AuthService) {
    this.isLoggingIn = true;
  }
  ngOnInit() { }

  login(username: string, password: string) {
    const self = this;
    //ToDo: Move this all out of here.
    const user = new UserIdentity();
    user.authenticate(true, UserIdentityRole.Buyer);
    user.name = "Manny Buyer";
    self.auth.login(user, UserIdentityRole.Buyer);   
    self.ctx.dispatch.emit(
      new ActionEmitter(Actions_UI.Auth, AuthAction.Login_Buyer));    
    self.router.navigate(["/buyer"]);
  }
  loginVendor(username: string, password: string) {
    console.log(username, password);
    const self = this;
     //ToDo: Move this all out of here.
     const user = new UserIdentity();
     user.authenticate(true, UserIdentityRole.Vendor);
     user.name = "Manny Vendor";
     self.auth.login(user, UserIdentityRole.Vendor);   
     self.ctx.dispatch.emit(
       new ActionEmitter(Actions_UI.Auth, AuthAction.Login_Vendor));        
    self.router.navigate(["/vendor"]);
  }
}
