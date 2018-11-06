import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services';
import { Sheet } from '../_models/sheet';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  actualSheet: Sheet;
  stats: string[];
  combat = Constants.COMBAT;
  physics = Constants.PHYSICS;
  constructor(private router: Router, private zone: NgZone, private userService: UserService) { }

  ngOnInit() {
    this.stats = Constants.STATS;
    this.actualSheet = this.userService.getSheet(this.userService.getSelectedCharacter());
  }

}
