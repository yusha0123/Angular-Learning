import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'App Component';

  tasks: string[] = ['Task1', 'Task2', 'Task3', 'Task4', 'Task5'];

  deleteTask = (task: string) =>
    (this.tasks = this.tasks.filter((t) => t !== task));
}
