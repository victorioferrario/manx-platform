export interface IAuthDataContext {
    getAccessToken(): string ;
    isAuthenticated(): boolean;    
    login(email: string, password: string): boolean;    
}