import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './auth.queries';
import { Observable } from 'rxjs';
import { BASE_URL } from '../consts/consts';

export interface UserAccount extends Omit<User, 'role'> {}

@Injectable({
  providedIn: 'root',
})
export class UsersQueries {
  protected readonly http = inject(HttpClient);

  public getUser(): Observable<UserAccount> {
    return this.http.get<User>(`${BASE_URL}/user`);
  }
}
