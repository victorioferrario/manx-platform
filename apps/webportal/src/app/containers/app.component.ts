import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationContext } from '@manx/services';

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
    console.log(this.screenHeight);
  }
  constructor(private router: Router, private ctx: ApplicationContext) {
    const self = this;
    self.onResize();
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
