import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: AngularFirestore) {

  }

  sendMessage(message: Message) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    return this.firestore.collection('chats').doc('streaming').collection('messages').add({ ...message, date: timestamp() });
  }
  
  getChat() {
    let ref = this.firestore.collection('chats').doc('streaming').collection('messages', ref=> ref.orderBy('date'));
    return ref.valueChanges();
  }
}
