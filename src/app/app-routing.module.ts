import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'city/:cityName', component: CityComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home` and default is home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
