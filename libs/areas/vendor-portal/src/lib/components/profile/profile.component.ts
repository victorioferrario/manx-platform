import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vendor-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
