import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  ApplicationContext
} from '@hubx/services';

@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit {
 
  constructor(    
    public ctx: ApplicationContext
  ) {
    const self = this;
  }

 
  ngAfterViewInit() {}
  ngOnInit() {}
}

