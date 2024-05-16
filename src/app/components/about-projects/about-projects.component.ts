import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrls: ['./about-projects.component.css'],
})
export class AboutProjectsComponent {
  @Input() name!: string;
}
