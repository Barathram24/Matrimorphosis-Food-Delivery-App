import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddressFormDialogComponent } from '../order-checkout/address-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DiscountDialogComponent } from './discount-dialog.component' // path as per your structure
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { CartService } from '../../cart.service';
@Component({
  selector: 'app-order-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCard,
    MatButton,
    MatFormField,
    MatInput,
    MatDialogModule,  // ✅ Include dialog module here
    HttpClientModule
  ],
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss']
})
export class OrderCheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  addressForm!: FormGroup;
  showAddressForm = false;

  // selectedItems = [
  //   {
  //     restaurantId: {getjsonvalue.restaurant_id},
  //   restaurantName: 'Thambi',
  //   restaurantLocation: 'Gandhipuram',
  //   itemName: 'Chicken Fry',
  //   price: 216,
  //   qty: 1,
  //     image: 'ZOMIBI - Classic Margarita Pizza_11zon.avif',
  //     description: 'Our regular two patty-pizza with cheese and tomato sauce'
  //   },
  //   {
  //     restaurantId: 1,
  //     restaurantName: 'Thambi Annan\'s Biriyani Hotel',
  //     restaurantLocation: 'Gandhipuram',
  //     itemName: 'Mutton Biryani',
  //     price: 320,
  //     qty: 1,
  //     image: 'US PIZZA AND FRIED CHICKEN - Spicy Garlic Bread.avif',
  //     description: 'Soft garlic bread with buttery flavor'
  //   }
  // ];

  subtotal = 0;
  tax = 0;
  discount = 0;
  total = 0;
  delivery =0;
  public selectedItems: any[] = [];
  public getjsonvalue:any []=[];
  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router,private http: HttpClient ) {} // Declare router once here

  public fetchdetails() {
    this.http.get('http://localhost:3000/cart?user_id=1').subscribe((res: any) => {
      this.getjsonvalue = res.data;
      console.log("Cart Items:", this.getjsonvalue);
  
      // Group items by restaurant_id
      const groupedItems: any = {};
  
      this.getjsonvalue.forEach((item: any) => {
        if (!groupedItems[item.restaurant_id]) {
          groupedItems[item.restaurant_id] = {
            restaurantId: item.restaurant_id,
            restaurantName: item.restaurant_name,
            restaurantLocation: item.restaurant_location,
            items: []
          };
        }
  
        groupedItems[item.restaurant_id].items.push({
          itemName: item.product_name,
          price: item.product_price,
          qty: item.qty,
          description: item.product_description,
          image: 'placeholder.jpg' // or use item.product_image if available
        });
      });
  
      // Convert grouped object to array for *ngFor usage
      this.selectedItems = Object.values(groupedItems);
  
      console.log("Grouped Cart Items:", this.selectedItems);
      this.calculateTotals();
    });
  }
  
public updatecart(){
  this.http.get('http://localhost:3000/cart').subscribe((res:any)=>{
    this.getjsonvalue=res.data;
    console.log("Cart Items:", this.getjsonvalue);
  })
  }
  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      deliveryAddress: ['', Validators.required]
    });
    this.fetchdetails();
    // this.updatecart();
// this.loadCartItems();
    this.placeOrder();
    this.calculateTotals();
  }
  // loadCartItems() {
  //   this.cartService.getCartItems('1').subscribe({
  //     next: (response: any) => {
  //       this.selectedItems = response.data;
  //       this.calculateTotals();
  //     },
  //     error: (err) => {
  //       console.error('Error loading cart:', err);
  //     }
  //   });
  // }

  openDiscountPopup() {
    const dialogRef = this.dialog.open(DiscountDialogComponent, {
      data: { subtotal: this.subtotal }
    });
  
    dialogRef.afterClosed().subscribe(discountValue => {
      if (discountValue) {
        this.discount = Math.floor(discountValue); // or round to 2 decimals
      }
    });
  }
  calculateTotals() {
    let subtotal = 0;
  
    // Loop through each restaurant and its items
    this.selectedItems.forEach((group: any) => {
      group.items.forEach((item: any) => {
        subtotal += item.qty * item.price;
      });
    });
  
    this.subtotal = subtotal;
    this.tax = this.subtotal * 0.05; // 5% GST
    this.delivery = 20; // flat delivery fee
  
    // Flat ₹5 discount for orders above ₹20
    this.discount = this.subtotal > 20 ? 5 : 0;
  
    this.total = this.subtotal + this.tax + this.delivery - this.discount;
  }
  

  openAddressPopup() {
    const dialogRef = this.dialog.open(AddressFormDialogComponent, {
      width: '500px',
      maxHeight: '90vh',
      autoFocus: false
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const fullAddress = `${result.houseNo}, ${result.streetName}, ${result.landmark || ''} (Contact: ${result.contactName}, ${result.contactNumber})`;
        this.checkoutForm.get('deliveryAddress')?.setValue(fullAddress);
      }
    });
  }
  increaseQty(item: any) {
  item.qty++;
  this.calculateTotals(); // Recalculate totals based on new quantity
}

decreaseQty(item: any) {
  if (item.qty > 1) {
    item.qty--;
    this.calculateTotals(); // Recalculate totals after decrement
  }
}

  calculateTotal() {
    this.subtotal = this.selectedItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    this.total = this.subtotal + this.delivery; // Adjust as per your calculation
  }
    
  sendOrder() {
    console.log('Order sent! Navigating to success page...');
    this.router.navigate(['/order-success']);
  }

  toggleAddressForm() {
    this.showAddressForm = !this.showAddressForm;
  }

  submitAddress() {
    if (this.addressForm.valid) {
      const fullAddress = `${this.addressForm.value.houseNo}, ${this.addressForm.value.streetName}, ${this.addressForm.value.landmark || ''}`.trim();
      this.checkoutForm.get('deliveryAddress')?.setValue(fullAddress);
      console.log('Address Saved:', this.addressForm.value);
      this.showAddressForm = false;
    } else {
      this.addressForm.markAllAsTouched();
    }
  }

  placeOrder() {
    if (this.checkoutForm.valid) {
      const payload = {
        user_id: 1,
        deliveryAddress: this.checkoutForm.value.deliveryAddress,
        subtotal: this.subtotal,
        tax: this.tax,
        discount: this.discount,
        delivery: this.delivery,
        total: this.total,
      };
  
      this.http.post('http://localhost:3000/orders', payload).subscribe({
        next: (res: any) => {
          console.log('Order Placed:', res);
          this.router.navigate(['/order-success']);
        },
        error: (err) => console.error('Order failed:', err)
      });
    }
  }
  
}
