import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  restaurantId!: number;
  menuItems: any[] = [];
  cart: any[] = []; 
  restaurant: any;
  cartData = {
    user_id: 1,  // Replace with actual logged-in user's ID
    restaurant_id: 0, // Will be set dynamically
    product_id: 0, // Will be set dynamically
    qty: 1  // Default quantity
  };

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private http: HttpClient
    
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // convert id to number
    this.restaurant = this.restaurantService.getRestaurantById(id);
    this.cartData.restaurant_id = this.restaurant.id;  // Set restaurant id from the details
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

  addToCart(productId: number) {
    // Set the product_id dynamically when the user clicks on a product
    this.cartData.product_id = productId;
    const cartData = {
      user_id: 1,  // Replace with actual logged-in user's ID
      restaurant_id: 0, // Will be set dynamically
      product_id: 0, // Will be set dynamically
      qty: 1  // Default quantity
    };
    // Make the HTTP request to add the item to the cart
    this.http.post("http://localhost:3000/cart", this.cartData).subscribe(
      (response: any) => {
        if (response.message === "Item added to cart successfully") {
          alert("Item added to cart successfully!");
        } else {
          alert(response.message);
        }
      },
      (error) => {
        console.error('Error adding item to cart:', error);
        alert("Failed to add item to cart.");
      }
    );
  }
}
