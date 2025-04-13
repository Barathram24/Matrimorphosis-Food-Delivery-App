import { Routes } from '@angular/router';
import { OrderCheckoutComponent } from './components/order-checkout/order-checkout.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { RouterModule } from '@angular/router';
export const routes: Routes = [
  
  {
    path: '',
    component: OrderCheckoutComponent
  },
  { path: 'order-success', component: OrderSuccessComponent},
  {
    path: 'order-details',
    component: OrderDetailsComponent
  }
];
