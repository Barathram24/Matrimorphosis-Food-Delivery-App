import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  allRestaurants: any[] = [];
  filteredRestaurants: any[] = [];
  currentIndex: number = 0;
  intervalId: any;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.allRestaurants = data;
      this.filteredRestaurants = data;
      this.startAutoSlide();
    });
  }

  filterByCategory(category: string): void {
    const keyword = category.toLowerCase();
    this.filteredRestaurants = this.allRestaurants.filter(restaurant =>
      restaurant.type.toLowerCase().includes(keyword)
    );
    this.currentIndex = 0;
    this.restartAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      if (this.filteredRestaurants.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.filteredRestaurants.length;
      }
    }, 3000); // Change restaurant every 3 seconds
  }

  restartAutoSlide(): void {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
