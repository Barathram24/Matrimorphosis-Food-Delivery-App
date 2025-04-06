import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-order-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCard,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.scss']
})
export class OrderCheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

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
      price: 3.5,
      description: 'Soft garlic bread with buttery flavor'
    }
  ];
  

  subtotal = 0;
  tax = 0;
  discount = 0;
  total = 0;

  constructor(private fb: FormBuilder) {}

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

      console.log('✅ Order Placed:', payload);
      // Connect to backend here
    }
  }
}
