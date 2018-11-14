import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from '../app.constants';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    url;
    userName = new BehaviorSubject('Gestor RC');
    userIsLogged = new BehaviorSubject(false);
    userIsAdmin = new BehaviorSubject(true);
    constructor(private http: HttpClient, private user: UserService) {
        this.url = Constants.BACKEND_URL;
    }

    setActualUser(name: string) {
        this.userName.next('Hola, ' + name.charAt(0).toUpperCase() + name.slice(1));
        this.userIsLogged.next(true);
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.url}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    signup(username: string, email: string, password: string) {
        return this.http.post<any>(`${this.url}/users/create`, { username, email, password })
            .pipe(map(user => {
                // Create successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.userIsLogged.next(false);
        localStorage.removeItem('currentUser');
    }
}
