import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cancel-order-modal',
  templateUrl: './cancel-order-modal.component.html',
  styleUrls: ['./cancel-order-modal.component.scss']
})
export class CancelOrderModalComponent {
  // @Output() close = new EventEmitter<void>();
  // @Input() orderUUID!: string; 
  // constructor(private router: Router,private http: HttpClient) { }

  // onClose() {
  //   this.close.emit(); // optional if you want to notify parent
  //   this.router.navigate(['/']);
  // }
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.cancelLatestOrder();
  }

  cancelLatestOrder() {
    this.http.get('http://localhost:3000/orders?user_id=1').subscribe({
      next: (res: any) => {
        const latestOrder = res?.data?.[0]; // Get the first order
        if (!latestOrder || !latestOrder.id) {
          console.error('No valid order found to cancel.');
          alert('No order found to cancel.');
          return;
        }

        const orderId = latestOrder.id;
        this.http.delete(`http://localhost:3000/orders/orders/${orderId}`).subscribe({
          next: () => {
            alert('Order cancelled successfully');
            this.router.navigate(['/order-checkout']);
          },
          error: (err) => {
            console.error('Error cancelling order:', err);
            alert('Failed to cancel the order. Please try again.');
          }
        });
      },
      error: (err) => {
        console.error('Error fetching latest order:', err);
        alert('Failed to retrieve order data.');
      }
    });
  }
}
