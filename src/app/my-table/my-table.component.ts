import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UserInterface } from './type/users.interface';
import { SortingInterface } from './type/sorting.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
export class MyTableComponent implements OnInit {
  users: UserInterface[] = [];
  sorting: SortingInterface = {
    column: 'id',
    order: 'asc',
  };

  //Search form
  searchValue = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  // Columns
  columns: Array<keyof UserInterface> = ['id', 'name', 'age'];

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.userService
      .getUsers(this.sorting, this.searchValue)
      .subscribe((users) => {
        this.users = users;
        console.log(this.users);
      });
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  isDescSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'desc';
  }
  isAscSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'asc';
  }

  sortTable(column: string): void {
    const futureSortingOrder = this.isDescSorting(column) ? 'asc' : 'desc';
    this.sorting = {
      column,
      order: futureSortingOrder,
    };

    this.fetchData();
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
    console.log('searchValue:', this.searchForm.value.searchValue);
  }
}
