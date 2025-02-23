import { Routes } from '@angular/router';
import { MainAccueilComponent } from './main-accueil/main-accueil.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { QuizzComponent } from './quizz/quizz.component';


export const routes: Routes = [
    {path:'',component:MainAccueilComponent},   
    {path:'quetes',component: QuestListComponent},   
    // {path:'meme',component: MemesComponent},   
    {path:'quizz',component: QuizzComponent},   
];
