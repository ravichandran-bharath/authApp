import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'; 


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit{
  users:any;

    constructor(private usersService:UsersService) {}

    ngOnInit() {
      this.usersService.getUsers().subscribe(users =>{
        console.log(users);
        this.users = users;
      })
    }

  //   onSearch() {
  //   this.searchTerm$.next(this.searchForm.value.term);
  // }
}
  //   private af: AngularFire,
  //   private route: ActivatedRoute,
  //   private router: Router){
  //     this.user = af.database.list('/usersInfo'); 
  //   }


  // ngOnInit() {
  //   //this.user = this.usersService.getUsers();
  //   console.log(this.user+"sss");
  // }

  // ngOnDestroy(){

  //   this.subscription.unsubscribe();

  // }


  // constructor(private af: AngularFire){

  //     const users$: FirebaseListObservable<any> = af.database.list('usersInfo/');

  //     users$.subscribe(
  //       val => console.log(val)
  //     );

  // }

  // public userProfile: firebase.database.Reference;

  // public currentUser: firebase.User;

  // constructor(){
  //   this.currentUser = firebase.auth().currentUser;

  //   this.userProfile = firebase.database().ref('usersInfo/');
  // }

  // getUserProfile(): firebase.database.Reference {
  //   return this.getUserProfile.child(this.currentUser.uid);
  // }



// }