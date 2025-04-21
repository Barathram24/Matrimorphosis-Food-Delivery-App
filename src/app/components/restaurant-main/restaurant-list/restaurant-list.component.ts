import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router'; // ✅ import ActivatedRoute
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  allRestaurants: any[] = [];
  restaurants: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    // Fetch all restaurants from backend
    this.restaurantService.getRestaurants().subscribe(
      (data: any[]) => {
        this.allRestaurants = data;
        this.applyFilter(); // Apply filter after loading data
      },
      error => {
        console.error('Error fetching restaurants:', error);
      }
    );

    // Listen for category filter in URL
    this.route.queryParams.subscribe(() => {
      this.applyFilter();
    });
  }

  applyFilter(): void {
    const category = this.route.snapshot.queryParamMap.get('category');
    if (category) {
      const keyword = category.toLowerCase();
      this.restaurants = this.allRestaurants.filter(r =>
        r.name.toLowerCase().includes(keyword) ||
        r.type.toLowerCase().includes(keyword)
      );
    } else {
      this.restaurants = this.allRestaurants;
    }
  }
}
