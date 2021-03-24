import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg: string = '';
  msg2: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  store(userInfo: any) {
    console.log(userInfo);
    if (userInfo.pass == userInfo.pass1) {
      sessionStorage.setItem('user1', userInfo.user1);
      sessionStorage.setItem('pass1', userInfo.pass);
      this.msg2 = 'Success';
      setTimeout(function () { window.location.href = '/login' }, 800);
      //window.location.href = '/login'

    }
    else {
      this.msg = "Incorrect password"
    }
  }
}
