import { BrowserModule } from'@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from'@angular/common/http';
import { ChooseFileComponent } from './choose-file/choose-file.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
// import entire SDK


@NgModule({
declarations: [
	AppComponent,
 ChooseFileComponent,

],
imports: [
	BrowserModule,
	HttpClientModule,
	NgxDocViewerModule,

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
