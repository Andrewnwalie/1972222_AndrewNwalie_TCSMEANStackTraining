import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  validate(info: any) {
    console.log(info);
    let user1: string = info.user1;
    let pass1: string = info.pass1;
    console.log("this id " + user1, pass1)
    let user = sessionStorage.getItem('user1');
    let pass = sessionStorage.getItem('pass1');
    if (user1 == user && pass1 == pass) {
      this.msg = '';
      window.location.href = '/Dashboard'

    }
    else {
      this.msg = 'Username or password not found'

    }
  }
}
