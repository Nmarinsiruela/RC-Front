import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Constants } from '../app.constants';

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(private http: HttpClient) { }
    getAllUsers() {
        return this.http.get<User[]>(`${Constants.BACKEND_URL}/accounts`);
    }
}
