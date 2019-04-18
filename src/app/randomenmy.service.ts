import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Enemy } from './enemy';

@Injectable({
  providedIn: 'root'
})
export class RandomenmyService {

  constructor(private enemyService:HttpClient) { }

  public getRandomEnemy():Observable<Enemy>{
    return this.enemyService.get('http://easteregg.wildcodeschool.fr/api/characters/random').pipe(
      map(
        (param_data:any) => {
          let enemy:Enemy = new Enemy();

          enemy.name = param_data.name;
          enemy.image = param_data.image;


          return enemy;
        }
      )
    )
  }
}
