import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './my-table.component';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyTableComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MyTableComponent],
  providers: [UserService],
})
export class MyTableModule {}
