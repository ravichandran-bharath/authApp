import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UsersService {
    users: FirebaseListObservable<any[]>;
    items: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire){}

  getUsers(){
      this.users = this.af.database.list('usersInfo') as
        FirebaseListObservable<Users[]>
        return this.users;
  }

}

interface Users{
    $key?: string;
    email?: string;
    myReferralCode?: string;
    name?: string;
    phoneNumber?: string;
    referredCode?: string;
    created_at: string;
}