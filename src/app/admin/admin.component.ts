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

  constructor(private adminService: AdminService) {}

  ngOnInit() {
      this.adminService.getAllUsers().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

}
