import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Egg } from './egg';

@Injectable({
  providedIn: 'root'
})
export class RandomeggService {

  constructor(private eggService:HttpClient) { }

  public getRandomEgg():Observable<Egg>{
    return this.eggService.get('http://easteregg.wildcodeschool.fr/api/eggs/random').pipe(
      map(
        (param_data:any) => {
          let egg:Egg = new Egg();

          egg.name = param_data.name;
          egg.image = param_data.image;
          egg.color = param_data.color;
          egg.rank = param_data.rank;
          egg.rarity = param_data.rarity;
          egg.power = param_data.power;

          return egg;
          
        }
      )
    )
  }
}
