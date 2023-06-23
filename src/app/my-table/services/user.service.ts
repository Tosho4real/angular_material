import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../type/users.interface';
import { HttpClient } from '@angular/common/http';
import { SortingInterface } from '../type/sorting.interface';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(
    sorting: SortingInterface,
    searchValue: string
  ): Observable<UserInterface[]> {
    const url = `http://localhost:3000/users?_sort=${sorting.column}&_order=${sorting.order}&name_like=${searchValue}`;
    return this.http.get<UserInterface[]>(url);
  }
}
