import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessagesService],
})
export class AppComponent {
  messages: string[] = [];

  constructor(private messageService: MessagesService) {
    this.messages = messageService.getMessages();
  }

  title: string = 'Dependancy Injection & Services';
}
