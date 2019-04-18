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
  player: Player = new Player;
  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  private async fight(){
    let currentEnemy: Enemy = new Enemy;
    let enemyEgg: Egg = new Egg;
    while(this.player.health > 0 && currentEnemy.health > 0){
      currentEnemy.health -= (this.player.attack - currentEnemy.defense);
      // 1 sec
      await this.delay(1000);
      console.log(currentEnemy.health)
      if(currentEnemy.health <= 0){
        break
      }
      this.player.health -= (currentEnemy.attack - this.player.defense);
      // 1 sec
      await this.delay(1000);
      console.log(this.player.health)
    }
    if(this.player.health <= 0 ) {
      alert("You died")
    }
    else{
      this.eggInventory.push(enemyEgg)
      alert("you won an egg")
    }
  }
}
