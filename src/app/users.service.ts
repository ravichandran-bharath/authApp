import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { database } from 'firebase';
import { User } from '../app/user';

@Injectable()
export class UsersService {

  users: FirebaseListObservable<User[]>;


  private search: string;

  constructor(private af: AngularFire) { }

      getUsers() {
        this.users = this.af.database.list('/usersInfo') as
          FirebaseListObservable<User[]>
          return this.users;
      }


  // searchUrl(search:string) {
  //   this.search = '';
  //   return this.http.get(this.search)
  //     .map(res=> res.json)
  // }

}
