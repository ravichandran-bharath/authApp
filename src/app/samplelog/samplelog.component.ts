import { Component, OnInit, HostBinding } from '@angular/core';
import  { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import auth = firebase.auth;

@Component({
  selector: 'app-samplelog',
  templateUrl: './samplelog.component.html',
  styleUrls: ['./samplelog.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class SamplelogComponent implements OnInit {

  
  error: any;
    constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFb() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
