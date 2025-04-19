// in app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // ✅ Needed for router-outlet

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/restaurant-main/header/header.component';
import { SearchSectionComponent } from './components/restaurant-main/search-section/search-section.component';
import { ServiceCardsComponent } from './components/restaurant-main/service-cards/service-cards.component';
import { RestaurantListComponent } from './components/restaurant-main/restaurant-list/restaurant-list.component';
import { HomeComponent } from './components/restaurant-main/home/home.component';
import { RestaurantDetailComponent } from './components/restaurant-main/restaurant-detail/restaurant-detail.component';

// ✅ Import the service here
import { RestaurantService } from './services/restaurant.service';

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
    HttpClientModule,
    RouterModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
