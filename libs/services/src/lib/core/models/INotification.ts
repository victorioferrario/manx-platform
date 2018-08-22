import {
  NotificationTypeEnum,
  NotificationActionEnum
} from './NotificationEnums';
export interface INotification {
  type: NotificationTypeEnum;
  action: NotificationActionEnum;
}
