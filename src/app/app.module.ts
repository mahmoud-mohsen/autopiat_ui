import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TypeViewComponent } from './component/typeView/typeView.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarFilterComponent } from './component/car-filter/car-filter.component';
import { LayoutComponent } from './component/layout/layout.component';
import { CarViewComponent } from './component/car-view/car-view.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeViewComponent,
    CarFilterComponent,
    LayoutComponent,
    CarViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
