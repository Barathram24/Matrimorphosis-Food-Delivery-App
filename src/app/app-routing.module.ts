import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/restaurant-main/home/home.component';
import { RestaurantListComponent } from './components/restaurant-main/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-main/restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // homepage
  { path: 'restaurants', component: RestaurantListComponent }, // restaurant listing
  { path: 'restaurant/:id', component: RestaurantDetailComponent } // detail page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
