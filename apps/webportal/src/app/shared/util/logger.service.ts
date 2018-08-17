import {Injectable, Provider} from '@angular/core';
@Injectable()
export class LoggerService {
  static log(msg: string): void {
    console.log(msg);
  }
  static error(msg: string, obj = {}): void {
    console.error(msg, obj);
  }
}
export const LOGGING_PROVIDERS = {
  provide: LoggerService
}