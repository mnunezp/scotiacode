import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat-only',
  templateUrl: './chat-only.component.html',
  styleUrls: ['./chat-only.component.scss']
})
export class ChatOnlyComponent implements OnInit {

  constructor(private userService: UserService, private chatService: ChatService) { }

  currentUser: User = null;

  ngOnInit(): void {
  }

}
