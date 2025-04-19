import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() {}

  getRestaurants() {
    return [
      {
        id: 1,
        name: 'Pizza Hut',
        image: 'assets/images/pizzahut.jpg',
        rating: 4.2,
        time: '35–40 mins',
        type: 'Pizza',
        area: 'Thillai Nagar',
        menu: [
          {
            name: 'Tandoori Paneer',
            price: 319,
            rating: 4.1,
            description: "Spiced paneer, onions & green capsicum, tandoori sauce",
            image: 'https://img.freepik.com/premium-photo/batata-harra-pizza-with-potato-served-cutting-board-isolated-background-top-view-fast-food_689047-4757.jpg?ga=GA1.1.1433512103.1698413417&semt=ais_hybrid&w=740'
          },
          {
            name: 'Veggie Supreme',
            price: 379,
            rating: 4.2,
            description: "Olives, capsicum, mushroom, onion, sweet corn",
            image: 'https://img.freepik.com/premium-photo/pizza-de-vegetales-de-restaurante_960508-55.jpg?ga=GA1.1.1433512103.1698413417&semt=ais_hybrid&w=740'
          },
          {
            name: 'Panner Tikka Pizza',
            price: 120,
            rating: 4.5,
            description: "Traditional ghee-based sweet from Karnataka",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Deleux Veggie',
            price: 120,
            rating: 4.5,
            description: "Traditional ghee-based sweet from Karnataka",
            image: 'https://img.freepik.com/free-photo/top-view-vegetarian-pizza-with-eggplant-bell-pepper-red-onion-tomato-mushroom_141793-2454.jpg?ga=GA1.1.1433512103.1698413417&semt=ais_hybrid&w=740'
          }
        ]
      },
      {
        id: 2,
        name: 'Aswins Sweets',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Cake',
        area: 'Srirangam',
        menu: [
          {
            name: 'Gulab Jamun',
            price: 99,
            rating: 4.6,
            description: "Soft sweet balls soaked in rose-flavored sugar syrup",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Mysore Pak',
            price: 120,
            rating: 4.5,
            description: "Traditional ghee-based sweet from Karnataka",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Mixture',
            price: 120,
            rating: 4.5,
            description: "Traditional ghee-based sweet from Karnataka",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Wheel Chips',
            price: 120,
            rating: 4.5,
            description: "Traditional ghee-based sweet from Karnataka",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },{
        id: 3,
        name: 'Cake and Treats',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Cake',
        area: 'Srirangam',
        menu: [
          {
            name: 'Whiteforest Cake',
            price: 244,
            rating: 4.6,
            description: "A delightful dessert consisting of layers of vanilla sponge cake",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Fudgy Brownie',
            price: 120,
            rating: 4.5,
            description: "Savour perfection with our four-piece browibe boxes.Rich,fudgy squares that redefine indulgence",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Choco Mousse',
            price: 160,
            rating: 4.7,
            description: "Indulge in silky Choco mousse,a velvety delight that melts in your mounth,satisfying your sweetest craving with every heavenly bite",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Oreo Shake',
            price: 100,
            rating: 4.5,
            description: "Satisfy your sweet tooth with our oreo shake,a heavenly blend of vanila ice cream and crushed oreo",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 4,
        name: '700 ml',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'juice',
        area: 'Koothur',
        menu: [
          {
            name: 'Orange juice',
            price: 50,
            rating: 4.6,
            description: "A zesty burst of vitamin C with every sip!",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Watermelon juice',
            price: 40,
            rating: 4.5,
            description: "Refreshingly sweet and hydrating, perfect for a hot day!",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Apple juice',
            price: 80,
            rating: 4.7,
            description: "Smooth, crisp, and naturally sweet – a classic favorite!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Fruit Falooda',
            price: 100,
            rating: 4.5,
            description: "Mixed fruits,milk,sabja seeds,color balls and vanilla ice cream",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 5,
        name: 'Hotel Kannappa',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Biriyani',
        area: 'Kattur',
        menu: [
          {
            name: 'Chicken Biriyani',
            price: 200,
            rating: 4.6,
            description: "Aromatic basmati rice cooked with tender chicken and rich spices",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Mutton Biriyani',
            price: 220,
            rating: 4.5,
            description: "uicy mutton pieces slow-cooked with flavorful rice and herbs",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Chicken Lollipop',
            price: 120,
            rating: 4.7,
            description: "SCrispy, spicy, and juicy chicken wings – perfect for snacking!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Fish Finger',
            price: 250,
            rating: 4.5,
            description: "Golden-fried fish strips, crispy outside and soft inside.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 6,
        name: 'Cafe Coffe Day',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Cake',
        area: 'Thennur',
        menu: [
          {
            name: 'Cold Coffe',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Iced Mocha',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Choco Chip Coffee',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Iced Latte',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 7,
        name: 'Dominos',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Pizza',
        area: 'K.K.nagar',
        menu: [
          {
            name: 'Margherita',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Petit Paneer Pizza',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Deluxe Veggie',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Cheese and Corn',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 8,
        name: 'Murali Coffee',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Coffee',
        area: 'Chathiram',
        menu: [
          {
            name: 'Filter Coffe',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Plain Coffee',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Samosa',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Baaji',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 9,
        name: 'Poco Italy',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Pasta',
        area: 'Thennur',
        menu: [
          {
            name: 'Veg Cream Pasta',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Panner Pasta',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Mushroom Pasta',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Spicy Pasta',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 10,
        name: 'Shri sangeethas',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Hotel',
        area: 'Kattur',
        menu: [
          {
            name: 'Veg Fried Rice',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Panner Butter Masala + Naan',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Gobi 65',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Mushroom soup',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 11,
        name: 'Time Pass',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Snacks',
        area: 'Thillai Nagar',
        menu: [
          {
            name: 'Burger',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: ' Veg Sandwich',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Maggie',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Cheese and Corn Pizza',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },
      {
        id: 12,
        name: 'Tea Tumblr',
        image: 'assets/images/aswins.jpg',
        rating: 4.7,
        time: '20–25 mins',
        type: 'Tea',
        area: 'Woraiyur',
        menu: [
          {
            name: 'Masala Tea',
            price: 200,
            rating: 4.6,
            description: "A classic delight with fresh mozzarella, tangy tomato sauce, and basil",
            image: 'assets/images/gulabjamun.jpg'
          },
          {
            name: 'Lemon Tea',
            price: 220,
            rating: 4.5,
            description: "Soft paneer cubes on a cheesy crust, topped with flavorful spices and veggies.",
            image: 'assets/images/mysorepak.jpg'
          },
          {
            name: 'Ginger Tea',
            price: 120,
            rating: 4.7,
            description: "A  veggie lover’s dream – loaded with crunchy capsicum, onions, mushrooms, and more!",
            image: 'assets/images/mysorepak.jpg'
          },{
            name: 'Lemongrass Tea',
            price: 250,
            rating: 4.5,
            description: "Creamy melted cheese meets sweet corn for a simple yet satisfying bite.",
            image: 'assets/images/mysorepak.jpg'
          }
        ]
      },








    ];
  }

  getRestaurantById(id: number) {
    return this.getRestaurants().find(r => r.id === id);
  }
}
