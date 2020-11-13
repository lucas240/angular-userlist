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
  
  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
  }

  onEdit(user){
    this.userService.editUser(user).subscribe(user => console.log(user))
    
  }

  onDelete(user){
    this.deleteUser.emit(user)
    
  }
}
