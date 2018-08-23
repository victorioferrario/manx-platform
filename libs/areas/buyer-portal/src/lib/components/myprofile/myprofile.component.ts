import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buyer-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  sectionText: string;
  sectionTitle: string;
  constructor() { }
  ngOnInit() {
    this.sectionTitle = "Shopping Cart";
    this.sectionText = `The ${this.sectionTitle} works!`;
  }
}
