import { Component } from '@angular/core';
import {CustomService} from './custom.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers :[CustomService]
})
export class AppComponent {
  title = 'thrupthi';
  constructor(private CustomService :CustomService){

  }
}
