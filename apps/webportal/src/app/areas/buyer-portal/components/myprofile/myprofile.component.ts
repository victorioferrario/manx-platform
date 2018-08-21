import { Component, OnInit } from '@angular/core';
import { ApplicationContext } from '@hubx/services';
@Component({
  selector: 'app-buyer-profile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyProfileComponent implements OnInit {
  constructor(private ctx:ApplicationContext) { }
  ngOnInit() {}
}
