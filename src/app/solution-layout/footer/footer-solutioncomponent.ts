import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-footer-solution",
  imports: [RouterModule],
  templateUrl: "./footer-solution.component.html",
  styleUrls: ["./footer-solution.component.scss"],
})
export class FooterSolutionComponent implements OnInit {
  isDark = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem("theme");
    this.isDark = savedTheme === "dark";
  }
}
