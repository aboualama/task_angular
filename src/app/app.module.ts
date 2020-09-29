
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgxPrintModule} from 'ngx-print';
import { ExamComponent } from './exam/exam.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, NgxPrintModule, AppRoutingModule, BrowserAnimationsModule, MatGridListModule, MatListModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
