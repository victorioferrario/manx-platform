import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActionEmitter, Actions_UI, ApplicationContext, ApplicationViewContext, AuthAction } from '@manx/services';

@Component({
  selector: 'app-buyer-main',
  template: `<fabric-view maincontent>          
  <fabric-content>
  
      <router-outlet></router-outlet>   
  </fabric-content>     
</fabric-view>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyerMainComponent implements OnInit {
  constructor(private ctx: ApplicationContext, public vtx: ApplicationViewContext) {}
  ngOnInit() {
    const self = this;
    self.vtx.loading(false);
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Auth, AuthAction.LoggingInComplete));
  }
}
