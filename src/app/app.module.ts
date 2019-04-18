import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { FormsComponent } from './forms/forms.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { GameComponent } from './game/game.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AttackComponent } from './attack/attack.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
