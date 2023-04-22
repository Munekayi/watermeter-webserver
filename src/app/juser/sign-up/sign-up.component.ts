import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UserService } from '../../shared/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage = false ;
  serverErrorMessages =" ";

  users!: User[];
  user!: User;
  email!: string;
  password!: string;
  form!: NgForm;

  constructor(public userService:UserService, private router:Router) {
    this.users =[];
  }

  addUser(signupForm: NgForm)
  {  
    const newUser = {
      email: this.email,
      password: this.password,
    }
    this.userService.addUser(newUser)
      .subscribe(user => {
        this.users.push(user);
        this.userService.getUsers()
        .subscribe( users =>
          this.users = users);
          //this.resetForm(signupForm);
          this.router.navigate(['/login']); // navigate to login page after signup
      });
      
  };
  ngOnInit() {
    this.userService.getUsers()
        .subscribe( users =>
          this.users = users);

  }
 /*resetForm(signupForm: NgForm) {
  if (signupForm) {
    signupForm.resetForm();
  }
  this.user = new User();
  this.serverErrorMessages = '';
  this.userService.selectedUser = {
    email: '',
    password: ''
  };*/
 }
