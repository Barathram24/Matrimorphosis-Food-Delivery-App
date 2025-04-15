// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private http: HttpClient) {}

  getSelectedItems(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/selected-items');
  }
}
