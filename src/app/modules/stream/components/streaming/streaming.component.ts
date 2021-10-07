import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';
import { UserService } from '../../services/user.service';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss']
})
export class StreamingComponent implements OnInit {
currentVideo:any;

@ViewChild(PlyrComponent)
plyr: PlyrComponent;

// or get it from plyrInit event
player: Plyr;

videoSources: Plyr.Source[] = [
  
];

currentUser: User;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private chatService: ChatService, private videoService: VideoService) {
  
  }
  
  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
  
  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }
  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.params.userId;
   
    this.userService.getUser(userId).ref.onSnapshot(snapshot => {
      this.currentUser = { id: snapshot.id, ...snapshot.data() } as User;
      console.log("DATA:", this.currentUser);
    })
    this.videoService.getVideo().valueChanges().subscribe((video) => {
      const videoId = Object.assign({}, {video})
      if(videoId.video){
        this.currentVideo = videoId.video;
        this.player.source = {
          type: 'video',
          sources: [
            {
              src: this.currentVideo.video,
              provider: 'vimeo',
            },
          ],
        };
      }
    } )
  }

}
