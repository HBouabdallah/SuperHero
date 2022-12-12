import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { IHero } from '../Models/IHeros';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  apiUrl = '../../assets/data/BDD_Hero.json'
  constructor(private http: HttpClient) { }
  GetHeros(): Observable <IHero[]>{
    let heroList = this.http.get<IHero[]>(this.apiUrl);
    return heroList;
    }
  } 

