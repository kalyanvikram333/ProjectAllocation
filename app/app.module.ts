import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { EmployeeComponent } from './manager/employee/employee.component';
import { OpeningsComponent } from './manager/openings/openings.component';
import { AddjobComponent } from './manager/addjob/addjob.component';
import { AddskillComponent } from './manager/addskill/addskill.component';
import { ManagernavbarComponent } from './manager/managernavbar/managernavbar.component';
import { EmpHomeComponent } from './employees/emp-home/emp-home.component';
import { EmpNavComponent } from './employees/emp-nav/emp-nav.component';
import { UpdateskillsComponent } from './employees/updateskills/updateskills.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    EmployeesComponent,
    LoginComponent,
    RegisterComponent,
    ManagerHomeComponent,
    EmployeeComponent,
    OpeningsComponent,
    AddjobComponent,
    AddskillComponent,
    ManagernavbarComponent,
    EmpHomeComponent,
    EmpNavComponent,
    UpdateskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
