import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { IAuthEvent } from '@hubx/domain';
import { BuyerViewSection, VendorViewSection } from '@hubx/services';

import { Validators } from '@angular/forms';
import { UserIdentityRole } from '@hubx/services';
import { LocalStorageService } from '@hubx/services';

import {
  ApplicationContext,
  ApplicationViewContext,
  AreaView,
  Actions_UI,
  AuthAction,
  ActionEmitter
} from '@hubx/services';

export class DataItem {
  constructor(public name: string, public email: string, public age: number) {}
}

@Component({
  selector: 'hubxsystem-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  hide: boolean;
  options: FormGroup;
  username: FormControl;
  password: FormControl = new FormControl('', Validators.required);

  constructor(
    public fb: FormBuilder,
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext,
    public storage: LocalStorageService<DataItem>
  ) {

    const self = this;
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
    self.password.setValue('Abcd123$');
    self.username.setValue('admin@hubx.com');
    //RROR Error: object unsubscribed
    self.ctx.identity.dispatch.subscribe((event: IAuthEvent) => {
        const role = event.role;
        self.ctx.dispatch.emit(
          new ActionEmitter(
            Actions_UI.Auth,
            role === UserIdentityRole.Buyer
              ? AuthAction.Login_Buyer
              : AuthAction.Login_Vendor
          )
        );
        self.vtx.navigateUpdateView(
          event.route,
          role === UserIdentityRole.Buyer ? AreaView.Buyer : AreaView.Vendor
        );
      },
      (error: any) => {},
      (complete: any) => {
        console.log('complete', complete);
      }
    );
  }


  ngOnDestroy() {
    console.warn('will remove listeners');
    const self = this;
  }
  login(username: string, password: string) {
    const self = this;
    self.vtx.loading(true);
    localStorage.clear();
    sessionStorage.clear();
    if (this.username.valid && this.password.valid) {
      self.ctx.identity.login(username, password);
    } else {
      if (this.username.invalid) {
        console.log('no good');
      }
    }
  }
  changeRole(eventArg: string) {
    const self = this;
    switch (eventArg) {
      case 'Buyer':
        self.password.setValue('Abcd123$');
        self.username.setValue('motty@hubx.com');
        break;
      case 'Seller':
        self.password.setValue('123456');
        self.username.setValue('vivianne@laptopplaza.com');
        break;
      case 'Admin':
        self.password.setValue('Abcd123$');
        self.username.setValue('admin@hubx.com');
        break;
      case 'SuperAdmin':
        self.password.setValue('Icsly5657');
        self.username.setValue('Pattikchen@gmail.com');
        break;
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


// const data = new DataItem('manny', 'mannyf@hubx.com', 40);
//         self.storage.storeOnLocalStorage(
//           data);
