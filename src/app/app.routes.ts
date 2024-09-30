import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameComputerComponent } from './game-computer/game-computer.component';

export const routes: Routes = [
    { path: 'twoPlayerGame', component: GameComponent },
    { path: 'singlePlayerGame', component: GameComputerComponent }
];
