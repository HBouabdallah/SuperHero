import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './HeroDetails/hero-details/hero-details.component';
import { HomeComponent } from './Home/home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path:'details/:id', component:HeroDetailsComponent},
  {path:'search',component:SearchComponent},
  {path:'add', loadComponent:()=> import('./add-hero/add-hero.component').then(c=> c.AddHeroComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
