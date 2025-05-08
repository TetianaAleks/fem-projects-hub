import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FooterSolutionComponent } from "src/app/solution-layout/footer/footer-solutioncomponent";

@Component({
  selector: "app-article-preview-component",
  imports: [CommonModule, FooterSolutionComponent],
  templateUrl: "./article-preview-component.html",
  styleUrls: ["./article-preview-component.scss"],
})
export class ArticlePpreviewComponent {
  isShowShareActiveState: boolean = false;

  showShareActiveState() {
    this.isShowShareActiveState = !this.isShowShareActiveState;
  }
}
