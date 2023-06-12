import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';
import { Sort } from '@angular/material/sort';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  fetchUsers(sort: Sort): Observable<UserInterface[]> {
    const params = new HttpParams()
      .set('_sort', sort.active)
      .set('_order', sort.direction);
    return this.http.get<UserInterface[]>('http://localhost:3000/users', {
      params,
    });
  }
}
