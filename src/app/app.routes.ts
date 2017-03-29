import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { OrdersComponent } from './orders/orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UsersComponent } from './users/users.component';
import { TeamComponent } from './team/team.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import { PaginationComponent } from './pagination/pagination.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'navbar', component: NavbarComponent },
    { path: 'panel', component: PanelComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'delivery', component: DeliveryComponent },
    { path: 'users', component: UsersComponent },
    { path: 'team', component: TeamComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'pagination', component: PaginationComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);