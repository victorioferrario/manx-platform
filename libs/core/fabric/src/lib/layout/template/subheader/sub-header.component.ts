import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActionEmitter, Actions_UI, ApplicationContext, MenuAction } from '@manx/services';

@Component({
  selector: 'fabric-subheader',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnDestroy, OnInit {
  @Input() SubHeaderTitle: string;
  constructor(public ctx: ApplicationContext) {}
  onToggleMenu() {
    const self = this;
    self.ctx.dispatch.emit(new ActionEmitter(Actions_UI.Menu, MenuAction.State_Toggle));
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
