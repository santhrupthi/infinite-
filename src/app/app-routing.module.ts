import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsoftComponent } from './schoolsoft/schoolsoft.component';
import {StaffsComponent} from './schoolsoft/Staffs/Staffs.component';
import {StudentsComponent} from './schoolsoft/Students/Students.component';
import{TransportsComponent} from './schoolsoft/transports/transports.component';
import {StudentDashboardComponent} from './schoolsoft/Students/student-dashboard/student-dashboard.component';
import{PageNotFoundComponent} from './schoolsoft/page-NotFound/page-NotFound.component';
import {ParentsComponent} from './schoolsoft/Parents/Parents.component';
import { SimpleformComponent } from './newComponent/simpleform/simpleform.component';
import { LoginComponent } from './schoolsoft/login/login.component';
import { LogoutComponent } from './schoolsoft/logout/logout.component';
import { RegistrationComponent } from './schoolsoft/registration/registration.component';
import { AuthGuardService } from './auth/authGuard.service';

const appRoutes : Routes = [
  {path:'simple', component:SimpleformComponent},
{path:'dashboad',component:StudentDashboardComponent, canActivate: [AuthGuardService]},
{path:'staff',component:StaffsComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'reg',component:RegistrationComponent},
{path:'student',component:StudentsComponent},
{path:'parent',component:ParentsComponent},
{path:'transport/:id/:name',component:TransportsComponent},
{path:'not-found',component:PageNotFoundComponent},
{path:'**', redirectTo:'not-found'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
