import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Enemy } from '../enemy';
import { Egg } from '../egg';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  eggInventory = [];
  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  private async fight(){
    let currentEnemy: Enemy
    let enemyEgg: Egg
    while(Player.health > 0 && currentEnemy.health > 0){
      Enemy.health -= (Player.attack - currentEnemy.defense);
      // 1 sec
      await this.delay(1000);

      Player.health -= (currentEnemy.attack - Player.defense);
      // 1 sec
      await this.delay(1000);

    }
    if(Player.health <= 0 ) {
      alert("You died")
    }
    else{
      this.eggInventory.push(enemyEgg)
    }
  }
*/
}
