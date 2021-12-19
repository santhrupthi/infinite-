import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private AuthService :AuthService) { }

  ngOnInit() {
  }
    logoutFun(){
    this.AuthService.logout(false);

  }

}
