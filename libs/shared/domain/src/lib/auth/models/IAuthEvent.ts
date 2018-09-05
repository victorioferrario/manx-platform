import {UserIdentityRole } from './IdentityRoleEnum';
export interface IAuthEvent {
    role: UserIdentityRole;
    route: string;
}