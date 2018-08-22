import {Component, QueryList, ViewChildren, OnInit, ChangeDetectionStrategy , InjectionToken, Inject} from '@angular/core';
import { ApplicationContext , AuthAction,Actions_UI,
  ActionEmitter, } from "@hubx/services";
import { AnimationProvider} from '@hubx/fabric';
import {
  trigger,
  animate,
  style,
  group,
  query,
  transition
} from '@angular/animations';

  import {ComponentPortal, Portal, CdkPortal} from '@angular/cdk/portal';
  import {Direction, Directionality} from '@angular/cdk/bidi';
  import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
  import { LoaderComponent } from '@hubx/fabric';
  import {ComponentType,  ScrollStrategy, BlockScrollStrategy} from '@angular/cdk/overlay';

  export const DIALOG_SCROLL_STRATEGY =
    new InjectionToken<() => ScrollStrategy>('DialogScrollStrategy');


    export const routerTransition = trigger('routerTransition', [
        transition('* <=> *', [
          query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
            optional: true
          }),
          group([
            query(
              ':enter',
              [
                style({ transform: 'translateX(100%)' }),
                animate(
                  '0.5s ease-in-out',
                  style({ transform: 'translateX(0%)' })
                )
              ],
              { optional: true }
            ),
            query(
              ':leave',
              [
                style({ transform: 'translateX(0%)' }),
                animate(
                  '0.5s ease-in-out',
                  style({ transform: 'translateX(-100%)' })
                )
              ],
              { optional: true }
            )
          ])
        ])
      ]);
    

@Component({  
  selector: "app-buyer-main",
  animations: [ routerTransition ],
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyerMainComponent implements OnInit {
  constructor(private overlay: Overlay,private ctx:ApplicationContext, public animationTool: AnimationProvider) { }
   ngOnInit() {
    const self =this;   
    self.ctx.dispatch.emit( 
      new ActionEmitter(Actions_UI.Auth, AuthAction.LoggingInComplete));   
    }
   onHandleClick(arg:string){
    console.log(arg);
   }
}


