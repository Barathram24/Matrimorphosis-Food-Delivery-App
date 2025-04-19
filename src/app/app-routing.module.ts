import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/restaurant-main/home/home.component';
import { RestaurantListComponent } from './components/restaurant-main/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-main/restaurant-detail/restaurant-detail.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
    // {
    //   path: '',
    //   component: OrderCheckoutComponent
    // },
    { path: 'order-success', component: OrderSuccessComponent},
    {
      path: 'order-details',
      component: OrderDetailsComponent
    },
    {
      path: 'track-order',
      component: TrackOrderComponent
    },
  { path: '', component: HomeComponent }, // homepage
  { path: 'restaurants', component: RestaurantListComponent }, // restaurant listing
  { path: 'restaurant/:id', component: RestaurantDetailComponent } // detail page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
