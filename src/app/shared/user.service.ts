import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    email:'',
    password:'',
  };

  constructor(private http: HttpClient) { }

  //retrieving UserService
  getUsers()
  {
    return this.http.get('http://localhost:3000/api/users')
    .pipe(map(res => (<any>res).json()));
  }

  //add User Method
  addUser(newUser: User)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:3000/api/user', newUser, httpOptions)
      .pipe(map(res => (<any>res).json()));
  }

  //delete Method
  deleteUser(id: User)
  {
    return this.http.delete('http://localhost:3000/api/user/'+id)
      .pipe(map(res => (<any>res).json()));
  }
}
