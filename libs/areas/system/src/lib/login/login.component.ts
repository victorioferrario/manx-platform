import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostListener,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, AUTH_CONFIG } from '@hubx/infrastructure';
import {
  AuthService,
  IUserIdentity,
  UserIdentity,
  UserIdentityRole
} from '@hubx/services';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {
  ApplicationContext,
  ApplicationViewContext,
  AreaView,
  BuyerViewSection,
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
  username: FormControl;
  password: FormControl = new FormControl('', Validators.required);
  options: FormGroup;
  email: string;

  isLoggingIn: boolean;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext,
    private auth: AuthenticationService
  ) {

    this.username = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
    this.isLoggingIn = true;
    this.ctx.session.isLogginOut = false;
    const self = this;
    self.vtx.activateView(AreaView.Login);
  }

  ngOnInit() {
    const self = this;
    this.username.setValue("admin@hubx.com") ;
    this.password.setValue("Abcd123$") ;
    self.auth.dispatch.subscribe((event: any) => {
      const role =
        event.role === 'ADMIN'
          ? UserIdentityRole.Vendor
          : UserIdentityRole.Buyer;
          
      const route = event.role === 'ADMIN' ? '/vendor' : '/buyer';
      const user = new UserIdentity();
      self.router.navigate([route]);
      user.authenticate(true, role);
      user.name = 'Manny Vendor';
      self.ctx.identity.login(user, role);      
      self.vtx.activateView(
        role === UserIdentityRole.Buyer ? AreaView.Buyer : AreaView.Vendor
      );
      self.ctx.dispatch.emit(
        new ActionEmitter(
          Actions_UI.Auth,
          role === UserIdentityRole.Buyer
            ? AuthAction.Login_Buyer
            : AuthAction.Login_Vendor
        )
      );
    });
  }

  login(username: string, password: string) {
    const self = this;
    localStorage.clear();
    sessionStorage.clear();
   if(this.username.valid && this.password.valid){
    self.auth.login(username, password);
   }else{
     this.username.invalid;
   }
  }
  loginVendor(username: string, password: string) {
    console.log(username, password);
    const self = this;
    //ToDo: Move this all out of here.
    const user = new UserIdentity();
    user.authenticate(true, UserIdentityRole.Vendor);
    user.name = 'Manny Vendor';
    self.ctx.identity.login(user, UserIdentityRole.Vendor);
    self.router.navigate(['/vendor']);
    // self.vtx.activateView(AreaView.Vendor);
    // self.ctx.dispatch.emit(
    //   new ActionEmitter(Actions_UI.Auth, AuthAction.Login_Vendor)
    // );
  }
  getErrorMessage() {
    return this.username.hasError('required')
      ? 'You must enter a value'
      : this.username.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}
