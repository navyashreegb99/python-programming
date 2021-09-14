import { BrowserModule } from'@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from'@angular/common/http';
// import entire SDK


@NgModule({
declarations: [
	AppComponent,

],
imports: [
	BrowserModule,
	HttpClientModule,

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
