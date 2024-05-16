import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Routing in Angular';

  constructor(private router: Router) {}

  navigateToNotes(): void {
    this.router.navigate(['/notes']);
  }
  navigateToNote(id: number): void {
    this.router.navigate([`/notes/${id}`]);
  }
}
