import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CustomService} from '../custom.service'
@Component({
  selector: 'app-newComponent',
  templateUrl: './newComponent.component.html',
  styleUrls: ['./newComponent.component.scss'],

})
export class NewComponentComponent implements OnInit {
  @Input()
  index : number;
  @Input() simple_datas:any;

@Output() deleteId = new EventEmitter<number>();
@Output() togeteId = new EventEmitter<number>();
  closeResult = '';
  isActivetxt:any;
  constructor(private modalService: NgbModal,private CustomService :CustomService) {}
  isActive :boolean = true;


  simpledata:any = [];
  delectActive:boolean = false;

  ngOnInit() {
    this.isActivetxt = 'Deactive';
  }
  status:boolean = true;
  ;
  makeactive(id:number){
    this.status = !this.status;
   this.CustomService.updatedata(this.index,this.status);
  }
  isActiveBtn(){
   this.isActive = !this.isActive;
  }


sendid(id:number){
let dataservice = new CustomService;
dataservice.togetdata(id);
this.CustomService.togetdata(id);
  }
  deleteimage(data:number){
   this.deleteId.emit(data);
  }
mycustomData = [{
  Vname:'yamaha',
  description :'yamaha is the 2 wheeler . vety Atractive and less fluel consumption vehicle ',
  prize:'100000',
  color:'white',
  model:'2020',
  engine:'petrol',
  isActive:'1',
  image : 'assets/yamaha.jpg'


},{
  Vname:'yamaha',
  description :'yamaha is the 2 wheeler . vety Atractive and less fluel consumption vehicle ',
  prize:'104000',
  color:'black',
  model:'2020',
  engine:'petrol',
  isActive:'1',
  image : 'assets/yamaha_black.jpg'


}
,{
  Vname:'yamaha blue',
  description :'yamaha is the 2 wheeler . vety Atractive and less fluel consumption vehicle ',
  prize:'100000',
  color:'blue',
  model:'2020',
  engine:'petrol',
  isActive:'0',
  image : 'assets/yamaha_blue.jpg'


}
,{
  Vname:'yamaha Yellow',
  description :'yamaha is the 2 wheeler . vety Atractive and less fluel consumption vehicle ',
  prize:'100000',
  color:'yellow',
  model:'2020',
  engine:'petrol',
  isActive:'0',
  image : 'assets/yamaha_yellow.jpg'


}
,{
  Vname:'yamaha orange',
  description :'yamaha is the 2 wheeler . vety Atractive and less fluel consumption vehicle ',
  prize:'100000',
  color:'blue',
  model:'2020',
  engine:'petrol',
  isActive:'1',
  image : 'assets/yamaha_orange.jpg'


}

]
  open(content:any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.isActiveBtn();
      if(this.isActive == true){
        this.isActivetxt = 'DeActive';
        this.delectActive = false;
      }else{
        this.isActivetxt = 'Active';
        this.delectActive = true;
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
