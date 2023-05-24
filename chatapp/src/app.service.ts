import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  chat: string[];
  constructor() {
    this.chat = [];
  }
  createMessage(chat) {
    return this.chat.push(chat);
  }

  getMessages() {
    return this.chat;
  }
}
