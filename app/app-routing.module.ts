import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpHomeComponent } from './employees/emp-home/emp-home.component';
import { UpdateskillsComponent } from './employees/updateskills/updateskills.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { AddjobComponent } from './manager/addjob/addjob.component';
import { AddskillComponent } from './manager/addskill/addskill.component';
import { OpeningsComponent } from './manager/openings/openings.component';
import { EmployeeComponent } from './manager/employee/employee.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'employees', component:EmpHomeComponent},
  { path:'employees/updateskill', component:UpdateskillsComponent},
  { path:'manager', component:ManagerHomeComponent},
  {path: 'manager/addjob',component: AddjobComponent},
  {path: 'manager/addskill',component: AddskillComponent},
  {path: 'manager/openings',component: OpeningsComponent},
  {path:'manager/employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
