import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-order-modal',
  templateUrl: './cancel-order-modal.component.html',
  styleUrls: ['./cancel-order-modal.component.scss']
})
export class CancelOrderModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) { }

  onClose() {
    this.close.emit(); // optional if you want to notify parent
    this.router.navigate(['/']);
  }
}
