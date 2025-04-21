import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  restaurantId!: number;
  menuItems: any[] = [];
  cart: any[] = [];  // Cart array to hold added items

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.paramMap.get('id')!;

    this.restaurantService.getRestaurantById(this.restaurantId).subscribe(
      (data: any[]) => {
        this.menuItems = data;
      },
      error => {
        console.error('Error loading restaurant menu:', error);
      }
    );
  }

  // Method to add items to the cart
  addToCart(item: any): void {
    this.cart.push(item);
    console.log('Item added to cart:', item);
    // Optionally, you can display a success message or update the cart UI here.
  }
}
