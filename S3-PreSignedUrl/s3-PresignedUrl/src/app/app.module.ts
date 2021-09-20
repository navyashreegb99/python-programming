import { BrowserModule } from'@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from'@angular/common/http';
import { ChooseFileComponent } from './choose-file/choose-file.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
// import entire SDK


@NgModule({
declarations: [
	AppComponent,
 ChooseFileComponent,
 FooterComponent,
 HeaderComponent,

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
