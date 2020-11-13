import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from "../../models/UserModel";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() user: UserModel;

  users:UserModel[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>{
      this.users = users
    })
  }

  // deleteUser(user:UserModel){
  //   // delete from UI
  //   this.users = this.users.filter(u => u.id != user.id)
  //   // delete from server
  //   this.userService.deleteUser(user).subscribe()
  // }

  addUser(user:UserModel){
    this.userService.addUser(user).subscribe(user=>{
        this.users.push(user)
      })
  }

  onEdit(user){
    this.userService.editUser(user).subscribe(user => console.log(user))
    
  }

  onDelete(user){
    // delete from UI
    this.users = this.users.filter(u => u.id != user.id)
    // delete from server
    this.userService.deleteUser(user).subscribe()
  }
}
