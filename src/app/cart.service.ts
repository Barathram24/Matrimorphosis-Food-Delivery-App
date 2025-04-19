import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './env';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCartItems(userId: string) {
    return this.http.get(`${this.apiUrl}/cart`, {
      params: { user_id: userId }
    });
  }

  addToCart(item: {
    user_id: string;
    restaurant_id: number;
    product_id: number;
    qty: number;
  }) {
    return this.http.post(`${this.apiUrl}/cart`, item);
  }

  removeFromCart(cartId: number) {
    return this.http.delete(`${this.apiUrl}/cart/${cartId}`);
  }
}