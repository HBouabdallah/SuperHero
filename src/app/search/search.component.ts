import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHero } from '../Models/IHeros';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  listHeros: IHero[]=[];
  filtredListHeros: IHero[]=[];
  sub!: Subscription;
  searchText: string = '';
  constructor(private heroService: HeroService) { }


  ngOnInit(): void {
    this.sub = this.heroService.GetHeros().subscribe({
      next: data => {this.listHeros = data; this.filtredListHeros=this.listHeros},
      error: err => console.log(err)
      
    })
  }
  filterHeroChange(text:string):void
{
  console.log("changed");
  this.filtredListHeros=this.listHeros.filter(hero=> hero.Nom.toLowerCase().includes(text.toLowerCase()))
}
}
