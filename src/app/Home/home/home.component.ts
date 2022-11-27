import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/Services/hero.service';
import { IHero } from 'src/app/Models/IHeros';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listHero : IHero[] = [];
  availableHeros : IHero[] = [];
  constructor(private heroService: HeroService, private data:DataService) { }

  ngOnInit(): void {
     this.heroService.GetHeros().subscribe({
      next:(data => {
        this.listHero = data;
        this.availableHeros =this.listHero.filter(hero=> hero.Age<20) ;
        this.data.changecurrentHeroNumber(this.listHero.length);} )
    } );
  }

}
