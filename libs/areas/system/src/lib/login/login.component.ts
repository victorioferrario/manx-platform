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

import { AuthenticationService } from '@hubx/infrastructure';
import {
  AuthService,
  IUserIdentity,
  UserIdentity,
  UserIdentityRole
} from '@hubx/services';

import {
  ApplicationContext,ApplicationViewContext, AreaView,
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
    this.username.setValue("admin@hubx.com") ;
    this.password.setValue("Abcd123$") ;
    self.auth.dispatch.subscribe((event: any) => {
      const role =
        event.role === 'ADMIN'
          ? UserIdentityRole.Vendor
          : UserIdentityRole.Buyer;          
      const route = event.role === 'ADMIN' ? '/vendor' : '/buyer';
      const user = new UserIdentity();
      // do route
      console.log(route);

      self.router.navigate([route]);

      user.authenticate(true, role);
      user.name = 'Manny Vendor';
     // self.ctx.identity.authenticate(true, role);      
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
      self.vtx.navigate(route, role === UserIdentityRole.Buyer 
        ? BuyerViewSection.Dashboard : VendorViewSection.Dashboard);
    });
  }

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