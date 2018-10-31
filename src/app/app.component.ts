
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
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

  constructor(
    private router: Router, private zone: NgZone, private authenticationService: AuthenticationService) {
      this.authenticationService.userName.subscribe(value => {
        this.title = value;
      });
      this.authenticationService.userIsLogged.subscribe(value => {
        this.userIsLogged = value;
      });
      this.authenticationService.userIsAdmin.subscribe(value => {
        this.userIsAdmin = value;
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
      this.zone.run(() => {
        this.router.navigate([Constants.ADMIN_URL]);
      });
    }

    goToBasic() {
      console.log('Basic');
      this.zone.run(() => {
        this.router.navigate([Constants.BASIC_URL]);
      });
    }
}
