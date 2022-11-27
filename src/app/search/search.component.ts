import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHero } from '../Models/IHeros';
import { DataService } from '../Services/data.service';
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
  constructor(private heroService: HeroService, private data:DataService) { }


  ngOnInit(): void {
    this.sub = this.heroService.GetHeros().subscribe({
      next: data => {
        this.listHeros = data; this.filtredListHeros=this.listHeros;
        this.data.changecurrentHeroNumber(this.listHeros.length);
      },
      error: err => console.log(err)
      
    });
  }
  filterHeroChange(text:string):void
{
  this.filtredListHeros=this.listHeros.filter(hero=> hero.Nom.toLowerCase().includes(text.toLowerCase()))
}
}
