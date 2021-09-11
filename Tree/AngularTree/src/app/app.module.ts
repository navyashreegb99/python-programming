import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TreeModule } from '@circlon/angular-tree-component';
import { TreePracticeComponent } from './tree-practice/tree-practice.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    TreePracticeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
