import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {initializeApp,database} from 'firebase';
import {FirebaseRef} from "angularfire2";
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
// import { CustomersService } from './customers.service';
import { routes } from './app.routes';
import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { SamplelogComponent } from './samplelog/samplelog.component';

import { TabsComponent } from './tabs/tabs.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UsersComponent } from './users/users.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CustomerComponent } from './customer/customer.component';
import { Customer } from './customers';
import { CustomerKeyvalPipe } from './customer-keyval.pipe';



initializeApp(firebaseConfig);

var root = database().ref();

  root.on('value', function(snap) {

    console.log(snap.val());
  })

// database().ref().on('value', snapshot => console.log(snapshot.val()));



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    NavbarComponent,
    PanelComponent,
    TabsComponent,
    OrdersComponent,
    DeliveryComponent,
    UsersComponent,
    TeamComponent,
    SettingsComponent,
    ReportsComponent,
    SamplelogComponent,
    PaginationComponent,
    CustomerComponent,
    CustomerKeyvalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    routes
  ],
  providers: [AuthGuard ], //, CustomersService
  bootstrap: [AppComponent]
})
export class AppModule { }