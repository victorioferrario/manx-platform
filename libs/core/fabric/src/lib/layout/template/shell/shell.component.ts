import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserDataContext, IUserProfile } from '@hubx/domain';
import { ApplicationContext, ApplicationViewContext } from '@hubx/services';
@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit {
  constructor(
    public dbx: UserDataContext,
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext
  ) {
    const self = this;
  }
  ngAfterViewInit() { }
  ngOnInit() {
    const self = this;
    if (self.ctx.session.isAuthenticated) {
      self.dbx.getUserProfile().subscribe((result: IUserProfile) => {
        console.log(result.firstName);
      });
    }
  }
}
