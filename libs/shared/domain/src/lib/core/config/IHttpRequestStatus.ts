import { ObservableItem } from './IObservableItem';

export interface IHttpRequestStatus {
  message: ObservableItem<string>;
  isLoading: ObservableItem<boolean>;
  hasReceivedData: ObservableItem<boolean>;
}
export class HttpRequestStatus implements IHttpRequestStatus {
  message: ObservableItem<string> = new ObservableItem<string>('None');
  isLoading: ObservableItem<boolean> = new ObservableItem<boolean>(true);
  hasReceivedData: ObservableItem<boolean> = new ObservableItem<boolean>(false);
}

// { IHttpRequestStatus, HttpRequestStatus } from './IHttpRequestStatus'
