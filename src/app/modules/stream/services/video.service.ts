import { Injectable, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class VideoService {

  constructor(private firestore: AngularFirestore) {}

  registerVideo(video: string) {

    return this.firestore.collection('video').doc('mi_video').set({video:video});
  }

  getVideo() {
    return this.firestore.collection('video').doc('mi_video');
  }
}
