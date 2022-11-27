import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroNumber: number = 0;
  title = 'SuperHero';

  constructor(private data: DataService) {
    
    
  }
  ngOnInit(): void {
   this.data.currentHeroNumber.subscribe(nb =>  this.heroNumber = nb);
  }
}
