import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { FormsComponent } from './forms/forms.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { GameComponent } from './game/game.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AttackComponent } from './attack/attack.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { RouterModule } from '@angular/router';
import { ROUTES } from 'app.routes';

>>>>>>> fddb80685a565bef2b785d2dc821cc28ead0f558

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    FormsComponent,
    GamepageComponent,
    GameComponent,
    InventoryComponent,
    AttackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
=======
    RouterModule.forRoot(ROUTES)
>>>>>>> fddb80685a565bef2b785d2dc821cc28ead0f558
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
