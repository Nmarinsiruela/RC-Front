import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

}
