import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Customer } from "./customers";
import "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2";
import {FirebaseRef} from "angularfire2";

@Injectable()
export class CustomersService {

  private baseUrl = "https://angular-2-test-d13e2.firebaseio.com/array";  // web api URL

  constructor(private db:AngularFireDatabase) { }

   findAllusersInfo():Observable<Customer[]> {
        return this.db.object('usersInfo/DhQjyxz6NPf54pYLwkLP2BXNTvU2')
        // this.subscribe(console.log)
            .do(console.log);
    }



// getCustomers() {
//     return this.http.get(this.baseUrl)
//         .map(res => <Customer[]> res.json())
//         .catch(error => {
//             console.log(error);
//             return Observable.throw(error);
//         });
// }

}
