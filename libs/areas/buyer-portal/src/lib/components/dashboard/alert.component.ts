import { Component,Input} from '@angular/core';
@Component({
    selector: 'buyer-alert',
    template: `
      {{type}}
    `,
  })
  export class AlertComponent {
    @Input() type = "success";
  }
  