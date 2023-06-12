import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './users-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { UserService } from './services/user.service';
import { UsersDataSource } from './services/users.dataSource';

const material = [MatTableModule, MatButtonModule, MatSortModule];

@NgModule({
  declarations: [UsersTableComponent],
  imports: [CommonModule, material],
  exports: [UsersTableComponent],
  providers: [UserService, UsersDataSource],
})
export class UsersTableModule {}
