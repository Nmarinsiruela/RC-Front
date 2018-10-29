import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  signup() {
    console.log('Dashboard');
    this.zone.run(() => {
      this.router.navigate([Constants.USERMENU_URL]);
    });
  }
}
