import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
   animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

export class EmailComponent implements OnInit {

  state: string = '';
    error: any;

    constructor(public af: AngularFire,private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }


  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
        {
         provider: AuthProviders.Password,
         method: AuthMethods.Password,
       }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/panel']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
        this.router.navigate(['/login']);
      })
    }
  }

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
// import { Router } from '@angular/router';
// import { moveIn, fallIn } from '../router.animations';

// @Component({
//   selector: 'app-email',
//   templateUrl: './email.component.html',
//   styleUrls: ['./email.component.css'],
//   animations: [moveIn(), fallIn()],
//   host: {'[@moveIn]': ''}
// })
// export class EmailComponent implements OnInit {
// errCond:any;
//   constructor(public af: AngularFire, private router:Router) {
//     // this.af.auth.subscribe(auth =>{
//     //   console.log(auth);
//     //   if(auth){
//     //     this.router.navigateByUrl('/dashboard');
//     //   }
//     // });
//    }

//    onSubmit(formData){
//      if(formData.valid){
//        this.af.auth.login({
//          email: formData.value.email,
//          password:formData.value.password
//        },
//        {
//          provider: AuthProviders.Password,
//          method: AuthMethods.Password,
//        }).then(
//          (success)=>{
//            console.log(success);//remove in production
//            this.router.navigate(['/panel']);
//        }).catch(
//          (err)=>{
//            console.log(err);//remove in production
//            this.errCond=err;
//            this.router.navigate(['/login']);
//          }
//        )
//      }
//    }

//   ngOnInit() {
//   }

// }