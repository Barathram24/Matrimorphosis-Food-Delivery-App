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
    MatDialogModule  // ✅ Include dialog module here
  ],
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss']
})
export class OrderCheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  addressForm!: FormGroup;
  showAddressForm = false;

  selectedItems = [
    {
      restaurantId: 1,
    restaurantName: 'Thambi Annan\'s Biriyani Hotel',
    restaurantLocation: 'Gandhipuram',
    itemName: 'Chicken Fry',
    price: 216,
    qty: 1,
      image: 'ZOMIBI - Classic Margarita Pizza_11zon.avif',
      description: 'Our regular two patty-pizza with cheese and tomato sauce'
    },
    {
      restaurantId: 1,
      restaurantName: 'Thambi Annan\'s Biriyani Hotel',
      restaurantLocation: 'Gandhipuram',
      itemName: 'Mutton Biryani',
      price: 320,
      qty: 1,
      image: 'US PIZZA AND FRIED CHICKEN - Spicy Garlic Bread.avif',
      description: 'Soft garlic bread with buttery flavor'
    }
  ];

  subtotal = 0;
  tax = 0;
  discount = 0;
  total = 0;
  delivery =0;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private router: Router) {} // Declare router once here

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      deliveryAddress: ['', Validators.required]
    });

    this.calculateTotals();
  }
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
    this.subtotal = this.selectedItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    this.tax = this.subtotal * 0.05;
    this.discount = this.subtotal > 20 ? 5 : 0;
    this.total = this.subtotal + this.tax - this.discount;
    this.delivery =20;
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
    this.calculateTotal(); // Optional: update price total
  }
  
  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.calculateTotal(); // Optional: update price total
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
        items: this.selectedItems,
        deliveryAddress: this.checkoutForm.value.deliveryAddress,
        subtotal: this.subtotal,
        tax: this.tax,
        discount: this.discount,
        total: this.total,
        delivery: this.delivery
      };

      console.log('Order Placed:', payload);
    }
  }
}
