import { Routes } from '@angular/router';
import { FormsComponent } from "./src/app/forms/forms.component";
import { GameComponent } from "./src/app/game/game.component";
import { InventoryComponent } from "./src/app/inventory/inventory.component";
import { GamepageComponent } from "./src/app/gamepage/gamepage.component";
import { PlayComponent } from "./src/app/play/play.component";



const ROUTES: Routes = [
    { path: 'forms', component: FormsComponent },
    { path: 'game', component: GameComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'gamepage', component: GamepageComponent },
    { path: 'play', component: PlayComponent },
    { path: '', redirectTo: "play", pathMatch: "full" }
];

export { ROUTES };