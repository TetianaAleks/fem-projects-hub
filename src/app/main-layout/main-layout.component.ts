import { Component, Renderer2 } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: "app-main-layout",
  imports: [RouterModule, NavbarComponent],
  templateUrl: "./main-layout.component.html",
  styleUrl: "./main-layout.component.css",
})
export class MainLayoutComponent {
}
