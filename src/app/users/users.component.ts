import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { HttpModule } from '@angular/http';
import { Customer } from './../customers';
import { AngularFireModule } from 'angularfire2';
import {initializeApp,database} from 'firebase';
import {FirebaseRef} from "angularfire2";
import { firebaseConfig } from '../../environments/firebase.config';
import { User } from '../user';

import { Injectable } from '@angular/core';
import "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  // data: string;
  // allUsers: User[];
  // filtered: User[];
  users: User[];

    constructor(private usersService: UsersService){

      //  const users$ : Observable<Customer[]> = af.list('usersInfo');

      //  const userone$ =  af.object('usersInfo/DhQjyxz6NPf54pYLwkLP2BXNTvU2');

      //  userone$.subscribe(console.log);
}


  ngOnInit() {

    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });


    // this.usersService.findAllUsers()
    //   .do(console.log)
    //   .subscribe(
    //     users => this.allUsers = this.filtered = users
    //   )
    
    // this._customerService.dataString$.subscribe(
    //   data => {
    //     this.data = data; 
    //   });
  }

  // search(search:string){

  //   this.filtered = this.allUsers.filter(user => _user.name.includes(search) );

  // }

}
