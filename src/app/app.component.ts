
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from './_services';
import { BehaviorSubject } from 'rxjs';
import { Constants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  userIsLogged = false;
  userIsAdmin = false;
  actualPage;

  constructor(
    private router: Router, private zone: NgZone, private authenticationService: AuthenticationService, private userService: UserService) {
      this.authenticationService.userName.subscribe(value => {
        this.title = value;
      });
      this.authenticationService.userIsLogged.subscribe(value => {
        this.userIsLogged = value;
      });
      this.authenticationService.userIsAdmin.subscribe(value => {
        this.userIsAdmin = value;
      });
      this.userService.actualPage.subscribe(value => {
        this.actualPage = value;
      });
    }

    goToHome() {
      console.log('Home');
      this.zone.run(() => {
        this.router.navigate([Constants.DASHBOARD_URL]);
      });
    }

    goToAdmin() {
      console.log('Admin');
      this.userService.setActualPage(Constants.ADMIN_URL);
      this.zone.run(() => {
        this.router.navigate([Constants.ADMIN_URL]);
      });
    }

    goToBasic() {
      console.log('Basic');
      this.userService.setActualPage(Constants.BASIC_URL);
      this.zone.run(() => {
        this.router.navigate([Constants.BASIC_URL]);
      });
    }

    goToUserMenu() {
      console.log('User-Menu');
      this.userService.setActualPage(Constants.USERMENU_URL);
      this.zone.run(() => {
        this.router.navigate([Constants.USERMENU_URL]);
      });
    }

    logout() {
      this.authenticationService.logout();
      this.userService.setActualPage(Constants.DASHBOARD_URL);
      this.zone.run(() => {
        this.router.navigate([Constants.DASHBOARD_URL]);
      });
    }
}
