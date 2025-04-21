import { Routes } from '@angular/router';
import { OrderCheckoutComponent } from './components/order-checkout/order-checkout.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { RouterModule } from '@angular/router';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { HomeComponent } from './components/restaurant-main/home/home.component';
import { RestaurantListComponent } from './components/restaurant-main/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-main/restaurant-detail/restaurant-detail.component';

export const routes: Routes = [
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
  { path: 'restaurants', component: RestaurantListComponent }, // restaurant listing
    { path: 'restaurant/:id', component: RestaurantDetailComponent }
];

