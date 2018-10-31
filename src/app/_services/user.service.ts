import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Constants } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class UserService {
    actualUser: User;

    constructor(private http: HttpClient) {
        this.actualUser = new User();
    }

    getUser(): User {
        // return this.http.get<User[]>(`${Constants.BACKEND_URL}/${id}`);
        return this.actualUser;
    }

    setActualUser( user: User) {
        this.actualUser = user;
    }
}
