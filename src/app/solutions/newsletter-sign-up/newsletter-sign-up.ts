import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { FooterSolutionComponent } from "src/app/solution-layout/footer/footer-solutioncomponent";

@Component({
  selector: "app-newsletter-sign-up",
  imports: [CommonModule, FooterSolutionComponent, ReactiveFormsModule],
  templateUrl: "./newsletter-sign-up.html",
  styleUrls: ["./newsletter-sign-up.scss"],
})
export class NewsletterSignUpComponent {
  form: FormGroup;
  isShowThanks: boolean = false;
  emailString: string = "ash@loremcompany.com";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.emailString = this.form.value.email;
      this.isShowThanks = !this.isShowThanks;
    }
  }

  dismiss() {
    this.form.reset();
    this.isShowThanks = !this.isShowThanks;
  }

  get email() {
    return this.form.get("email");
  }
}
