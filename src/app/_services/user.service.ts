import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// added by F.5.2
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        // the following line is replaced by F.5.2
        // return this.http.get<any[]>(`${config.apiUrl}/users`);
        // the following line is added by F.5.2
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }

    register(user) {
        // the following line is replaced by F.5.2
        // return this.http.post(`${config.apiUrl}/users/register`, user);
        // the following line is added by F.5.2
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    delete(id) {
        // the following line is replaced by F.5.2
        // return this.http.delete(`${config.apiUrl}/users/${id}`);
        // the following line is added by F.5.2
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}