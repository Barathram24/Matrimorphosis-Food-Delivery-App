import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-discount-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  template: `
    <h2 mat-dialog-title style="align-item:center">Apply Discount</h2>
    <form [formGroup]="discountForm" (ngSubmit)="applyDiscount()" style="padding: 16px;">
      <mat-form-field class ="flat"appearance="fill" style="width: 100%; margin-bottom: 12px;">
        <mat-label>Type</mat-label>
        <mat-select formControlName="type" class="dropdown">
          <mat-option value="flat">Flat</mat-option>
          <mat-option value="percentage">Percentage</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="fill" style="width: 100%; margin-bottom: 12px;">
        <mat-label>Value</mat-label>
        <input matInput type="number" formControlName="value" min="1">
      </mat-form-field>

      <div style="text-align: right; margin-top: 16px;">
        <button class="cancel" mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button class="subbtn"  type="submit" [disabled]="discountForm.invalid">Apply</button>
      </div>
    </form>
  `,
  styles: [`
    mat-form-field {
      display: block;
      // background-color:black;
    }
    .dropdown{
      color:black;
      // background-color:white;
    }
    h2 {
      margin: 0;
      padding: 16px;
    }
    .flat{
      color:black;
    }
    .mdc-text-field--filled:not(.mdc-text-field--disabled) {
    background-color:rgb(255, 255, 255);
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
    .dialog-title {
      margin: 0;
      padding: 16px;
      font-size: 20px;
      font-weight: 600;
    }

    .discount-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      min-width: 300px;
    }

    .full-width {
      width: 100%;
    }

    .white-select .mat-select-trigger {
      background-color: white;
    }

    .action-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .apply-button {
      background-color: #ffc107 !important; /* Yellow */
      color: black !important;
    }

    .cancel-button {
      background-color: #000 !important; /* Black */
      color: white !important;
      border-radius:10px;
    }

    mat-form-field {
      display: block;
    }
  `]
})
export class DiscountDialogComponent {
  discountForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DiscountDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { subtotal: number }
  ) {
    this.discountForm = this.fb.group({
      type: ['flat', Validators.required],
      value: [null, [Validators.required, Validators.min(1)]]
    });
  }

  applyDiscount() {
    const { type, value } = this.discountForm.value;
    const subtotal = this.data.subtotal;
    let discountAmount = 0;

    if (type === 'flat') {
      discountAmount = value;
    } else if (type === 'percentage') {
      discountAmount = subtotal * (value / 100);
    }

    this.dialogRef.close(discountAmount);
  }
}
