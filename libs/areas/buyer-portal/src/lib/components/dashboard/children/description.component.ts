import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IItem } from '@manx/domain';

@Component({
  selector: 'buyer-item-description',
  template: `<div (click)="openModal()" 
            (mouseenter)="minimizeDetailsHover()" 
            (mouseleave)="!minimizeDetailsHover()" class="click-helper">
            {{Item.description}}
            <span class="copy-number">
                {{Item.partNumber}}
            </span>          
            </div>`,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid black;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  Item: IItem;
  ngOnInit() {}
  ngOnDestroy() {}
  ngAfterViewInit() {}
  openModal() {}
  minimizeDetailsHover() {}
}
