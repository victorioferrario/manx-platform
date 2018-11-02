import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataEmitter, DataEvent, IPaginationRequest, IRequest } from '@manx/domain';
import { ActionEmitter, Actions_UI, ApplicationContext, DataAction, DataPayload } from '@manx/services';
import { BehaviorSubject } from 'rxjs';

export interface IPageIndex {
  index: number;
  value: number;
  active: boolean;
}

@Component({
  selector: 'buyer-paginator',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, AfterViewInit {
  public totalCount: BehaviorSubject<number>;
  public totalPages: BehaviorSubject<number>;
  public currentPage: BehaviorSubject<number>;
  public hasPaging: BehaviorSubject<boolean>;
  public isLoading: BehaviorSubject<boolean>;
  requestHistory: IRequest;
  public pageButtons: BehaviorSubject<IPageIndex[]>;
  constructor(public ctx: ApplicationContext) {}
  ngOnInit() {
    const self = this;
    //
    self.totalCount = new BehaviorSubject<number>(0);
    self.totalCount.asObservable();
    //
    self.totalPages = new BehaviorSubject<number>(0);
    self.totalPages.asObservable();
    //
    self.currentPage = new BehaviorSubject<number>(0);
    self.currentPage.asObservable();
    //
    self.hasPaging = new BehaviorSubject<boolean>(false);
    self.hasPaging.asObservable();
    //
    self.pageButtons = new BehaviorSubject<IPageIndex[]>(null);
    self.pageButtons.asObservable();
    //
    self.isLoading = new BehaviorSubject<boolean>(true);
    self.isLoading.asObservable();
    //
  }

  ngAfterViewInit() {
    const self = this;
    self.ctx.dataContext.items.dispatch.subscribe((result: DataEmitter) => {
      switch (result.action) {
        case DataEvent.Loading:
          self.isLoading.next(true);
          break;
        case DataEvent.ResultForDashboard:
          self.isLoading.next(false);
          const basic: IPaginationRequest = {
            pageSize: 100,
            pageNumber: 1
          };
          self.requestHistory = result.payload.results.data.requestHistory !== undefined ? result.payload.results.data.requestHistory : basic;
          if (self.requestHistory.pagination === null) {
            self.requestHistory.pagination = basic;
          }
          self.totalCount.next(result.payload.pagination.totalCount);
          if (result.payload.pagination.totalPages > 1) {
            const temp = [];
            for (let k = 0; k < result.payload.pagination.totalPages; k++) {
              const j = k + 1;
              temp[k] = { index: j, value: j, active: result.payload.pagination.currentPage === j };
            }
            self.pageButtons.next(temp);
          } else {
          }
          self.totalPages.next(result.payload.pagination.totalPages);
          self.hasPaging.next(result.payload.pagination.totalPages > 1);
          self.currentPage.next(result.payload.pagination.currentPage);
          break;
      }
    });
  }
  pageNext(arg) {
    const self = this;
    if (arg !== undefined) {
      const action = new ActionEmitter(Actions_UI.Data, DataAction.PageItems);
      if (self.requestHistory !== null) {
        self.requestHistory.pagination.pageNumber = arg;
        action.payload = new DataPayload(self.requestHistory.savedFilter, self.requestHistory.pagination);
      }
      self.ctx.dispatch.emit(action);
    }
  }
}
