import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Customer } from './../customers';
// import { CustomersService } from './../customers.service'
import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
