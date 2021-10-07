import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-cambio-video',
  templateUrl: './cambio-video.component.html',
  styleUrls: ['./cambio-video.component.scss']
})
export class CambioVideoComponent implements OnInit {

  constructor(private videoService:VideoService, private router: Router) { }
  video: string;

  ngOnInit(): void {
  }
  guardarVideo()
  {
    console.log("guardando video,",this.video)
    this.videoService.registerVideo(this.video)
  }
}
