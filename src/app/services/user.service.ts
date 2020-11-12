import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { UserModel } from '../models/UserModel';
import { Observable } from 'rxjs';

const headers = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  // GET
  getUsers():Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url)
  }

  // EDIT
  editUser(user: UserModel):Observable<any> {
    return this.http.put<UserModel>(`${this.url}/${user.id}`, user, headers)
  }  

  // DELETE
  deleteUser(user: UserModel):Observable<any> {    
    return this.http.delete<UserModel>(`${this.url}/${user.id}`, headers)
  }

  // CREATE
  addUser(user: UserModel):Observable<UserModel> {    
    return this.http.post<UserModel>(this.url, user, headers)
  }
}
