import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailsComponent } from './HeroDetails/hero-details/hero-details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroDetailsComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
