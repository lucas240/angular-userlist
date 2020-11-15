import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { TableUserComponent } from "./components/table-user/table-user.component";

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'table', component: TableUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
