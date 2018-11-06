import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { BehaviorSubject } from 'rxjs';
import { Sheet } from '../_models/sheet';
import { Stats } from '../_models/stats';

@Injectable({ providedIn: 'root' })
export class UserService {
    actualUser: User;
    selectedCharacter: number;
    actualPage = new BehaviorSubject('');

    constructor(private http: HttpClient) {
        this.actualUser = new User();
    }

    setActualPage(page: string) {
        this.actualPage.next(page);
    }

    getUser(): User {
        // return this.http.get<User[]>(`${Constants.BACKEND_URL}/${id}`);
        return this.actualUser;
    }

    setActualUser( user: User) {
        this.actualUser = user;
    }

    setSelectedCharacter (id: number) {
        this.selectedCharacter = id;
    }

    getSelectedCharacter() {
        return this.selectedCharacter;
    }

    getSheet(id: number) {
        // This will read the selected character and it'll do a GET based on its ID.
        const testStats = new Stats(7, 6, 6, 8, 8, 6, 5);
        const testSheet: Sheet = {
            name: 'Varen',
            race: 'Altonato',
            age:    '850',
            alignment:  'Neutral',
            profession:   'Jeweller',
            status:   'Expert',
            username: 'Akran',
            image: '/assets//Varen.JPG',
            xp: '0',
            sXP: '100',
            stats: testStats,
            skills: undefined
        };
        return testSheet;
    }

}
