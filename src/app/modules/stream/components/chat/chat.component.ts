import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../models/message.model';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewInit {
  lastMessage$: Observable<any[]>;
  messages: Message[] = [];
  messageText: string;
  @Input() user: User;
  @Input() showInput: Boolean = true;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.lastMessage$ = this.chatService.getChat();
  }

  ngAfterViewInit(): void {}
  sendMessage() {
    if (this.messageText.length > 0 && this.user != null) {
      let message = new Message();
      message.text = this.messageText;
      message.user = this.user.name;
      this.messageText = '';

      this.chatService.sendMessage(message).then(function (doc) {});
    }
  }

  scrollTopMessages() {
    var container = document.getElementById('messageContainer');
    container.scrollTop = container.scrollHeight;
  }

  enterSubmit(event) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }
}
