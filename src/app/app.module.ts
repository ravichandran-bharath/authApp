import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';


import { TabsComponent } from './tabs/tabs.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UsersComponent } from './users/users.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBHfCpwcfRyQTtHHSSBBggkMusoc3TsR14',
  authDomain: 'angular-2-test-d13e2.firebaseapp.com',
  databaseURL: 'https://angular-2-test-d13e2.firebaseio.com',
  storageBucket: 'angular-2-test-d13e2.appspot.com',
  messagingSenderId: '92816780006'
};

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
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
