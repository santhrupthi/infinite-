import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './newComponent/newComponent.component';
import {ParentsComponent} from './schoolsoft/Parents/Parents.component';
import { SimpleformComponent } from './newComponent/simpleform/simpleform.component';
import { FormsModule } from '@angular/forms';
import { NgbModule,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SchoolsoftComponent } from './schoolsoft/schoolsoft.component';
import {StaffsComponent} from './schoolsoft/Staffs/Staffs.component';
import {StudentsComponent} from './schoolsoft/Students/Students.component';
import{TransportsComponent} from './schoolsoft/transports/transports.component';
import {StudentDashboardComponent} from './schoolsoft/Students/student-dashboard/student-dashboard.component';
import{PageNotFoundComponent} from './schoolsoft/page-NotFound/page-NotFound.component';
import {AuthService} from './auth/auth.service';
import { from } from 'rxjs';
import { AuthGuardService } from './auth/authGuard.service';



@NgModule({
  declarations: [
    AppComponent,
    SimpleformComponent,
    NewComponentComponent,
    StudentDashboardComponent,
    ParentsComponent,
    StudentsComponent,
      SchoolsoftComponent,
      StaffsComponent,TransportsComponent,
      PageNotFoundComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,

    NgbModule,FormsModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [SchoolsoftComponent]
})

export class AppModule { }
