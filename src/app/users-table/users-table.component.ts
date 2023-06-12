import { Component, OnInit } from '@angular/core';
import { UsersDataSource } from './services/users.dataSource';
import { UserService } from './services/user.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new UsersDataSource(this.userService);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dataSource.loadUsers({ active: 'id', direction: 'asc' });
  }

  sortUsers(sort: Sort) {
    this.dataSource.loadUsers(sort);
  }
}
