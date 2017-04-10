import { Component, OnInit } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { Customer } from './../customers';
// import { AngularFireModule } from 'angularfire2';
// import {initializeApp,database} from 'firebase';
// import {FirebaseRef} from "angularfire2";
// import { firebaseConfig } from '../../environments/firebase.config';

// import { Injectable } from '@angular/core';
// import "rxjs/Rx";
// import {AngularFireDatabase} from "angularfire2";
// import { Observable } from "rxjs/Observable";

@Component({
selector: 'app-api',
template: ` 
<ul class="">

</ul>`,
    }) 

    export class CustomerComponent {

//     api: string;
//     public customers: Customer[];


//    constructor(private af: AngularFireDatabase){

//        const users$ : Observable<Customer[]> = af.list('usersInfo');

//        const userone$ =  af.object('usersInfo/DhQjyxz6NPf54pYLwkLP2BXNTvU2');

//        userone$.subscribe(console.log);
// }

ngOnInit() {
    // this.customerService.findAllusersInfo()
    //     .subscribe(
    //     customers =>
    //     {
    //         console.log(this.customers);
    //         this.customers = customers;
    //     },
    //     error => alert("error"));
}}