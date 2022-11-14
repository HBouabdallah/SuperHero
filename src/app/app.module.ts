import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailsComponent } from './HeroDetails/hero-details/hero-details.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroDetailsComponent,
    SearchComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path: '', component:HomeComponent},
      {path:'details/:id', component:HeroDetailsComponent},
      {path:'search', component:SearchComponent},
      {path:'add', component:AddHeroComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
