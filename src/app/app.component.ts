import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Template driven forms';
  user: {
    name: string;
    email: string;
  } = {
    name: '',
    email: '',
  };

  submitForm = (form: NgForm) => {
    if (form.valid) {
      console.log(form.value);
    }
  };

  validateEmail: () => boolean = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.user.email);
  };
}
