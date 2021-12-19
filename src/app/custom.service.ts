import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
@Output() getData = new EventEmitter ;
constructor() { }
dummydata = [{user:'thrupthi',password:'12345',status:'active'},{user:'preethi',password:'123455',status:'InActive'}]

loginCredential(){
 return this.dummydata;
}
isactive :string;
addingUser(user:string,password:string){
  let status = 'Active';
  this.getData.emit(status);
this.dummydata.push({user,password,status})
}

updatedata(id:number,status:boolean){
  if(status == true){
    this.isactive = 'Active';
  } else{
    this.isactive = 'Inactive';
  }
  this.dummydata[id].status = this.isactive;

}
togetdata(id:number){
  console.log(id+'this is id ');
}

}
