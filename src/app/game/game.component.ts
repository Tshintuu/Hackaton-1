import { Component, OnInit } from '@angular/core';
import { RandomenmyService } from '../randomenmy.service';
import { Enemy } from '../enemy';
import { Player } from '../player';
import { Egg } from '../egg';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  data:Enemy;

  constructor(private enemyService:RandomenmyService) {

    this.data;
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
    this.enemyService.getRandomEnemy().subscribe(
      (param_data:Enemy) => {
        this.data = param_data;
      }
    )
    //let currentEnemy: Enemy = new Enemy;
    let enemyEgg: Egg = new Egg;
    this.inFight = false;
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
  }
}

