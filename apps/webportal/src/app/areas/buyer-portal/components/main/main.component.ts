import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ApplicationContext , AuthAction,Actions_UI,
  ActionEmitter, } from "@hubx/services";

@Component({
  selector: "app-buyer-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyerMainComponent implements OnInit {

  constructor(private ctx:ApplicationContext) { }
  ngOnInit() {

    const self =this;
    self.ctx.dispatch.emit( 
      new ActionEmitter(Actions_UI.Auth, AuthAction.LoggingInComplete));   
    
   }
}
