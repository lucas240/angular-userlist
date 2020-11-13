import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter()

  name:string
  username:string
  email:string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
  
    }

    this.addUser.emit(user)
  }
}
