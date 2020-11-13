import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { AddUserComponent } from "./components/add-user/add-user.component";

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'test', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
