import { UserIdentityRole } from '../enums';
export interface IUserIdentity {
  name?: string;
  userName: string;
  password: string;
  role?: UserIdentityRole;
  isAuthenticated: boolean;
  authenticate(authenticated: boolean, role: UserIdentityRole): boolean;
}
export class UserIdentity implements IUserIdentity {
  name: string;
  userName: string;
  password: string;
  role: UserIdentityRole;
  isAuthenticated: boolean;
  constructor() {
    const self = this;
    self.isAuthenticated = false;
    self.role = UserIdentityRole.Unknown;
  }
  authenticate(authenticated: boolean, role: UserIdentityRole) {
    const self = this;
    self.role = role;
    self.isAuthenticated = authenticated;
    return self.isAuthenticated;
  }
}
// export { UserIdentityRole } from './lib/models/enum';
// export { IUserIdentity, UserIdentity , } from
