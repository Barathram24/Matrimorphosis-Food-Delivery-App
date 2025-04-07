import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title style="padding-left: 16px;text-align:center;">Add Delivery Address</h2>
    <form [formGroup]="addressForm" (ngSubmit)="submitAddress()" style="padding: 16px;">
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>House No</mat-label>
        <input matInput formControlName="houseNo">
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Street Name</mat-label>
        <input matInput formControlName="streetName">
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Landmark (Optional)</mat-label>
        <input matInput formControlName="landmark">
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Contact Name</mat-label>
        <input matInput formControlName="contactName">
      </mat-form-field>

      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Contact Number</mat-label>
        <input matInput formControlName="contactNumber">
      </mat-form-field>

      <div style="text-align: right; margin-top: 20px;">
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button mat-flat-button color="primary" type="submit" >Submit</button>
      </div>
    </form>
  `,
  styles: [`
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }
  `]
})
export class AddressFormDialogComponent {
  addressForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddressFormDialogComponent>
  ) {
    this.addressForm = this.fb.group({
      houseNo: ['', Validators.required],
      streetName: ['', Validators.required],
      landmark: [''],
      contactName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  submitAddress() {
    if (this.addressForm.valid) {
      this.dialogRef.close(this.addressForm.value);
    } else {
      this.addressForm.markAllAsTouched();
    }
  }
}
