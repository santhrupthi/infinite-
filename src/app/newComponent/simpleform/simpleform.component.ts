import { Component, OnInit , OnChanges } from '@angular/core';
import { from } from 'rxjs';
import{CustomService} from  '../../custom.service'
@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.scss'],
  providers:[CustomService]
})
export class SimpleformComponent implements OnInit {

  constructor(private CustomService :CustomService) { }
  data_val : {user:string,password:any, status:string}[]=[] ;
   val : any;
  ngOnInit() {
    this.data_val =this.CustomService.loginCredential();
    this.CustomService.getData.subscribe((data)=>
      alert(data));
  }

  eventChange(){
    console.log('change');
  }
  ngOnChange(){
    console.log('ngOnChange');
  }
  simplearray = [{id:1,type:"fees",total:"100000",gain:"60000",image : 'assets/1.jpg'},{id:2,type:"Attendace",total:"50000",gain:"4000",image : 'assets/2.jpg'},{id:3,type:"Staff",total:"100",gain:"90" ,image : 'assets/3.jpg'},{id:4,type:"Grade",total:"100%",gain:"70%",image : 'assets/4.jpg'}]

  addImag(id:number){
    //let dataserviec = new CustomService();
   // dataserviec.togetdata(id);
  }
  addval(val:any){
this.CustomService.addingUser(val,val);
console.log('shetty',this.CustomService.loginCredential());
  }
  sub_del(id:number){
    this.simplearray.splice(id, 1);
  }
}
