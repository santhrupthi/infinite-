import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Router} from '@angular/router'


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  Gotostd(){
this.router.navigate(['/student']);
  }

}
