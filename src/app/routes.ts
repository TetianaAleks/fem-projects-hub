import { Routes } from "@angular/router";
import { HomeComponent } from "./main-layout/home/home.component";
import { QrCodeComponent } from "./solutions/qr-code-component/qr-code.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { SolutionLayoutComponent } from "./solution-layout/solution-layout.component";
import { BlogPreviewCardComponent } from "./solutions/blog-preview-card/blog-preview-card";
import { SocialLinksProfileComponent } from "./solutions/social-links-profile/social-links-profile";
import { RecipePageComponent } from "./solutions/recipe-page/recipe-page";
import { SolutionListComponent } from "./main-layout/solution-list/solution-list.component";
import { FourCardFeatureSectionComponent } from "./solutions/four-card-feature-section/four-card-feature-section";
import { TestimonialsGridSectionComponent } from "./solutions/testimonials-grid-section/testimonials-grid-section";
import { ProductPreviewCardComponent } from "./solutions/product-preview-card/product-preview-card";

const routeConfig: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      /*{
        path: "",
        component: HomeComponent,
        title: "Tetiana | Frontend Mentor Solutions",
      },*/
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
        path: "qr-code-component",
        component: QrCodeComponent,
        title: "QR code component",
      },
      {
        path: "blog-preview-card",
        component: BlogPreviewCardComponent,
        title: "Blog preview card",
      },
      {
        path: "social-links-profile",
        component: SocialLinksProfileComponent,
        title: "Social links profile",
      },
      {
        path: "recipe-page",
        component: RecipePageComponent,
        title: "Recipe page",
      },
      {
        path: "four-card-feature-section",
        component: FourCardFeatureSectionComponent,
        title: "Four card feature section",
      },
      {
        path: "testimonials-grid-section",
        component: TestimonialsGridSectionComponent,
        title: "Testimonials grid section",
      },
      {
        path: "product-preview-card",
        component: ProductPreviewCardComponent,
        title: "Product preview card component",
      },
    ],
  },
];
export default routeConfig;
