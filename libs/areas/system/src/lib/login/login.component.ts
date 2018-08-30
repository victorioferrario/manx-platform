import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationDataContext } from '@hubx/domain';
import {
  AuthService,
  IUserIdentity,
  UserIdentity,
  UserIdentityRole
} from '@hubx/services';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ApplicationContext,ApplicationViewContext, AreaView, BuyerViewSection,
  Actions_UI,
  AuthAction,
  ActionEmitter
} from '@hubx/services';
@Component({
  selector: 'hubxsystem-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  options: FormGroup;
  isLoggingIn: boolean;

  constructor(    
    public fb: FormBuilder,
    private router: Router,
    public ctx: ApplicationContext,
    public vtx:ApplicationViewContext, 
    private auth: AuthenticationDataContext
  ) {
    this.isLoggingIn = true;
    this.ctx.session.isLogginOut = false;
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });    
    const self = this;
    self.vtx.activateView(AreaView.Login);
    
  }

  ngOnInit() {}

  login(username: string, password: string) {
    const self = this;
    //ToDo: Move this all out of here.
    // const user = new UserIdentity();
    // self.router.navigate(['/buyer']);
    // user.authenticate(true, UserIdentityRole.Buyer);
    // user.name = 'Manny Buyer';
    if(self.auth.login(username, password)){
      console.log("AUTHENTICATRD")
    }    
  }
  loginVendor(username: string, password: string) {
    console.log(username, password);
    const self = this;
    //ToDo: Move this all out of here.
    const user = new UserIdentity();
    self.router.navigate(['/vendor']);
    user.authenticate(true, UserIdentityRole.Vendor);
    user.name = 'Manny Vendor';
    // self.auth.login(user, UserIdentityRole.Vendor);
    // self.vtx.activateView(AreaView.Vendor);
    // self.ctx.dispatch.emit(
    //   new ActionEmitter(Actions_UI.Auth, AuthAction.Login_Vendor)
    // );   
  }
}