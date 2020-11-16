import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserModel } from "../../models/UserModel";
import { UserService } from "../../services/user.service";
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  @Input() user: UserModel;
  @ViewChild(MatTable) table: MatTable<any>;

  users:UserModel[];
  displayedUserColumns: string[] = [
    'id', 
    'name', 
    'username', 
    'email'
    ];  
  displayedColumns: string[] = [
    'id', 
    'name', 
    'username', 
    'email',
    'action'
    ];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>{
      this.users = users
    })
  }

  onDelete(user){
    // delete from UI
    this.users = this.users.filter(u => u.id != user.id)
    // delete from server
    this.userService.deleteUser(user).subscribe()
  }
}
