import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../app.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService, UserService } from '../_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private zone: NgZone,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }

  autoSubmit() {
    this.zone.run(() => {
      this.router.navigate([Constants.USERMENU_URL]);
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    console.log('Dashboard');
    this.zone.run(() => {
      this.router.navigate([Constants.USERMENU_URL]);
    });
    this.userService.setActualPage(Constants.USERMENU_URL);
    /*         this.authenticationService.signup(this.f.username.value, this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([Constants.USERMENU_URL]);
              },
              error => {
                  this.error = error;
                  this.loading = false;
              }); */
  }
}
