import {
  OnInit,
  Component,  
  HostListener,  
  ViewContainerRef
} from '@angular/core';
import { Router } from '@angular/router';

import {
  ApplicationRoutingService
} from '../app-routing.service';

import {
  ApplicationContext  
} from '@hubx/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webportal';
  style: string;
  screenHeight: number;
  screenWidth: number;
  toState = 'state1';
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.style = 'height:' + this.screenHeight + 'px;';
  }
  constructor(
    private router: Router,
    private ctx: ApplicationContext) {
    const self = this;
    this.onResize();
  }
  changeState(state: any) {
    this.toState = this.toState === 'state1' ? 'state2' : 'state1';
  }
  ngOnInit() {
    if (!this.ctx.session.isAuthenticated) {
      this.router.navigate(['login']);
    }
  }
}
