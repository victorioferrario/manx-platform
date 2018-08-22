import { INotification } from './INotification';
import {
  NotificationTypeEnum,
  NotificationActionEnum
} from './NotificationEnums';
export class Notification implements INotification {
  type: NotificationTypeEnum;
  action: NotificationActionEnum;
  constructor() {}
}
