import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../app.constants';
import { UserService } from '../_services';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  username: string;
  constructor(private router: Router, private zone: NgZone, private user: UserService) { }

  ngOnInit() {
    this.username = 'DefaultUser'; // This needs to be fetched from the Service.
     this.username = this.user.getUser().username;
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
