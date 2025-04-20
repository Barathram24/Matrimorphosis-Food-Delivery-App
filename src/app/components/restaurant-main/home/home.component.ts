import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule],
  standalone: true
})

export class HomeComponent {

  constructor(private router: Router) {}

  filterByCategory(category: string): void {
    this.router.navigate(['/restaurants'], { queryParams: { category } });
  }
}
