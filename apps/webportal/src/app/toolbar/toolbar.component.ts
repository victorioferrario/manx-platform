import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subject, Observable } from 'rxjs';
import { LayoutService } from '@hubx/services';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnDestroy {
  isSideNavOpen: boolean;
  sidesetting = "side";
  mobileQuery: MediaQueryList;
  layoutSidbarCSS = "sidenav-ui";
  layoutSubject: Subject<string>;
  layoutSizeObservale: Observable<string>;
  // 
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public layoutService: LayoutService) {
    const self = this;
    self.sidesetting = "side";
    self.isSideNavOpen = true;
    self.layoutSubject = new Subject();
    self.layoutSubject.subscribe((data) => {
      self.layoutSidbarCSS = data;
    });
    self.layoutSizeObservale = new Observable((observer) => {
      self.layoutSidbarCSS = "sidenav-ui"
      observer.next("sidenav-ui");
    });
  }
  //
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);


  onToggle() {
    const self = this;
    self.isSideNavOpen = self.isSideNavOpen ? false: true;
  }
  ngOnDestroy(): void {
    //  this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
