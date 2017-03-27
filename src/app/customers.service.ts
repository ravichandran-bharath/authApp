import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Customer } from "./customers";
import "rxjs/Rx";

@Injectable()
export class CustomersService {

  private baseUrl = "https://angular-2-test-d13e2.firebaseio.com/array";  // web api URL

  constructor(private http: Http) { }

getCustomers() {
    return this.http.get(this.baseUrl)
        .map(res => <Customer[]> res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
}

}
