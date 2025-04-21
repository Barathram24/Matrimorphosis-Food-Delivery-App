import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import this for HTTP calls

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { ServiceCardsComponent } from './components/service-cards/service-cards.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';

import { RestaurantService } from './services/restaurant.service'; // ✅ Service import

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSectionComponent,
    ServiceCardsComponent,
    RestaurantListComponent,
    HomeComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // ✅ Include this so Angular can make HTTP requests
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
