import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Solution } from "src/app/interfaces/solution";
import { RouterModule } from "@angular/router";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from "@angular/animations";

@Component({
  selector: "app-solution-list",
  imports: [CommonModule, RouterModule],
  templateUrl: "./solution-list.component.html",
  styleUrl: "./solution-list.component.css",
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(30px)" }),
        animate(
          "800ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
    trigger("listAnimation", [
      transition(":enter", [
        query(
          ".project-card",
          [
            style({ opacity: 0, transform: "translateY(30px)" }),
            stagger(200, [
              animate(
                "800ms ease-out",
                style({ opacity: 1, transform: "translateY(0)" })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class SolutionListComponent {
  /*@Input() solutions!: Solution[];*/

  solutionList: Solution[] = [
    {
      id: 14,
      name: "3-column preview card component",
      description:
        "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
      img: "assets/previews/12-3-column-preview-card-component.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/12-3-column-preview-card-component/",
      linkFM:
        "https://www.frontendmentor.io/solutions/3-column-preview-card-component-XI_BZPMTpj",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/12-3-column-preview-card-component",
      stack: ["html", "css"],
    },
    {
      id: 13,
      name: "Stats preview card component",
      description:
        "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
      img: "assets/previews/11-stats-preview-card-component.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/11-stats-preview-card-component/",
      linkFM:
        "https://www.frontendmentor.io/solutions/stats-preview-card-component-bUfGfERcTN",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/11-stats-preview-card-component",
      stack: ["html", "css"],
    },
    {
      id: 12,
      name: "Order summary component",
      description:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      img: "assets/previews/10-order-summary-component.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/10-order-summary-component/",
      linkFM:
        "https://www.frontendmentor.io/solutions/order-summary-component-joJnJY4LIF",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/10-order-summary-component",
      stack: ["html", "css"],
    },
    {
      id: 11,
      name: "Results summary component",
      description:
        "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.",
      img: "assets/previews/09-results-summary-component.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/09-results-summary-component/",
      linkFM:
        "https://www.frontendmentor.io/solutions/results-summary-component-mLArmaFhfO",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/09-results-summary-component",
      stack: ["html", "css"],
    },
    {
      id: 10,
      name: "NFT preview card component",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      img: "assets/previews/08-nft-preview-card-component.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/08-nft-preview-card-component/",
      linkFM:
        "https://www.frontendmentor.io/solutions/nft-preview-card-component-PTFxtGZE4b",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/08-nft-preview-card-component",
      stack: ["html", "css"],
    },
    {
      id: 9,
      name: "Newsletter sign-up form with success message",
      description:
        "This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.",
      img: "assets/newsletter-sign-up/preview.png",
      link: "/newsletter-sign-up",
      linkFM:
        "https://www.frontendmentor.io/solutions/responsive-newsletter-form-with-validation-and-success-message-7ym3SJcOS7",
      linkGitHub:
        "https://github.com/TetianaAleks/fem-projects-hub/tree/main/src/app/solutions/newsletter-sign-up",
      stack: ["html", "scss", "ts"],
    },
    {
      id: 8,
      name: "Article preview component",
      description:
        "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
      img: "assets/article-preview-component/preview.png",
      link: "/article-preview-component",
      linkFM:
        "https://www.frontendmentor.io/solutions/article-preview-component-with-scss-styling-and-share-animation-YZHQS8EFQN",
      linkGitHub:
        "https://github.com/TetianaAleks/fem-projects-hub/tree/main/src/app/solutions/article-preview-component",
      stack: ["html", "scss", "ts"],
    },
    {
      id: 7,
      name: "Product preview card component",
      description:
        "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.",
      img: "assets/previews/05-product-preview-card-component.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/05-product-preview-card-component/",
      linkFM:
        "https://www.frontendmentor.io/solutions/product-preview-card-html5-scss-flexbox-oJUKnH03kG",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/05-product-preview-card-component",
      stack: ["html", "css"],
    },
    {
      id: 6,
      name: "Testimonials grid section",
      description:
        "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      img: "assets/previews/07-testimonials-grid-section.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/07-testimonials-grid-section/",
      linkFM:
        "https://www.frontendmentor.io/solutions/testimonials-grid-section-css-grid-and-bem-practice-9UcJzQRGUe",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/07-testimonials-grid-section",
      stack: ["html", "css"],
    },
    {
      id: 5,
      name: "Four card feature section",
      description:
        "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
      img: "assets/previews/06-four-card-feature-section.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/06-four-card-feature-section/",
      linkFM:
        "https://www.frontendmentor.io/solutions/solution-title-include-some-of-the-tools-and-techniques-you-used-to-c-nUF_1kH0gr",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/06-four-card-feature-section",
      stack: ["html", "css"],
    },
    {
      id: 4,
      name: "Recipe page",
      description:
        "This challenge will help you focus on writing semantic HTML. Ensure you think through what HTML elements are most appropriate for each piece of content.",
      img: "assets/previews/04-recipe-page.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/04-recipe-page/",
      linkFM:
        "https://www.frontendmentor.io/solutions/recipe-page-semantic-html-css-custom-properties-and-accessible-tables-xk02taac2w",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/04-recipe-page",
      stack: ["html", "css"],
    },
    {
      id: 3,
      name: "Social links profile",
      description:
        "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",
      img: "assets/previews/03-social-links-profile.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/03-social-links-profile/",
      linkFM:
        "https://www.frontendmentor.io/solutions/responsive-social-links-card-with-semantic-html-rem-units-and-css-varia-Cwauw2jcPG",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/03-social-links-profile",
      stack: ["html", "css"],
    },
    {
      id: 2,
      name: "Blog preview card",
      description:
        "This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",
      img: "assets/previews/02-blog-preview-card.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/02-blog-preview-card/",
      linkFM:
        "https://www.frontendmentor.io/solutions/responsive-blog-preview-card-using-html-css-clamp-and-local-fonts-NlR1mhHfNW",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/02-blog-preview-card",
      stack: ["html", "css"],
    },
    {
      id: 1,
      name: "QR code component",
      description:
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
      img: "assets/previews/01-qr-code-component-main.png",
      link: "https://tetianaaleks.github.io/fm-solutions-hub/01-qr-code-component-main/",
      linkFM:
        "https://www.frontendmentor.io/solutions/responsive-qr-code-component-using-html-css-and-flexbox-7O_PI0fTOw",
      linkGitHub:
        "https://github.com/TetianaAleks/fm-solutions-hub/tree/main/01-qr-code-component-main",
      stack: ["html", "css"],
    },
  ];
}
