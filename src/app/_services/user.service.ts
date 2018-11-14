import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { BehaviorSubject } from 'rxjs';
import { Sheet } from '../_models/sheet';
import { Stats } from '../_models/stats';
import { Skills } from '../_models/skills';

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
        const testCombat: any = {
            arcos: 3,
            armas_Arrojadizas: 3,
            armas_Ligeras: 5,
            ballestas: 6
        };
        const testPhysics: any = {
            atletismo: 4,
            advertir: 7,
        };

        const testMentals: any = {
            concentracion: 5,
            diplomacia: 2,
            subterfugio: 4
        };
        const testSkills = new Skills();
        testSkills.combat = testCombat;
        testSkills.physics = testPhysics;
        testSkills.mentals = testMentals;

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
            skills: testSkills
        };
        return testSheet;
    }

    getValues(subSheet) {
        const result = [];
        for (let x = 0; x < Object.keys(subSheet).length; x++) {
                const attribute = Object.keys(subSheet)[x];
                result.push({name: this.formatAttribute(attribute), value: subSheet[attribute]});
            }
        return result;
    }

    formatAttribute(attribute: string) {
        attribute = attribute.replace('_', ' ');
        return  attribute.charAt(0).toUpperCase() + attribute.slice(1);
    }
}
