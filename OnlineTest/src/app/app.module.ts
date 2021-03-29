import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartquizComponent } from './startquiz/startquiz.component';
import { QuizTimeComponent, } from './quiz-time/quiz-time.component';
import { HttpClientModule } from '@angular/common/http';
import { McqService } from './mcq.service';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    StartquizComponent,
    QuizTimeComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [McqService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
