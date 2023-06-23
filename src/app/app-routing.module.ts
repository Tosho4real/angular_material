import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  { path: 'table', component: MyTableComponent },
  { path: 'angular-table', component: UsersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
