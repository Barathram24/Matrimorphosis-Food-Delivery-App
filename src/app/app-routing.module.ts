import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component'; // ✅ Add this line if not already

const routes: Routes = [
  { path: '', component: HomeComponent }, // homepage
  { path: 'restaurants', component: RestaurantListComponent }, // restaurant listing
  { path: 'restaurant/:id', component: RestaurantDetailComponent } // ✅ detail route with comma above
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

