import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class OrdersService {
    orders: FirebaseListObservable<any[]>;
    

    constructor(private af: AngularFire){}

  getOrders(){
      this.orders = this.af.database.list('orders') as
        FirebaseListObservable<Users[]>
        return this.orders;
  }

}

interface Users{
    $key?: string;
    id?: string;
    address?: string;
    deliveryBoy?: string;
    status?: string;
    userName?: string;
    created_at: string;
}