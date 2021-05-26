import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '-';
  genders: string[] = ['Male', 'Female'];
  submitted: boolean = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  suggestUsername() {
    const suggestedUsername = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedUsername,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedUsername
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }



  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
