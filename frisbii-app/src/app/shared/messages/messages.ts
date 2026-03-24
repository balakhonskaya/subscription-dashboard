import { Component, inject } from '@angular/core';
import { MessagesService } from './messages.service';
import { NgClass } from '@angular/common';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-messages',
  imports: [NgClass, MatIcon],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {
   messagesService = inject(MessagesService);

  message = this.messagesService.message;

  onClose() {
    this.messagesService.clear();
  }

}
