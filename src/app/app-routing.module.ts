import { NewNewsComponent } from './component/new-news/new-news.component';
import { NewCarComponent } from './component/new-car/new-car.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ReservationProcessComponent } from './component/reservation-process/reservation-process.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { AboutComponent } from './component/about/about.component';
import { AuthGuard } from './AuthGuard';
import { LoginComponent } from './component/login/login.component';
import { CarViewComponent } from './component/car-view/car-view.component';
import { CarFilterComponent } from './component/car-filter/car-filter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TypeViewComponent } from './component/typeView/typeView.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'filter', component: CarFilterComponent},
  {path: 'reservation', component: ReservationComponent,canActivate:[AuthGuard]},
  {path: 'car/:id',component: CarViewComponent,pathMatch: 'full'},
  {path: 'reservation/:id',component: ReservationProcessComponent,pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'new', component: NewCarComponent},
  {path: 'news/add', component: NewNewsComponent,canActivate:[AuthGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
