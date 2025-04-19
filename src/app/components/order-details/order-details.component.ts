import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // for mat-card
import { MatButtonModule } from '@angular/material/button'; // for mat-button
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { CancelOrderModalComponent } from '../cancel-order-modal/cancel-order-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-order-details',
  imports: [CommonModule, MatCardModule, MatButtonModule, CancelOrderModalComponent,HttpClientModule],
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
  showCancelModal = false;

  trackingStatus = 'Your order is out for delivery 🚴';
  constructor(private router: Router,private sanitizer: DomSanitizer,private http:HttpClient) {}
  public orderdet:any[] = [];
  public orderpro:any=null;
  public proname:any[]=[];
  public loc:any[]=[];
  location(){
    this.http.get('http://localhost:3000/cart?user_id=1').subscribe((res:any)=>{
      this.loc=res.data;
    })
  }
  fetchorder(){
    this.http.get('http://localhost:3000/orders?user_id=1').subscribe((res: any) => {
      this.orderdet = res.data;
      this.orderpro=res.data[0];
      // this.proname=res.data[0];
      // this.orderdet.orders.forEach((item: any))
      if (this.orderdet.length > 0) {
        this.orderpro = this.orderdet[0]; // This includes contact, address, and orders
        const items = this.orderpro.orders || [];
      this.subtotal = items.reduce((acc: number, item: any) => {
        const itemTotal = (item.product_price || 0) * (item.qty || 1);
        return acc + itemTotal;
      }, 0);
      this.gst=this.subtotal*0.18;
      this.customer.totalOrders = items.length;
      this.total = this.subtotal + this.deliveryfee + this.gst - this.discount;
      console.log("Pro item",this.proname);
      console.log("order Items:", this.orderdet);
  }})}
  ngOnInit() {
    const address = `${this.shippingAddress.houseno} ${this.shippingAddress.streetname}, ${this.shippingAddress.city}, ${this.shippingAddress.state} ${this.shippingAddress.pincode}`;
    const googleMapLink = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(googleMapLink);
    this.fetchorder();
    this.location();
  }
 
  cancelOrder() {
    this.router.navigate(['./order-sucess']);
  }
  trackOrder() {
    this.router.navigate(['./track-order']);
  }
  goToHome() {
    this.router.navigate(['./order-sucess']);
  }
  goToCheckout() {
    console.log('Navigating to order-checkout...');
    this.router.navigate(['/']);
  }
  
}
