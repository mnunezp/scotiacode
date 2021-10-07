import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { StreamingRoutingModule } from './stream-routing.module';
import { PlyrModule } from 'ngx-plyr';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './message/message.component';
import { UserService } from './services/user.service';
import { ChatService } from './services/chat.service';
import { FormsModule } from '@angular/forms';
import { ChatOnlyComponent } from './components/chat-only/chat-only.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './components/user-list/user-list.component';
import { CambioVideoComponent } from './components/cambio-video/cambio-video.component';
import { VideoService } from './services/video.service';


@NgModule({
  declarations: [CambioVideoComponent, StreamingComponent, ChatComponent, MessageComponent, ChatOnlyComponent, UserListComponent],
  imports: [
    CommonModule,
    StreamingRoutingModule,
    PlyrModule,
    FormsModule,
    NgbModule
  ],
  providers: [UserService, ChatService, VideoService],
})
export class StreamModule { }
