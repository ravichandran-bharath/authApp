import { Component, OnInit } from '@angular/core';
import  { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import auth = firebase.auth;

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class TabsComponent implements OnInit {
  

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/Orders');
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/Delivery');
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/Users');
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/Team');
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/Settings');
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/Reports');
      }
    });

   }

  ngOnInit() {
  }

}
