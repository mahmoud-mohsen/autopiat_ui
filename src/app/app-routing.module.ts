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
  {path: 'car/:id',
  component: CarViewComponent,
  pathMatch: 'full',
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
