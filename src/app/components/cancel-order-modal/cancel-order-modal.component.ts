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
  constructor(private router: Router,private http: HttpClient) { }

  // onClose() {
  //   this.close.emit(); // optional if you want to notify parent
  //   this.router.navigate(['/']);
  // }
  public Uuid:any[]=[];
  public fetch(){
    this.http.get("http://localhost:3000/orders?user_id=1").subscribe((res:any)=>{
      this.Uuid=res.data;
      console.log(this.Uuid);
    })
  }
  ngOnInit(): void {
    this.fetch();
    this.onClose();
  }
  public onClose() {
    if (!this.Uuid) {
      console.error('Order UUID is required to cancel order');
      return;
    }

    this.http.delete(`/orders/${this.Uuid}`).subscribe({
      next: () => {
        alert('Order cancelled successfully');
        this.router.navigate(['/order-checkout']);
      },
      error: (err) => {
        console.error('Error cancelling order', err);
        alert('Failed to cancel the order. Please try again.');
      }
    });
  }
}
