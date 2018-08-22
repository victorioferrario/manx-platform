import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'buyer-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyaccountComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
