import { DashboardComponent } from './../../../../buyer-portal/src/lib/components/dashboard/dashboard.component';
import { BuyerViewSection, VendorViewSection } from '@hubx/services';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthenticationService, AUTH_CONFIG } from '@hubx/infrastructure';
import { UserIdentitySessionObject, UserIdentityRole } from '@hubx/services';

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
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext
  ) {
    const self = this;

    self.isLoggingIn = true;
    self.ctx.session.isLogginOut = false;

    self.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
    
    self.username = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    self.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });

    self.vtx.activateView(AreaView.Login);
  }

  ngOnInit() {
    const self = this;
    //
    this.password.setValue('Abcd123$');
    this.username.setValue('admin@hubx.com');
    //
    self.ctx.identity.dispatch.subscribe((event: any) => {
      const role = event.role ;
      self.vtx.activateView(
        role === UserIdentityRole.Buyer 
        ? AreaView.Buyer : AreaView.Vendor
      );
      self.ctx.dispatch.emit(
        new ActionEmitter(
          Actions_UI.Auth,
          role === UserIdentityRole.Buyer
            ? AuthAction.Login_Buyer
            : AuthAction.Login_Vendor
        )
      );       
      self.vtx.navigate(
        event.route, event.role === UserIdentityRole.Buyer
          ? BuyerViewSection.Dashboard
          : VendorViewSection.Dashboard
      );
    });    
  }
  login(username: string, password: string) {
    const self = this;
    self.vtx.loading(true);
    localStorage.clear();
    sessionStorage.clear();
    if (this.username.valid && this.password.valid) {
      self.ctx.identity.loginCommand(username, password);
    } else {
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
