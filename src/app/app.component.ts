import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Structure Directives';
  isLoggedIn: boolean = true;
  username: string = 'Yusha';
  names: string[] = [
    'Yusha',
    'Babu Rao',
    'Chota babu',
    'Jahil Babu',
    'Gawar Babu',
  ];

  grade: string = 'B';
}
