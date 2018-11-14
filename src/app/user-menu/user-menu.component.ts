import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../app.constants';
import { UserService } from '../_services';
import { Character } from '../_models/character';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  characters: Character[];
  actualChar = 0;
  constructor(private router: Router, private zone: NgZone, private userService: UserService) { }

  ngOnInit() {
    this.characters = [];
    const char1 = new Character(1, 'Varenthis', 'Expert', 'assets\\Varen.JPG');
    this.characters.push(char1);
    const char2 = new Character(2, 'Akran', 'Expert', 'assets\\Akran.PNG');
    this.characters.push(char2);
    const char3 = new Character(3, 'Test', 'Leader', 'assets\\Captura.JPG');
    this.characters.push(char3);
  }

  activeIfFirst(val: number) {
    return val === 0 ? 'active' : '';
  }

  switchCharacter(val: number) {
    (val === 0) ? this.actualChar-- : this.actualChar++;
  }

  selectCharacter(char: number) {
    console.log('Admin');
    this.userService.setActualPage(Constants.CHARACTER_URL);
    this.userService.setSelectedCharacter(this.characters[char].id);
    this.zone.run(() => {
      this.router.navigate([Constants.CHARACTER_URL]);
    });
  }
}
