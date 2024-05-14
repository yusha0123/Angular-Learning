import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'World';
  count: number = 0;

  // attribute binding
  imgSrc: string = '../assets/angular-image.png';
  //style binding
  bgColor: string = 'blue';
  titleColor: string = 'white';
  description: string = 'font-size: 30px; color:lightBlue;';

  incrementCounter() {
    this.count++;
  }

  //class binding
  redText: boolean = true;

  inputText: string = 'Initial Value';

  //ngClass
  message: string = 'This is a dangerous message';
  classes: string = 'danger text-size';

  //ngStyle
  selectedColor: string = 'red';
}
