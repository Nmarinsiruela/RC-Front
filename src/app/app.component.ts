import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RC Dashboard';

  constructor(
    private router: Router, private zone: NgZone) {}

}
