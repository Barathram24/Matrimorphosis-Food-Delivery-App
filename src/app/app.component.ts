import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // ✅ Step 1: import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[RouterModule],
  standalone: true
})
export class AppComponent {
  title = 'FOOD_DELIVERY_APP';

  constructor(private router: Router) {} // ✅ Step 2: inject Router

  // ✅ Step 3: Add this method
  filterByCategory(category: string) {
    this.router.navigate(['/restaurants'], { queryParams: { category } });
  }
}
