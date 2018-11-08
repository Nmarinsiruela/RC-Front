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
  combat;
  physics;
  mentals;
  constructor(private router: Router, private zone: NgZone, private userService: UserService) { }

  ngOnInit() {
    this.actualSheet = this.userService.getSheet(this.userService.getSelectedCharacter());
    const  { stats, skills } = this.actualSheet;
    this.stats = this.userService.getValues(stats);
    this.combat = this.userService.getValues(skills.combat);
    this.physics = this.userService.getValues(skills.physics);
    this.mentals = this.userService.getValues(skills.mentals);
  }

}
