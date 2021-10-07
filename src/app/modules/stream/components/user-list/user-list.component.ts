import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const USERS: User[] = [
  {
    name: 'Mariano',
    email: 'mariano@donpepe.com',
    rut: '11.111.111-1'
  },
  {
    name: 'Aldo',
    email: 'aldo@donpepe.com',
    rut: '11.111.111-1'
  },
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

  users = USERS;

  constructor(private userService:UserService) {
    this.users$ = userService.getUsers();
  }

  users$: Observable<any[]>;

}