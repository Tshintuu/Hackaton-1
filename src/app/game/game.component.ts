import { Component, OnInit } from '@angular/core';
import { RandomenmyService } from '../randomenmy.service';
import { RandomeggService } from '../randomegg.service';
import { Enemy } from '../enemy';
import { Player } from '../player';
import { Egg } from '../egg';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  enemyData:Enemy;
  eggData:Egg;

  constructor(private enemyService:RandomenmyService, private eggService:RandomeggService) {

    this.enemyData;
    this.eggData;
   }

  ngOnInit() {

  }
  eggInventory = [];
  inFight: boolean = true;
  player: Player = new Player;
  currentEnemy: Enemy = new Enemy;
  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  private async fight(){
    this.inFight = false;
    this.enemyService.getRandomEnemy().subscribe(
      (param_data:Enemy) => {
        this.enemyData = param_data;
      }
    )
    let enemyEgg: Egg = new Egg;
    this.eggService.getRandomEgg().subscribe(
      (param_data:Egg) => {
        this.eggData = param_data;
        enemyEgg = param_data;
      }
    )
    
    //assigning API egg data to egg created during fight
    /*enemyEgg.name = this.eggData.name;
    enemyEgg.image = this.eggData.image;
    enemyEgg.color = this.eggData.color;
    enemyEgg.rank = this.eggData.rank;
    enemyEgg.rarity = this.eggData.rarity;
    enemyEgg.power = this.eggData.power;*/

    while(this.player.health > 0 && this.currentEnemy.health > 0){
      this.currentEnemy.health -= (this.player.attack - this.currentEnemy.defense);
      // 0.5 sec
      await this.delay(500);
      console.log(this.currentEnemy.health)
      if(this.currentEnemy.health <= 0){
        break
      }
      this.player.health -= (this.currentEnemy.attack - this.player.defense);
      // 0.5 sec
      await this.delay(500);
      console.log(this.player.health)
    }
    if(this.player.health <= 0 ) {
      alert("You died")
    }
    else{
      this.eggInventory.push(enemyEgg)
      alert("you won an egg")
      this.inFight = true;
    }
    console.log(enemyEgg)
    console.log(this.eggInventory)
  }
}

