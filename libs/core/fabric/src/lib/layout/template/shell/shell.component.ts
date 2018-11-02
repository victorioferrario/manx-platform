import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserDataContext } from '@manx/domain';
import { ApplicationContext, ApplicationViewContext } from '@manx/services';

@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit {
  constructor(public dbx: UserDataContext, public ctx: ApplicationContext, public vtx: ApplicationViewContext) {
    const self = this;
  }
  ngAfterViewInit() {}
  ngOnInit() {
    const self = this;
    if (self.ctx.session.isAuthenticated) {
    }
    self.ctx.trackerManager.list.itemsObs.subscribe((data: any) => {
      console.log(data);
    });
  }
}
