import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
islogedin:boolean = false;
login( val :boolean){
  this.islogedin = val;

}
logout(val :boolean){
  this.islogedin = val;
  alert(this.islogedin);
}

isAuthontication(){

return this.islogedin;

}


}
