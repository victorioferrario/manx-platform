import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "hubxsystem-notfound",
  templateUrl: "./route-notfound.component.html",
  styleUrls: ["./route-notfound.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteNotFoundComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {   
   
  } 
}
