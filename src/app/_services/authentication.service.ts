import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constants } from '../app.constants';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    url;
    constructor(private http: HttpClient) {
        this.url = Constants.BACKEND_URL;
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
        localStorage.removeItem('currentUser');
    }
}
