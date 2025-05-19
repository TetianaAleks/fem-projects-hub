import { Routes } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { SolutionLayoutComponent } from "./solution-layout/solution-layout.component";
import { SolutionListComponent } from "./main-layout/solution-list/solution-list.component";
import { ArticlePpreviewComponent } from "./solutions/article-preview-component/article-preview-component";
import { NewsletterSignUpComponent } from "./solutions/newsletter-sign-up/newsletter-sign-up";

const routeConfig: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: SolutionListComponent,
        title: "Tetiana | Frontend Mentor Solutions",
      },
    ],
  },
  {
    path: "",
    component: SolutionLayoutComponent,
    children: [
      {
        path: "article-preview-component",
        component: ArticlePpreviewComponent,
        title: "Article preview component",
      },
      {
        path: "newsletter-sign-up",
        component: NewsletterSignUpComponent,
        title: "Newsletter sign-up form with success message",
      },
    ],
  },
];
export default routeConfig;
