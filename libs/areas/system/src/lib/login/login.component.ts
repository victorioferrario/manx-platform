import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthEvent } from '@manx/domain';
import { ActionEmitter, Actions_UI, ApplicationContext, ApplicationViewContext, AreaView, AuthAction, LocalStorageService, UserIdentityRole } from '@manx/services';

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
  subscription: any;
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

    self.username = new FormControl('', [Validators.required, Validators.email]);

    self.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
    self.vtx.activateView(AreaView.Login);
  }
  ngOnInit() {
    const self = this;
    self.password.setValue('Abcd123$');
    self.username.setValue('admin@hubx.com');
    self.subscription = self.ctx.identity.dispatch.subscribe(
      (event: IAuthEvent) => {
        const role = event.role;
        self.ctx.dispatch.emit(
          new ActionEmitter(Actions_UI.Auth, role === UserIdentityRole.Buyer ? AuthAction.Login_Buyer : AuthAction.Login_Vendor)
        );
        self.vtx.navigateUpdateView(event.route, role === UserIdentityRole.Buyer ? AreaView.Buyer : AreaView.Vendor);
      },
      (error: any) => {},
      (complete: any) => {}
    );
  }
  ngOnDestroy() {
    const self = this;
    if (self.subscription !== null) {
      self.subscription.unsubscribe();
    }
  }
  login(username: string, password: string) {
    const self = this;
    self.vtx.loading(true);
    if (this.username.valid && this.password.valid) {
      self.ctx.identity.login(username, password);
    } else {
      if (this.username.invalid) {
        console.warn('invalid');
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
        self.password.setValue('123456');
        self.username.setValue('it@hubx.com');
        break;
    }
  }
  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' : this.username.hasError('email') ? 'Not a valid email' : '';
  }
}

// const data = new DataItem('manny', 'mannyf@hubx.com', 40);
//         self.storage.storeOnLocalStorage(
//           data);
