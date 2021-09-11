import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details/employee-details.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information/information.component';
import { OfficeLocComponent } from './office-loc/office-loc.component';



const routes: Routes = [
  {path:'',component:InformationComponent},
  { path: 'office-loc', component: OfficeLocComponent},
  { path: 'header', component: HeaderComponent},
  {path:'employee-details',component:EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
