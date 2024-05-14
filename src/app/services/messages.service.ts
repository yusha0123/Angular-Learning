import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  getMessages() {
    return ['Message1', 'Message2', 'Message3', 'Message4', 'Message5'];
  }
}
