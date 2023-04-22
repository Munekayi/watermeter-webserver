import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage = false;
  serverErrorMessages = " ";

  users!: User[];
  user!: User;
  email!: string;
  password!: string;

  constructor(private userService: UserService, private router:Router) { }

  onLogin() {
    // Perform login logic, e.g. send request to server with email and password
    // If successful, store user session and navigate to home page
    // For example, using localStorage to store user session data
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', this.email);

    // Navigate to home page, assuming you have a router set up
    // Replace `home` with the actual route name of your home page
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      email:' ',
      password:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}

