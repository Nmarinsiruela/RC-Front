import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models';
import { Constants } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class AdminService {
    httpOptions;
    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
    }
    getAllUsers() {
        return this.http.get<User[]>(`${Constants.BACKEND_URL}${Constants.ACCOUNTS}`);
    }

    deleteUser(id: number) {
        return this.http.delete(`${Constants.BACKEND_URL}${Constants.ACCOUNTS}${id}`, this.httpOptions);
    }

    updateUser(updatedUser: Object) {
        return this.http.put(`${Constants.BACKEND_URL}${Constants.ACCOUNTS}`, updatedUser, this.httpOptions);
    }

    createUser(newUser: Object) {
        return this.http.post(`${Constants.BACKEND_URL}${Constants.ACCOUNTS}`, newUser, this.httpOptions);
    }

    getUserById(id: number) {
        return this.http.get<User[]>(`${Constants.BACKEND_URL}${Constants.ACCOUNTS}${id}`);
    }

}
