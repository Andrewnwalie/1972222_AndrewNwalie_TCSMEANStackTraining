import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizTimeComponent } from './quiz-time/quiz-time.component';
import { ResultComponent } from './result/result.component';
import { StartquizComponent } from './startquiz/startquiz.component';

const routes: Routes = [

  { path: 'StartQuiz', component: StartquizComponent },
  { path: 'Quiz', component: QuizTimeComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: 'StartQuiz', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
