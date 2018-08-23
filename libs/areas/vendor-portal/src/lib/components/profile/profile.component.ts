import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vendor-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  sectionText:string;
  sectionTitle:string;  
  constructor() { }
  ngOnInit() {
    this.sectionTitle = "Profile";
    this.sectionText = `The ${this.sectionTitle} works!`;
  }

}
