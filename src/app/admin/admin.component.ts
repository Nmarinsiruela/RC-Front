import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { User } from '../_models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  userIsSelected: boolean;
  selectedUser: User;

  constructor(private adminService: AdminService) {
    this.userIsSelected = false;
    this.selectedUser = new User();
  }

  ngOnInit() {
      this.fetchAllUsers();
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
      console.log(response);
    });
  }

  updateUser() {
    console.log(this.selectedUser);
    this.adminService.updateUser({
      username: this.selectedUser.username,
      id: this.selectedUser.id,
      maxStatus: 'LEADER',
    }).subscribe(response => {
      console.log(response);
    });
  }
}
