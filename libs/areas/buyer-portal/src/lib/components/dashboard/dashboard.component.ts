import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { DataEmitter, DataEvent, GetItemsResponse, IItem } from '@manx/domain';
import { ActionEmitter, Actions_UI, ApplicationContext, ApplicationViewContext, DataAction } from '@manx/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'buyer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  openItemDetails: boolean;
  sectionText: string;
  sectionTitle: string;
  isLoaded: BehaviorSubject<boolean>;
  isLoading: BehaviorSubject<boolean>;
  welcomeMessage: BehaviorSubject<string>;
  list: BehaviorSubject<IItem[]>;
  paginationControl: any;
  subscription: any;
  constructor(public ctx: ApplicationContext, public vtx: ApplicationViewContext) {
    const self = this;
    self.welcomeMessage = new BehaviorSubject<string>('');
    self.welcomeMessage.asObservable();
    //
    self.list = new BehaviorSubject<IItem[]>(null);
    self.list.asObservable();
    //
    self.isLoaded = new BehaviorSubject<boolean>(false);
    self.isLoaded.asObservable();
    //
    self.isLoading = new BehaviorSubject<boolean>(true);
    self.isLoading.asObservable();
  }
  trackByFn(index: number, item: IItem) {
    return item.id;
  }

  ngOnInit() {
    const self = this;
    self.openItemDetails = true;
    self.vtx.loading(false);
    self.sectionTitle = 'Dashboard';
    self.sectionText = `The ${this.sectionTitle} works!`;
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Data, DataAction.LoadItems));
  }
  ngAfterViewInit() {
    const self = this;
    self.subscription = self.ctx.dataContext.items.dispatch.subscribe((result: DataEmitter) => {
      switch (result.action) {
        case DataEvent.Loading:
          self.isLoaded.next(false);
          self.isLoading.next(true);
          break;
        case DataEvent.ResultForDashboard:
          const ds = result.payload.results.data as GetItemsResponse;
          self.isLoading.next(false);
          self.isLoaded.next(true);
          self.list.next(ds.items);
          console.log(ds.items);
          break;
      }
    });
  }
  ngOnDestroy() {
    const self = this;
    if (self.subscription !== null) {
      self.subscription.unsubscribe();
      console.log('kill', self.subscription);
    }
  }
  ngDestroy() {}
}
