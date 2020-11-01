import { NewNewsComponent } from './component/new-news/new-news.component';
import { NewCarComponent } from './component/new-car/new-car.component';
import { AuthGuard } from './AuthGuard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TypeViewComponent } from './component/typeView/typeView.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarFilterComponent } from './component/car-filter/car-filter.component';
import { LayoutComponent } from './component/layout/layout.component';
import { CarViewComponent } from './component/car-view/car-view.component';
import { HttpConfigInterceptor } from './services/interceptor/httpconfig.interceptor';
import { LoginComponent } from './component/login/login.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AboutComponent } from './component/about/about.component';
import { ReservationProcessComponent } from './component/reservation-process/reservation-process.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './component/registration/registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WaitingExistenceViewComponent } from './component/waiting-existence-view/waiting-existence-view.component';
import { AgreementViewComponent } from './component/agreement-view/agreement-view.component';
import { ReservationConfirmationViewComponent } from './component/reservation-confirmation-view/reservation-confirmation-view.component';
import { NewCarTypeComponent } from './component/new-car-type/new-car-type.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypeViewComponent,
    CarFilterComponent,
    LayoutComponent,
    CarViewComponent,
    LoginComponent,
    ReservationComponent,
    AboutComponent,
    ReservationProcessComponent,
    RegistrationComponent,
    NewCarComponent,
    NewNewsComponent,
    WaitingExistenceViewComponent,
    AgreementViewComponent,
    ReservationConfirmationViewComponent,
    NewCarTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
