import { Component, OnInit } from '@angular/core';
import { RandomenmyService } from '../randomenmy.service';
import { Enemy } from '../enemy';

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

    this.enemyService.getRandomEnemy().subscribe(
      (param_data:Enemy) => {
        this.data = param_data;
      }
    )
  }

}
