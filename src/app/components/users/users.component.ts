import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserModel } from "../../models/UserModel";
import { UserService } from "../../services/user.service";
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user: UserModel;
  @ViewChild(MatTable) table: MatTable<any>;

  users:UserModel[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>{
      this.users = users
    })
  }

  onDeleteUser(user:UserModel){
    // delete from UI
    this.users = this.users.filter(u => u.id != user.id)
    // delete from server
    this.userService.deleteUser(user).subscribe()
  }

  onAddUser(user:UserModel){
    this.userService.addUser(user).subscribe(user=>{
        this.users.push(user)
        this.table.renderRows();
      })
  }
}
