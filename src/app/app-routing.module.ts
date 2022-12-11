import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  {path:'employees', component:EmployeeListComponent},
  {path:'createEmployee',component:CreateEmployeeComponent},
  {path:'',redirectTo:'employees', pathMatch:'full'},
  {path:'addEmployees', component:FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
