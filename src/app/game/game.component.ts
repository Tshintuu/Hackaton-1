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

  constructor(private enemyService:RandomenmyService, private eggService:RandomeggService,) {

    this.enemyData;
    this.eggData;
    
   }

  ngOnInit() {

  }
  eggInventory = [];
  inFight: boolean = true;
  dead: boolean =false;
  player: Player = new Player;
  currentEnemy: Enemy = new Enemy;
  difficulty:number = 0;
  
  
  enemyMaxHealth = this.currentEnemy.health;
  
  private delay(ms: number)
    {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  //Battle method
  private async fight(){
    this.currentEnemy.health += (this.difficulty*5);
    this.currentEnemy.attack += this.difficulty;

    let eggPower:number = this.eggInventory.length;
    this.player.health = this.player.maxHealth;
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

    while(this.player.health > 0 && this.currentEnemy.health > 0){
      document.getElementById("enemyDamage").style.opacity= "0.3";
      await this.delay(100);
      this.currentEnemy.health -= (this.player.attack - this.currentEnemy.defense);
      document.getElementById("enemyDamage").style.opacity= "0";
      // 0.5 sec
      await this.delay(500);
      console.log(this.currentEnemy.health)
      if(this.currentEnemy.health <= 0){
        break
      }
      document.getElementById("filter").style.opacity= "0.3";
      document.getElementById("filter").style.zIndex= "1";
      await this.delay(100);
      this.player.health -= (this.currentEnemy.attack - this.player.defense);
      document.getElementById("filter").style.opacity= "0";
      document.getElementById("filter").style.zIndex= "0";
      // 0.5 sec
      await this.delay(500);
      console.log(this.player.health)
    }

    if(this.player.health <= 0 ) {
      this.dead = true;
      document.getElementById("retry").style.opacity = "1";
      document.getElementById("retry").style.zIndex = "2";

    }
    else{
      console.log(enemyEgg)
      this.eggInventory.push(enemyEgg)
      alert("you won an egg and healed yourself")
      this.currentEnemy.health = this.enemyMaxHealth;
      this.player.health = this.player.maxHealth;
      this.inFight = true;
      this.difficulty = this.difficulty + 1;
      console.log(this.difficulty)
    }
    
    console.log(this.eggInventory)

    //Egg status modification
    let statusSign: number;
    let statusValue: number;
    statusValue = parseInt(enemyEgg.power.charAt((enemyEgg.power.length) - 1));
    if (enemyEgg.power.search("increase") != -1) {
      statusSign = 1;
    } else {
      statusSign = -1;
    }
    if (enemyEgg.power.search("power") != -1) {
      this.player.attack += (statusSign * statusValue);
    } else if (enemyEgg.power.search("attack") != -1) {
      //attack speed modification
    } else if (enemyEgg.power.search("proctection") != -1) {
      this.player.defense += (statusSign * statusValue);
    } else if (enemyEgg.power.search("movement") != -1) {
      //movement speed modification
    } else {
      this.player.maxHealth += (statusSign * statusValue);
    }
    console.log(this.player);
  }

  //Inventory method
  private inventory(){
    if(document.getElementById("openInventory").style.opacity == "1"){
      document.getElementById("openInventory").style.opacity = "0";
    }else{
      document.getElementById("openInventory").style.opacity = "1";
    }
    
  }

  //Status method
  private status(){
    if(document.getElementById("openStatus").style.opacity == "1"){
      document.getElementById("openStatus").style.opacity = "0";
    }else{
      document.getElementById("openStatus").style.opacity = "1";
    }
    
  }
}

