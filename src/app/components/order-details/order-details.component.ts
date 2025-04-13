import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // for mat-card
import { MatButtonModule } from '@angular/material/button'; // for mat-button
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']  // not `styleUrl`
})

export class OrderDetailsComponent {
  order={
    orderid:"1"
  };
  contact = {
    email: 'barath764@mail.com',
    phone: '7339585803'
  };
resturant={
  name: "Thambi Annan's Biriyani",
  location: "Gandhipuram",
  fassai: "123456789983"

};
  customer = {
    name: 'Bagus Fikri',
    totalOrders: 2
  };

  shippingAddress = {
    name: 'Barath',
    houseno: '20',
    streetname: 'Vattamalaipalayam',
    city: 'Coimbatore',
    state: 'Tamilnadu',
    pincode: '642005',
    // country: 'United States'
  };

  paymentMethod = {
    last4: '3634'
  };

  selectedItems = [
    {
      name: 'Margherita Pizza',
      image: 'ZOMIBI - Classic Margarita Pizza_11zon.avif',
      // sku: 'Mac-1000',
      // color: 'Grey',
      qty: 1,
      price: 20,
      description: 'Our regular two patty-pizza with cheese and tomato sauce'
          },
    {
      name: 'Garlic Bread',
      image: 'US PIZZA AND FRIED CHICKEN - Spicy Garlic Bread.avif',
      // sku: 'Mac-5006',
      // color: 'Silver',
      qty: 1,
      price: 10,
      description: 'Soft garlic bread with buttery flavor'
    }
  ];
  mapUrl!: SafeResourceUrl;
  subtotal = 508.02;
  deliveryfee=20;
  gst=58;
  discount=0;
  total = 7508.02;

  trackingStatus = 'Your order is out for delivery 🚴';

  constructor(private router: Router,private sanitizer: DomSanitizer) {}
  ngOnInit() {
    const address = `${this.shippingAddress.houseno} ${this.shippingAddress.streetname}, ${this.shippingAddress.city}, ${this.shippingAddress.state} ${this.shippingAddress.pincode}`;
    const googleMapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(googleMapLink);
  }
  cancelOrder() {
    this.router.navigate(['./order-sucess']);
  }
  goToHome() {
    this.router.navigate(['./order-sucess']);
  }
  goToCheckout() {
    console.log('Navigating to order-checkout...');
    this.router.navigate(['/']);
  }
}
