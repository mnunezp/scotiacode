import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements AfterViewInit {

  @Input() message: Message;
  container: HTMLElement;
  constructor() { }

  ngAfterViewInit() {         
    this.container = document.getElementById("messageContainer");           
    this.container.scrollTop = this.container.scrollHeight;     
  } 

}
