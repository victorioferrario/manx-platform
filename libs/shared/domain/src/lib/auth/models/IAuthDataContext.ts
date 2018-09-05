export interface IAuthDataContext {
    login(email: string, password: string): boolean;
}