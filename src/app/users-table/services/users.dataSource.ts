import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { Sort } from '@angular/material/sort';

@Injectable()
export class UsersDataSource extends DataSource<UserInterface> {
  users$ = new BehaviorSubject<UserInterface[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private usersService: UserService) {
    super();
  }

  connect(): Observable<UserInterface[]> {
    return this.users$.asObservable();
  }

  disconnect(): void {
    this.users$.complete();
  }

  loadUsers(sort: Sort): void {
    this.isLoading$.next(true);

    this.usersService
      .fetchUsers(sort)
      .subscribe((users) => this.users$.next(users));

    this.isLoading$.next(false);
  }
}
