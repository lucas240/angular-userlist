import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
import { UserModel } from "../../models/UserModel";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: UserModel;
  @Output() deleteUser: EventEmitter<UserModel> = new EventEmitter();
  
  name:string
  username:string
  email:string  

  hideForm = false

  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
  }

  onHide(hideForm){
    this.hideForm = !hideForm
  }

  onEdit(user){
    user = {
      id: user.id,
      name: this.name,
      username: this.username,
      email: this.email,
    }
    this.userService.editUser(user).subscribe(user=> this.user = Object.assign(this.user, user))
    
  }

  onDelete(user){
    this.deleteUser.emit(user)
    
  }
}
