import { Routes } from '@angular/router';
import { FormsComponent } from "./src/app/forms/forms.component";
import { GameComponent } from "./src/app/game/game.component";
import { InventoryComponent } from "./src/app/inventory/inventory.component";
import { GamepageComponent } from "./src/app/gamepage/gamepage.component";



const ROUTES: Routes = [
    { path: 'forms', component: FormsComponent },
    { path: 'game', component: GameComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'gamepage', component: GamepageComponent },
    { path: '', redirectTo: "play", pathMatch: "full" }
];

export { ROUTES };