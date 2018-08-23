import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "hubxsystem-error",
  templateUrl: "./route-error.component.html",
  styleUrls: ["./route-error.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteErrorComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    console.log("Clear data");
    //this.router.navigate(["/login"]);
  } 
}
