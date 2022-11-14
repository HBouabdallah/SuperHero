import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/Services/hero.service';
import { IHero } from 'src/app/Models/IHeros';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listHero : IHero[] = [];
  availableHeros : IHero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    let sub = this.heroService.GetHeros().subscribe({
      next:(data => {this.listHero = data;this.availableHeros =this.listHero.filter(hero=> hero.Age<20) ;} )
    } );
    

  }

}
