import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { User } from '../_models';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  userIsSelected: boolean;
  selectedUser: User;

  updateForm: FormGroup;
  submitted = false;
  statusNames: string[] = [
    'Iniciado',
    'Avanzado',
    'Veterano',
    'Experto',
    'Maestro',
    'Lider'
  ];

  constructor(private adminService: AdminService,  private formBuilder: FormBuilder) {
    this.userIsSelected = false;
    this.selectedUser = new User();
  }

  ngOnInit() {
      this.fetchAllUsers();
      this.updateForm = this.formBuilder.group({
        newStatus: ['', Validators.required],
      });
  }

  get f() {
    return this.updateForm.controls;
  }

  goToUser(value: number) {
    console.log('Selected');
    this.userIsSelected = true;
    this.selectedUser = this.users[value];
  }

  fetchAllUsers() {
    this.adminService.getAllUsers().pipe(first()).subscribe(users => {
        this.users = users;
    });
  }

  deleteUser(value: number) {
    this.adminService.deleteUser(value).subscribe(response => {
      console.log('Account deleted');
    });
  }

  updateUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    this.adminService.updateUser({
      username: this.selectedUser.username,
      id: this.selectedUser.id,
      maxStatus: this.f.newStatus.value,
    }).subscribe(response => {
      console.log('Account updated');
    });
  }
}
