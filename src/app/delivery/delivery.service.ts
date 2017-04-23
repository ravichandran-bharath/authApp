import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DeliveryService {
    db : FirebaseListObservable<any[]>;

    constructor(private af: AngularFire){}

  getDb(){
      this.db = this.af.database.list('deliveryBoyz') as
        FirebaseListObservable<Users[]>
        return this.db;
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