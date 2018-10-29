import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard, AdminGuard } from './auth.guard';
import { Constants } from './app.constants';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AdminComponent } from './admin/admin.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  { path: Constants.DASHBOARD_URL, component: DashboardComponent, pathMatch: 'full'},
  { path: Constants.LOGIN_URL, component: LoginComponent },
  { path: Constants.SIGNUP_URL, component: SignupComponent },
  { path: Constants.USERMENU_URL, component: UserMenuComponent, canActivate: [AuthGuard] },
  { path: Constants.BASIC_URL, component: BasicComponent, canActivate: [AuthGuard] },
  { path: Constants.ADMIN_URL, component: AdminComponent, canActivate: [AuthGuard, AdminGuard] },
   { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
