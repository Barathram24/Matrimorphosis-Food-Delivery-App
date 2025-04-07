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
      name: 'Margherita Pizza',
      qty: 1,
      price: 8,
      description: 'Our regular two patty-pizza with cheese and tomato sauce'
    },
    {
      name: 'Garlic Bread',
      qty: 2,
      price: 10,
      description: 'Soft garlic bread with buttery flavor'
    }
  ];

  subtotal = 0;
  tax = 0;
  discount = 0;
  total = 0;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      deliveryAddress: ['', Validators.required]
    });

    
    this.calculateTotals();
  }

  calculateTotals() {
    this.subtotal = this.selectedItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    this.tax = this.subtotal * 0.05;
    this.discount = this.subtotal > 20 ? 5 : 0;
    this.total = this.subtotal + this.tax - this.discount;
  }
  openAddressPopup() {
    const dialogRef = this.dialog.open(AddressFormDialogComponent, {
      width: '500px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const fullAddress = `${result.houseNo}, ${result.streetName}, ${result.landmark || ''} (Contact: ${result.contactName}, ${result.contactNumber})`;
        this.checkoutForm.get('deliveryAddress')?.setValue(fullAddress);
      }
    });
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
        total: this.total
      };

      console.log('Order Placed:', payload);
    }
  }
}
