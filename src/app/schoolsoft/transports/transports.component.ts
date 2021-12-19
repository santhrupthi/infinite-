import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }
dtl :{routNo : number,bussname:string};
  ngOnInit() {
    this.dtl = {
      routNo:this.route.snapshot.params['id'],
      bussname:this.route.snapshot.params['name']
    }
  this.simplfunction();
  }
simplfunction(){
  this.route.params.subscribe((data:Params)=>{
    this.dtl ={
      routNo:data['routNo'],
      bussname:data['bussname'],
    }

  })
}
}
