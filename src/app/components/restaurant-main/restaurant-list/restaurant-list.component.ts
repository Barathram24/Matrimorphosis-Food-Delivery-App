import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // ✅ import ActivatedRoute
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  allRestaurants = [
    {
      id: 1,
      name: 'Pizza Hut',
      rating: 4.2,
      time: '35–40 mins',
      type: 'Pizzas',
      area: 'Thillai Nagar',
      image: 'https://source.unsplash.com/featured/?pizza'
    },
    {
      id: 2,
      name: 'Aswins Sweets',
      rating: 4.7,
      time: '20–25 mins',
      type: 'Sweets, Indian',
      area: 'Srirangam',
      image: 'https://source.unsplash.com/featured/?sweets'
    },
    {
      id: 3,
      name: 'Cake & Treats',
      rating: 4.3,
      time: '20–25 mins',
      type: 'Cake',
      area: 'TV Kovil',
      image: 'https://source.unsplash.com/featured/?cake'
    },
    {
      id: 4,
      name: '700ml',
      rating: 4.7,
      time: '10–20 mins',
      type: 'Juice',
      area: 'Koothur',
      image: 'https://source.unsplash.com/featured/?juice'
    },
    {
      id: 5,
      name: 'Hotel Kannappa',
      rating: 3.9,
      time: '10–25 mins',
      type: 'Hotel',
      area: 'Kattur',
      image: 'https://source.unsplash.com/featured/?hotel'
    },
    {
      id: 6,
      name: 'Cafe Coffee Day',
      rating: 3.9,
      time: '20–35 mins',
      type: 'Cafe',
      area: 'Thennur',
      image: 'https://source.unsplash.com/featured/?coffee'
    },
    {
      id: 7,
      name: 'Dominoes',
      rating: 4.1,
      time: '20–35 mins',
      type: 'Pizzas',
      area: 'K.K.nagar',
      image: 'https://source.unsplash.com/featured/?dominos'
    },
    {
      id: 8,
      name: 'Murali Coffee',
      rating: 4.9,
      time: '20–35 mins',
      type: 'Snacks',
      area: 'Chathiram',
      image: 'https://source.unsplash.com/featured/?snacks'
    },
    {
      id: 9,
      name: 'Poco Italy',
      rating: 3.7,
      time: '25–35 mins',
      type: 'Pasta',
      area: 'Thennur',
      image: 'https://source.unsplash.com/featured/?pasta'
    },
    {
      id: 10,
      name: 'Shri Sangeethas',
      rating: 3.5,
      time: '15–35 mins',
      type: 'Hotel',
      area: 'Karrur',
      image: 'https://source.unsplash.com/featured/?veg-meals'
    },
    {
      id: 11,
      name: 'Time Pass',
      rating: 3.9,
      time: '10–35 mins',
      type: 'Snacks',
      area: 'Thillai Nagar',
      image: 'https://source.unsplash.com/featured/?evening-snacks'
    },
    {
      id: 12,
      name: 'Tea Tumblr',
      rating: 3.9,
      time: '20–45 mins',
      type: 'Tea and snacks',
      area: 'Woraiyur',
      image: 'https://source.unsplash.com/featured/?tea'
    }
  ];

  restaurants = this.allRestaurants; // Initial default list

  constructor(private route: ActivatedRoute) {} // ✅ Inject ActivatedRoute

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        const keyword = category.toLowerCase();
        this.restaurants = this.allRestaurants.filter(r =>
          r.name.toLowerCase().includes(keyword) ||
          r.type.toLowerCase().includes(keyword)
        );
      } else {
        this.restaurants = this.allRestaurants; // No filter, show all
      }
    });
  }
}
