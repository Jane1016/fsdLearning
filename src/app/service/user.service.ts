import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/` + id);
  }

  registerUser(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  updateUser(user: User) {
    return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/` + id);
  }
}
