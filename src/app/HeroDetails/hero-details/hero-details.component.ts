import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IHero } from 'src/app/Models/IHeros';
import { HeroService } from 'src/app/Services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  id: number = 0;
  hero: IHero | undefined ;
  sub!: Subscription;

  constructor(private router: ActivatedRoute,private heroService: HeroService) { }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'))
    this.sub = this.heroService.GetHeros().subscribe({
      next : data=> {this.hero = data.find(h=>h.Id == this.id); console.log(JSON.stringify(data))},
      error : err=> console.log(err)
    });
  }

}
