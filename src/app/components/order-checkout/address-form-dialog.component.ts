import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-address-form-dialog',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title style="padding-left: 16px; text-align: center;">Add Delivery Address</h2>
    <div class="dialog-scroll-container">
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
          <mat-label>City</mat-label>
          <input matInput formControlName="city">
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>State</mat-label>
          <input matInput formControlName="state">
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Pincode</mat-label>
          <input matInput formControlName="pincode">
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
          <button class="subbtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
styles: [`
  .dialog-scroll-container {
    max-height: 70vh;
    overflow-y: auto;
    padding: 16px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }

  .subbtn {
    background-color: #ffc107ac;
    color: #000;
    border: none;
    padding: 10px;
    border-radius: 10px;
  }

  .subbtn:hover {
    background-color: #ffb300;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Inter', sans-serif;
  }

  .full-width {
    width: 100%;
  }
  .mat-form-field-appearance-outline .mat-form-field-outline {
  stroke: #ffc107 !important;
}

.mat-form-field-appearance-outline .mat-form-field-outline-thick {
  stroke: #ffc107 !important;
}

.mat-form-field-appearance-outline .mat-form-field-outline-start,
.mat-form-field-appearance-outline .mat-form-field-outline-gap,
.mat-form-field-appearance-outline .mat-form-field-outline-end {
  stroke: #ffc107 !important;
}

.mat-form-field-label {
  color: #000 !important;
}

input.mat-input-element::placeholder {
  color: #000 !important;
  opacity: 1 !important;
}

input.mat-input-element {
  color: #000 !important;
}

  /* ↓↓↓ STRONG styles for yellow border & black placeholders ↓↓↓ */
  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {
    color: #ffc107 !important;
    stroke: #ffc107 !important;
    border-color: #ffc107 !important;
  }

  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline-start,
  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline-end,
  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline-gap {
    border-color: #ffc107 !important;
    stroke: #ffc107 !important;
  }

  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline-thick {
    stroke: #ffc107 !important;
  }

  ::ng-deep .mat-form-field-appearance-outline .mat-form-field-flex {
    background-color: #fff8dc;
    height: 38px !important;
    align-items: center;
  }

  ::ng-deep input.mat-input-element {
    height: 20px !important;
    padding: 4px 10px !important;
    font-size: 13px !important;
    color: #000 !important;
  }

  /* Make placeholder/label black */
  ::ng-deep .mat-form-field-label {
    color: #000 !important;
  }

  ::ng-deep .mat-input-element::placeholder {
    color: #000 !important;
    opacity: 1 !important;
  }

  button[mat-button] {
    font-weight: 500;
    
  }

  button[mat-flat-button] {
    background-color: #ff6f00;
    color: #fff;
    border-radius: 6px;
    font-weight: bold;
    padding: 8px 16px;
  }

  button[mat-flat-button]:hover {
    background-color: #e65c00;
  }

  button[mat-button]:hover {
    color: #000;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 20px;
    }

    form {
      padding: 12px;
    }

    mat-form-field {
      font-size: 13px;
    }

    button[mat-flat-button] {
      width: 100%;
      margin-top: 12px;
    }

    div[style*="text-align: right"] {
      text-align: center !important;
    }
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
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
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
