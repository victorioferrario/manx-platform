import { DashboardComponent } from './../../../../buyer-portal/src/lib/components/dashboard/dashboard.component';
import { BuyerViewSection, VendorViewSection } from '@hubx/services';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy  
} from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthenticationService, AUTH_CONFIG } from '@hubx/infrastructure';
import {
  AuthService,
  IUserIdentity,
  UserIdentitySessionObject,
  UserIdentityRole
} from '@hubx/services';

import {
  ApplicationContext,
  ApplicationViewContext, 
  AreaView,
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

  options: FormGroup;
  isLoggingIn: boolean;
  username: FormControl;
  password: FormControl = new FormControl('', Validators.required);

  constructor(    
    public fb: FormBuilder,
    private router: Router,
    public ctx: ApplicationContext,
    public vtx:ApplicationViewContext, 
    private auth: AuthenticationService
  ) {
    this.isLoggingIn = true;
    this.ctx.session.isLogginOut = false;
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });       
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
    this.password.setValue("Abcd123$") ;
    this.username.setValue("admin@hubx.com") ;
    self.auth.dispatch.subscribe((event: any) => {     
       const role =
        event.role === 'ADMIN'
          ? UserIdentityRole.Vendor
          : UserIdentityRole.Buyer;    
      //           
      const route = event.role === 'ADMIN' ? '/vendor' : '/buyer';
      //ToDo: Remove this stuff.
      const user = new UserIdentitySessionObject();    
      //
      user.name = 'Manny Vendor';
      user.authenticate(true, role);      
      /**
       * TODO: Investigate this call, 
        this commented out stopped the entire app from routing.
      */ 
      self.ctx.identity.login(user, role); 
      //     
      self.vtx.activateView(
        role === UserIdentityRole.Buyer ? AreaView.Buyer : AreaView.Vendor
      );
      /**
       * /@question: why is this event dispatched.
       */
      self.ctx.dispatch.emit(
        new ActionEmitter(
          Actions_UI.Auth,
          role === UserIdentityRole.Buyer
            ? AuthAction.Login_Buyer
            : AuthAction.Login_Vendor)
      );
      /**
       * This is the ApplicationViewContext taking over routing.
       */
      self.vtx.navigate(route, 
        role === UserIdentityRole.Buyer  ? BuyerViewSection.Dashboard : VendorViewSection.Dashboard);
    });
  }

  login(username: string, password: string) {
    const self = this;
    localStorage.clear();
    sessionStorage.clear();   
    if(this.username.valid && this.password.valid){
      self.auth.login(
        username, password);
    }else{
      this.username.invalid;
    }
  }  
  getErrorMessage() {
    return this.username.hasError('required')
      ? 'You must enter a value'
      : this.username.hasError('email')
        ? 'Not a valid email'
        : '';
  }
}