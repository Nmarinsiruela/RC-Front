import { Component, ViewEncapsulation, NgZone } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from '../app.constants';
import { AdminService } from '../_services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './admin.createUser.modal.html',
  encapsulation: ViewEncapsulation.None
})
export class NgbdModalComponent {
  closeResult: string;
  newUserForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService,
    private zone: NgZone,
    private modalService: NgbModal
  ) {
    this.newUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.newUserForm.controls;
  }

  autoSubmit() {
    this.zone.run(() => {
      this.router.navigate([Constants.USERMENU_URL]);
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newUserForm.invalid) {
      return;
    }

    console.log('New User Created!');
    this.adminService.createUser({
      username: this.f.username.value,
      password: this.f.password.value,
      maxStatus: 'CITIZEN',
      characters: []
    }).subscribe(result => {
        console.log(result);
        this.modalService.dismissAll();
    });
  }
}
