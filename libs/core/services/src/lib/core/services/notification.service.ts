import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INotification } from '../models';
@Injectable({
  providedIn: 'root'
})
export class NotificationApplicationService {
  private subject = new Subject();
  public notifyObservales = this.subject.asObservable();
  public dispatch(notification: INotification) {
    this.subject.next(notification);
  }
}
