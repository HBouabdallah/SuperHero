import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  behaviorHeroNumber = new BehaviorSubject<number>(0)
  currentHeroNumber = this.behaviorHeroNumber.asObservable();
  
  constructor() { }

  changecurrentHeroNumber(nb : number){
    this.behaviorHeroNumber.next(nb);
  }
}
