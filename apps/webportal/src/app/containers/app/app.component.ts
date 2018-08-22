import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApplicationContext,
  Actions_UI,
  MenuAction,
  ActionEmitter,
  SizeEnum
} from '@hubx/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webportal';
  constructor(private router: Router, private ctx: ApplicationContext) {
    const self = this;
  }
  toState = 'state1';
  changeState(state: any) {
    this.toState = this.toState ==="state1" ? "state2":"state1";
  }
  ngOnInit() {
    if (!this.ctx.session.isAuthenticated) {
    this.router.navigate(['login']);
    }
  }
}
