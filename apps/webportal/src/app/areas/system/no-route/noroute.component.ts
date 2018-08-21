import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-error",
  templateUrl: "./noroute.component.html",
  styleUrls: ["./noroute.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoRouteComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    console.log("Clear data");
    //this.router.navigate(["/login"]);
  } 
}
