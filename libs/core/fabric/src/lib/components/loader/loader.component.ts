import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'fabric-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  animations: [
    trigger('enterLeave', [
      // Animate 1500ms with ease-in flow any element that 
      // transitions from void state (not present) to any other state
      transition('void => *', [
        style({ opacity: 0.2, transform: 'translateY(90%)' }),
        animate('500ms cubic-bezier(.45,.8,.85,1)',
          style({ opacity: 1, transform: 'translateY(0%)' }),
        )
      ]),
      transition('* => void', [
        animate('1500ms ease-in',
          // 'To' Style
          style({ opacity: 1, transform: 'translateX(100%)' }),
        )
      ])
    ]),
    trigger('changeState', [
      state('state1', style({
        opacity: 1,   
        bottom: 0,        
        height: '100%', 
        top:0, 
      })),
      state('state2', style({
        opacity: 0,        
        height: 0,
        bottom:0,      
        top:0, 
      })),
      transition('*=>state1', [       
        animate('500ms cubic-bezier(.45,.8,.85,1)',
          style({ opacity: 1,height: '100%', top:0 ,}))]),
      transition('*=>state2',
        animate('500ms cubic-bezier(.99,.8,.85,1)',
          // 'To' Style
          style({ opacity: 0, top:'-500px', height:5,}),
        ))
    ])
    // trigger('flyInOut', [
    //   state('in', style({opacity: 1, 
    //     transform: 'translateX(0)'})),
    //   transition('void => *', [
    //     style({
    //       opacity: 0,
    //       transform: 'translateX(-100%)'
    //     }),
    //     animate('0.2s ease-in')
    //   ]),
    //   transition('* => void', [
    //     animate('0.2s 0.1s ease-out', style({
    //       opacity: 0,
    //       transform: 'translateX(100%)'
    //     }))
    //   ])
    // ])
  ]
})
export class LoaderComponent implements OnInit {
  toState = 'state1';
  @Input() currentState;
  changeState(tState: any) {
    this.toState = tState;
  }
  ngOnInit() {
  }
}
