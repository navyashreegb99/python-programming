import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficeLocComponent } from './office-loc/office-loc.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {​​​ AgGridModule }​​​ from'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { EmployeeDetailsComponent } from './employee-details/employee-details/employee-details.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeLocComponent,
   EmployeeDetailsComponent,
   FooterComponent,
    HeaderComponent,
    InformationComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AgGridModule.withComponents(null),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
