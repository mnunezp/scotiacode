import { Injectable, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private firestore: AngularFirestore) {}

  registerUser(user: User) {
    window.localStorage.setItem('user', JSON.stringify(user));
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    return this.firestore.collection('users').add({ ...user, date: timestamp() });
  }

  getUser(userId: string) {
    return this.firestore.collection('users').doc(userId);
  }

  getUsers() {
    let ref = this.firestore.collection('users', (ref=> ref.orderBy('date')));
    return ref.valueChanges();
  }
}
