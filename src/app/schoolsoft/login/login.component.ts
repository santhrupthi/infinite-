import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private AuthService :AuthService) { }

  ngOnInit() {
  }

  loginFun(){
    let islogin = true;
    this.AuthService.login(islogin);
  }

}
