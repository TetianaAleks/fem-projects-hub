import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-solution-layout",
  imports: [RouterModule],
  templateUrl: "./solution-layout.component.html",
  styleUrls: ["./solution-layout.component.scss"],
})
export class SolutionLayoutComponent implements OnInit {
  isDark = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem("theme");
    this.isDark = savedTheme === "dark";
  }
}
