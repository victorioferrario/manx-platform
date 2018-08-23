import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INotification } from './models/index';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject();
  notifications$ = this.subject.asObservable();
  dispatch(notification: INotification) {
    this.subject.next(notification);
  }
}
