import { Component } from "@angular/core";
import { Solution } from "../../interfaces/solution";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  /*
  stackOptions: string[] = [];
  selectedStack: string | null = null;
  displayedSolutions: Solution[] = [];

  ngOnInit() {
    
    const allStacks = this.solutionList.flatMap((s) => s.stack);
    this.stackOptions = Array.from(new Set(allStacks));
   
    this.displayedSolutions = [...this.solutionList];
  }

  filterStack(stack: string | null) {
    this.selectedStack = stack;
    if (!stack) {
      this.displayedSolutions = [...this.solutionList];
    } else {
      this.displayedSolutions = this.solutionList.filter((sol) =>
        sol.stack.includes(stack)
      );
    }
  }
  */
}
