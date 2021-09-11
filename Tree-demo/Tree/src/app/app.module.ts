import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
//import { MatTreeFlattenerModule,MatTreeFlatDataSourceModule} from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatTreeComponent } from './flat-tree/flat-tree.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    FlatTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // MatTreeFlattenerModule,
    MatIconModule,
    MatTreeModule ,
   // MatTreeFlatDataSourceModule,
   HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
