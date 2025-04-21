import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // ✅ Get list of all restaurants
  getRestaurants(): Observable<any> {
    return this.http.get(`${this.baseUrl}/restaurants`);
  }

  // ✅ Get products/menu for a specific restaurant (used as 'getRestaurantById')
  getRestaurantById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }
}
