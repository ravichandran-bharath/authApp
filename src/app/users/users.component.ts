import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../customers.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: string;

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {

    // this._customerService.dataString$.subscribe(
    //   data => {
    //     this.data = data; 
    //   });
  }

}
