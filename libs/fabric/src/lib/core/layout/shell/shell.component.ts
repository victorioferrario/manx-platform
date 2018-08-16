import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApplicationContext } from '@hubx/services';
@Component({
  selector: 'fabric-mat-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellMaterialComponent implements OnInit, AfterViewInit {
  @ViewChild('container') private _container;
  @ViewChild('sideNav') private _sideNav;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  showFiller = false;
  cssClass = "experiment";
  width = '400px;';
  changeCss() {
    this._sideNav.close();
    setTimeout(() => {
      this.cssClass = this.cssClass === "experiment" ? "experiment-small" : "experiment";
    }, this.cssClass === "experiment-small" ? 300 : 150);    
    setTimeout(() => {
      this._sideNav.open();
    },this.cssClass !== "experiment-small" ? 400 : 300);
  }
  constructor(public context: ApplicationContext) { }
  //   ngAfterViewInit(): void {
  //     const size = this.drawerState === 'open' ? 220 : 75;
  //     setTimeout(() => {
  //         this.sidenav.open();
  //         this.cd.detectChanges();
  //     }, size);
  // }
  ngAfterViewInit() {
    setTimeout(() => {
    }, 0);
    this._container._ngZone.onMicrotaskEmpty.subscribe(() => {
      this._container._updateStyles();
      this._container._changeDetectorRef.markForCheck();
      console.log("what is this")
    })
  };
  ngOnInit() { }
}
